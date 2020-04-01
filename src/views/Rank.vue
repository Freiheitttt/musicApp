<template>
  <div class="rank">
    <scroll :top="76" :list="rankList" ref="scroll">
      <div>
        <rank-list :rank-list="rankList" @select="getRankId"></rank-list>
      </div>
    </scroll>
  </div>
</template>
<script>
import RankList from '@/components/main/rank/RankList'
import Scroll from '@/components/common/Scroll'
import getToplistsData from '@/api/getToplistsData'

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
      getToplistsData()
        .then((res) => {
          //console.log(res.data);
          this.rankList = res.data.topList
        })
        .catch(err => {
          console.log(err)
        })
    },
    scrollRefresh(){
      this.$refs.scroll.refresh();
    },
    getRankId: function(id,img) {
      this.$router.push({
        path: `/rankSongs/${id}?img=${img}`
      })
    }
  },
  created() {
    this.fetchRankList();
  }
}
</script>