<template>
  <div class="singer">
    <scroll :top="76" :list="singerList" ref="scroll">
      <div>
        <singer-category
          :singer-category = "singerCategory"
        />
        <singer-list
          :singer-list = "singerList"
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
      singerList: []
    }
  },
  methods: {
    async fetchSingerCategory() {
      const {data: {data: category}} = await this.$http.get('/artist/category');
      this.singerCategory = {
        sex: category.sex,
        area: category.area,
        genre: category.genre,
      }
      //console.log(this.singerCategory);
    },
    async fetchSingerList() {
      const res = await this.$http.get('/artist/list');
      //console.log(res.data);
      this.singerList = res.data.data.map(item => ({
        id: item.singer_id,
        img: item.singer_pic,
        name: item.singer_name,
      }))
      //console.log(this.singerList);
    },
  },
  created() {
      this.fetchSingerCategory();
      this.fetchSingerList();
  },
}
</script>