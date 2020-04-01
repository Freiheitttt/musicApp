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
          @select = 'getId'
        />
      </div>
    </scroll>
  </div>
</template>

<script>
import SingerCategory from '@/components/main/singer/SingerCategory'
import SingerList from '@/components/main/singer/SingerList'
import Scroll from '@/components/common/Scroll'
import getSingerlistData from '@/api/getSingerlistData.js'

const HOT_NAME=""   
const HOT_LIST_LEN = 10 //热门歌手数组长度
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
      this.$axios.get('/artist/category')
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
      getSingerlistData().then((res)=>{
        console.log(res.data);
					this.singerList = this.normalizeList(res.data.list)
				}).catch(err => {
          console.log(err)
        })
    },
    normalizeList(list){
      let map={
        hot:{
          title:HOT_NAME,
          items:[]
        }
      }
      list.forEach((item,index)=>{
        if(index<HOT_LIST_LEN){
          map.hot.items.push({
            singername:item.Fsinger_name,
            singermid:item.Fsinger_mid,
            img:`https://y.gtimg.cn/music/photo_new/T001R300x300M000${item.Fsinger_mid}.jpg?max_age=2592000`
          })
        }
        let key=item.Findex;
        if (!map[key]) {
          map[key]={
            title:key,
            items:[]
          }
        }
        map[key].items.push({
          singername:item.Fsinger_name,
          singermid:item.Fsinger_mid,
          img:`https://y.gtimg.cn/music/photo_new/T001R300x300M000${item.Fsinger_mid}.jpg?max_age=2592000`
        })
      })
      //开始排序
      let hot=[];
      let sortList=[];
      hot.push(map.hot);
      for(var key in map){
        if (map[key].title.match(/[a-zA-Z]/)) {
          sortList.push(map[key]);
        }
      }
      sortList.sort(function(a,b){
        return a.title.charCodeAt(0)-b.title.charCodeAt(0);
      })
      return hot.concat(sortList);
    },

    
    getId: function(id,name) {
      //console.log(`${id}`);
      this.$router.push({
        path: `/singerSongs/singer/${id}`,params:{singername:name}
      })
    },
    scrollRefresh(){
      this.$refs.scroll.refresh();
    },
  },
  created() {
      //this.fetchSingerCategory();
      this.fetchSingerList();
  },
}
</script>