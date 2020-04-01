<template>
  <div class="sheet-songs">
    <detail-header title="热门歌单" :src="img"/>
    <scroll :top='250' :list="songList" ref="scroll">
     <detail-list :song-list="songList"/>
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
    }
	},
  methods: {
    fetchSongsList() {
      var that = this;
      // console.log(this.$route.params.id);
      var sheetId = that.$route.params && that.$route.params.id;
      this.$axios.get('/playlist/detail?id='+sheetId)
        .then(res => {
          console.log(res.data.playlist);
          this.songList =  res.data.playlist.tracks.map(item => ({  
            songname: item.name,
            id: item.id,
          }))
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