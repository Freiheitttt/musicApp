<template>
  <div class="singer">
    <scroll :top="76" :list="singerList" ref="scroll">
      <div>
        <singer-category
          :singer-category = "singerCategory"
          @categoryId="categoryId"
        />
        <singer-list
          :singer-list = "singerList"
          @select = 'getSingerId'
        />
      </div>
    </scroll>
    
  </div>
</template>

<script>
import SingerCategory from '@/components/main/singer/SingerCategory'
import SingerList from '@/components/main/singer/SingerList'
import Scroll from '@/components/common/Scroll'

export default {
  components: {
    SingerCategory,
    SingerList,
    Scroll,
  },
  data() {
    return {
      singerCategory: {},
      singerList: [],
      sexId: -100,
      areaId: -100,
      genre: -100,
      categoryId :5001,
    }
  },
  methods: {
    fetchSingerCategory() {
      this.$axios.get('/artist/cat')
        .then(res => {
          //console.log(res.data);
          this.singerCategory = res.data.result.map(item => ({  
            sex: item.sex,
            area: item.area,
            genre: item.genre,
          }))
          //console.log(this.swiperList)
        })
        .catch(err => {
          console.log(err)
        })
      //console.log(this.singerCategory);
    },
    fetchSingerList() {
      this.$axios.get('/artist/list?cat='+ this.categoryId)
        .then(res => {
          //console.log(res.data);
          this.singerList = res.data.artists.map(item => ({  
            name: item.name,
            img: item.picUrl,
            id: item.id,
          }))
          //console.log(this.swiperList)
        })
        .catch(err => {
          console.log(err)
        })
      //console.log(this.singerList);
    },
    getSingerId: function(id) {
      //console.log(`${id}`);
      this.$router.push({
        path: `/singerSongs/${id}`
      })
    }
  },
  created() {
      this.fetchSingerCategory();
      this.fetchSingerList();
  },
  mounted() {

  }
}
</script>