<template>
  <div class="sheet-songs">
    <detail-header title="热门歌单" :src="img"/>
    <scroll :top='250' :list="songList" ref="scroll">
     <detail-list :song-list="songList" @select="getSongId"/>
    </scroll>
  </div>
</template>
<script>
import DetailHeader from '@/components/main/detail/DetailHeader'
import DetailList from '@/components/main/detail/DetailList'
import Scroll from '@/components/common/Scroll'

export default {
  components: {
    DetailHeader,
    DetailList,
    Scroll,
  },
  data() {
    return {
      sheetId: '',
      songList: [],
    }
  },
  created() {
    this.fetchSongsList();
  },
  computed:{
    img(){
      return this.$route.query.img||this.img;
    },
	},
  methods: {
    fetchSongsList() {
      var that = this;
      // console.log(this.$route.params.id);
      var sheetId = that.$route.params && that.$route.params.id;
      that.$axios.get('/playlist/detail?id='+sheetId)
        .then(res => {
          console.log(res.data.playlist.tracks);
          that.songList = res.data.playlist.tracks.map(item => ({ 
            songname: item.name,
            id: item.id,
            singername: item.ar[0].name,
            albumname: item.al.name,
            img:item.al.picUrl,
          }))
          console.log(that.songList);
          
        })
        .catch(err => {
          console.log(err)
        })
    },
    scrollRefresh(){
      this.$refs.scroll.refresh();
    },
  }
}
</script>