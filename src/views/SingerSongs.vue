<template>
  <div class="singer-songs">
    <detail-header :title="singername" :src="img"/>
    <scroll :top='250' :list="songList" ref="scroll">
      <div>
        <detail-list :song-list="songList"/>
      </div>
    </scroll>
  </div>
</template>

<script>
import DetailHeader from '@/components/main/detail/DetailHeader'
import DetailList from '@/components/main/detail/DetailList'
import Scroll from '@/components/common/Scroll'
import { getSingerData } from '@/api/getSingerlistData'
import { createSong } from '@/assets/js/song'
export default {
  components: {
    DetailHeader,
    DetailList,
    Scroll,
  },
  data() {
    return {
      songList: [],
      singer: '',
    }
  },
  created() {
    this.fetchSongsList();
  },
  computed:{
    singername(){
      return this.$route.query.singername||this.singer;
    },
    img(){
      let id=this.$route.params.id;
      return `https://y.gtimg.cn/music/photo_new/T001R300x300M000${id}.jpg?max_age=2592000`
    }
	},
  methods: {
    fetchSongsList() {
      var that = this;
      var id = that.$route.params && that.$route.params.id;
      getSingerData(id).then((res)=>{
        var data=res.data;
        this.singer=data.singer_name
        data.list.forEach((item)=>{
          this.songList.push(createSong(item.musicData))
        })
      })
    },
    scrollRefresh(){
      this.$refs.scroll.refresh();
    },
  }
}
</script>
<style scoped>
</style>