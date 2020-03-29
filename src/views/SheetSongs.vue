<template>
  <div class="sheet-songs">
    <detail-header title="歌单详情"/>
    <detail-list :song-list="songList"/>
  </div>
</template>
<script>
import DetailHeader from '@/components/main/detail/DetailHeader'
import DetailList from '@/components/main/detail/DetailList'
export default {
  components: {
    DetailHeader,
    DetailList
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
  methods: {
    fetchSongsList() {
      var that = this;
      var sheetId = that.$route.params && that.$route.params.sheetId;
      this.$axios.get('/playlist/detail?id='+sheetId)
        .then(res => {
          this.songList =  res.data.playlist.trackIds.map(item => ({  
            id: item.id
          }))
        })
        .catch(err => {
          console.log(err)
        })
      this.$axios.get('/song/detail?id='+this.songList.id)
      .then(res => {
          console.log(res.data);
          this.songList = res.data.map(item => ({  
            id: item.id
          }))
        })
        .catch(err => {
          console.log(err)
        })
    },
  }
}
</script>