<template>
  <div class="recommend">
    <scroll :top="76" :list="hotSong" ref="scroll">
      <div class="scroll-wrapper">
        <my-swiper
          :swiper-list="swiperList"
          :swiper-option="swiperOption"
          @img-load="scrollRefresh"
        />
        <song-sheet-list
          :hot-song="hotSong"
        />
      </div>
      
    </scroll>
  </div>
</template>
<script>
import MySwiper from '@/components/main/recommend/MySwiper'
import SongSheetList from '@/components/main/recommend/SongSheetList'
import Scroll from '@/components/common/Scroll'


export default {
  components :{
    MySwiper,
    SongSheetList,
    Scroll,
  },
  data() {
    return {
      swiperList: [],
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true,
        autoplay: true,
      },
      hotSong: [],
    }
  },
  methods: {
    async fetchSwiperList() {
      const res = await this.$http.get('/banner');
      //console.log(res.data);
      this.swiperList = res.data.data.map(item => ({img: item.pic_info.url}))
    },
    async fetchHotSong(){
      const res = await this.$http.get('songList/hot');
      //console.log(res.data);
      this.hotSong = res.data.data.list.map(item => ({
        id: item.dissid,
        img: item.imgurl,
        title: item.creator.name,
        info: item.dissname
      }))
      //console.log(this.hotSong);
    },
    scrollRefresh(){
      this.$refs.scroll.refresh();
    }
  },
  created() {
    setTimeout(() => {
      this.fetchSwiperList();
    }, 1000);
    this.fetchHotSong();
  }
}
</script>