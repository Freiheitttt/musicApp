<template>
  <div class="rank">
    <scroll :top="76" :list="rankList" ref="scroll">
      <div>
        <rank-list :rank-list="rankList"></rank-list>
      </div>
    </scroll>
  </div>
</template>
<script>
import RankList from '@/components/main/rank/RankList'
import Scroll from '@/components/common/Scroll'

export default {
  components: {
    RankList,
    Scroll,
  },
  data() {
    return {
      rankList: [],
    }
  },
  methods: {
    fetchRankList() { 
      this.$axios.get('/topList/detail')
        .then((res) => {
          console.log(res.data.list);
          this.rankList = res.data.list
        })
        .catch(err => {
          console.log(err)
        })
    },
    scrollRefresh(){
      this.$refs.scroll.refresh();
    },
  },
  created() {
    this.fetchRankList();
  }
}
</script>