<template>
  <div class="recommend">
    <scroll :top="76" :list="hotSong" ref="scroll">
      <div class="scroll-wrapper">
        <my-swiper
          :swiper-list="swiperList"
          :swiper-option="swiperOption"
          @img-load="scrollRefresh"
        />
        <div class="ml-2 mt-2">
          <span class="text-primary text-lg">|</span>
          <span class="text-md text-gray3">热门歌单</span>
        </div>
        <song-sheet-list
          :hot-song="hotSong"
          @select = 'getSheetId'
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
      sheetId: '',
      songs: [],
    }
  },
  methods: {
    fetchSwiperList() {
      this.$axios.get('/banner')
        .then(res => {
          this.swiperList =  res.data.banners.map(item => ({  
            img: item.imageUrl
          }))
          //console.log(this.swiperList)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchHotSong(){
      this.$axios.get('/personalized')
        .then(res => {
          console.log(res.data.result);
          this.hotSong = res.data.result.map(item => ({  
            id: item.id,
            img: item.picUrl,
            title: item.name,
          }))
        })
        .catch(err => {
          console.log(err)
        })
      //console.log(this.hotSong);
    },
    scrollRefresh(){
      this.$refs.scroll.refresh();
    },
    getSheetId: function(id) {
      console.log(`${id}`);
      this.$router.push({
        path: `/sheetSongs/${id}`
      })
    }
  },
  created() {
    setTimeout(() => {
      this.fetchSwiperList();
      this.fetchHotSong();
    }, 500);
  }
}
</script>