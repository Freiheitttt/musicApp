<template>
  <div class="search-list">
    <div class="search-suggestion" v-show="value" ref="suggestion">
			<mt-loadmore 
				:bottom-method="loadBottom" 
				:bottom-all-loaded="allLoaded"
				@bottom-status-change="test" 
				ref="loadmore">
        <ul>
          <li v-for="(item,index) in suggestionList" :key="index" @click="addSearchHistory(item,item.type)">
            <div class="media-icon">
              <i class="iconfont icon-yinle1"></i>
            </div>
            <div class="media-text">
              <h3 v-html="getContent(item,'h3')"></h3>
              <p v-html="getContent(item,'p')"></p>
            </div>
          </li>
          <li v-show="allLoaded&&suggestionList.length" class="allLoaded">已加载全部</li>
        </ul>
      </mt-loadmore>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    suggestionList: {
      type: Array,
      required: true
    }
  },
  methods: {
    addSearchHistory(item,type){
      let idx = this.searchHistory.findIndex((history)=>{
        return history === this.value
      })
      if (idx === -1) {
        this.addItem({
          key:'searchHistory',
          song:this.value
        })
      }
      switch (type) {
        case 2:{
          this.$router.push('/singerlist/singer/'+item.singermid)
          break;
        }
        case 3:{
          this.$router.push('/album/'+item.albummid)
          break;
        }
        default :{
          if (!this.sequencelist.length) {
            let list=[]
            list.push(item)
            this.selectPlay({
              list,
              index:0
            })
            this.setFullScreenState(true)
          } else {
            let index1 = this.playlist.findIndex((song)=>{
              return song.id === this.currentSong.id
            })
            this.addItemPosition({
              key:'playlist',
              song:item,
              index:index1+1
            })
            this.setCurrentIndex(index1+1)
            this.setPlayingState(true)
            this.setFullScreenState(true)
          }
          break;
        }
      }
    },
    getContent(item,tag){
      //此函数是获取不同类型搜索建议的内容
      switch (item.type) {
        case 2 : 
          if (tag === 'h3') {
            return item.singername
          }else {
            return `单曲：${item.songnum} 专辑：${item.albumnum}`
          }
        case 3 : 
          if (tag === 'h3') {
            return item.albumname
          }else {
            return item.singername
          }
        default : 
          if (tag === 'h3') {
            return item.songname
          }else {
            return item.singername
          }
      }
    },
  }
}
</script>