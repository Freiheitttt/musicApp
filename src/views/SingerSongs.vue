<template>
  <div class="singer-songs">
    <detail-header :title="name" 
      :src="img"/>
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
      singerId: '',
      songList: [],
      name: '',
      img: '',
    }
  },
  created() {
    this.fetchSongsList();
    
  },
  methods: {
    fetchSongsList() {
      var that = this;
      var singerId = that.$route.params && that.$route.params.singerId;
      this.$axios.get('/artists?id='+singerId)
        .then(res => {
          console.log(res.data.hotSongs);
          this.name =  res.data.artist.name;
          this.img =  res.data.artist.img1v1Url;
          this.songList = res.data.hotSongs;
        })
        .catch(err => {
          console.log(err)
        })
    },
  }
}
</script>