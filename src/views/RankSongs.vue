<template>
  <div class="rank-songs">
    <detail-header title="排行榜" :src="img"/>
    <scroll :top='250' :list="songList" ref="scroll">
     <detail-list :song-list="songList"/>
    </scroll>
  </div>
</template>
<script>
import DetailHeader from '@/components/main/detail/DetailHeader'
import DetailList from '@/components/main/detail/DetailList'
import Scroll from '@/components/common/Scroll'
import { getToplist } from '@/api/getToplistsData.js'
import { createSong } from '@/assets/js/song'
export default {
  data() {
    return {
      songList: [],
      title: '',
    }
  },
  components: {
    DetailHeader,
    DetailList,
    Scroll,
  },
  computed :{
    img(){
      return this.$route.query.img||this.img;
    }
  },
  created() {
    this.fetchRankSongs();
  },
  methods: {
    fetchRankSongs() {
      var that = this;
      let id=this.$route.params.id;
				getToplist(id).then((res)=>{
          res.songlist.forEach((item)=>{
            this.songList.push(createSong(item.data))
          })
          console.log(this.songList);
      })
    }
  },
}
</script>