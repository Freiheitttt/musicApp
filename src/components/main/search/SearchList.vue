<template>
  <div class="search-list pt-2">
    <div class="singer-list bg-gray1" v-show="singerList.length">
      <ul>
        <li v-for="item of singerList" :key="item.id" class="mb-2" @click="selectItem(index)">
          <div class="singerStyle d-flex">
            <img v-lazy="item.img">
            <span>{{item.name}}</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="singer-list" v-show="songsList.length">
      <ul>
        <li v-for="item of songsList" :key="item.id" class="songStyle" @click="selectItem(index)">
          <span class="text-md text-primary">{{item.name}}</span>
          <div class="text-gray2 mb-2 mt-1">
            <span>{{item.singer}}--</span>
            <span>{{item.album}}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapGetters,mapActions  } from 'vuex'
export default {
  props: {
    songsList: {
      type: Array,
      default: () => []
    },
    singerList: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    ...mapActions([
      'selectPlay'
    ]),
    // selectItem(index) {
    //   let list = this.songsList.slice()
    //   this.selectPlay({
    //     list,
    //     index
    //   })
    // },
  }
}
</script>
<style scoped>
.singerStyle img{
  width: 4rem;
  height: 4rem;
  margin-left: 2rem;
  border-radius: 50%;
}
.singerStyle span{
  line-height: 4rem;
  font-size: 1.2rem;
  margin-left: 2rem;
  color: #1a73e1;
}
.songStyle{
  border-bottom: 1px solid rgb(72, 97, 204);
  padding-left: 1.2rem;
  margin-top: 1rem;
}
</style>