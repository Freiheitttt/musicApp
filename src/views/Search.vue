<template>
  <div class="search">
    <input-search :hot-list="hotList" @getInput="getInput"/>
    <search-list :songs-list="songsList" :singer-list="singerList"   v-show="value"/>
  </div>
</template>
<script>
import InputSearch from '@/components/main/search/InputSearch'
import SearchList from '@/components/main/search/SearchList'
import { getHotKey,getSuggestion } from '@/api/getHotKey'
import { createSong } from '@/assets/js/song'
import debounce from '@/assets/js/util'

export default {
  components: {
    InputSearch,
    SearchList,
  },
  data() {
    return {
      singerList: [],
      songsList: [],
      hotList: [],
      value: '',
    }
  },
  methods: {
    fetchHotList: function() {
      // this.$axios.get('/search/hot').then(res => {
      //   console.log(res.data);
      //   this.hotList = res.data.result.hots.map(item => ({  
      //     hot: item.first
      //   }));
      // })
      getHotKey().then((res)=>{
        console.log(res.data);
        for(let i=0;i<10;i++){
          this.hotList.push(res.data.hotkey[i])
        }
      })
    },
    getInput: function(val){
      var that = this;
      this.singerList = '';
      this.songsList = '';
      that.value = val;
      debounce(() => {
        that.fetchMusicList(val);
      },500)
    },
    fetchMusicList: function(val) {
      if(val){
        this.$axios.get('/search/suggest?keywords='+val)
        .then(res => {
          console.log(res.data.result);
          if(res.data.result.artists){
            this.singerList = res.data.result.artists.map(item => ({  
              id: item.id, img: item.picUrl, name: item.name,
            }));
          }
          this.songsList = res.data.result.songs.map(item => ({  
            id: item.id, name: item.name, singer: item.artists[0].name,
            album: item.album.name
          }))
        })
        .catch(err => {
          console.log(err)
        })
      }
    },
  },
  created() {
    this.fetchHotList();
  }
}
</script>