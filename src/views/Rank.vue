<template>
  <div class="rank">
    <scroll :top="76" :list="rankList" ref="scroll">
      <div>
        <rank-list></rank-list>
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
      rankList: []
    }
  },
  methods: {
    async fetchRankList() {
      const res = await this.$http.get('/topList');
      console.log(res.data);
    }
  },
  created() {
    this.fetchRankList()
  }
}
</script>