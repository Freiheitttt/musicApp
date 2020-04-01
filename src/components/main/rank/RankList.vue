<template>
  <div class="rank-list">
    <ul>
      <div class="loading-container" v-if="!isShow">
				<loading></loading>
		  </div>
      <li v-for="(item,index) of rankList" :key="index" 
           @click="goTo(item.id,item.picUrl)" class="pos-r d-flex ai-center w100">
        <div class="media-img">
          <img v-lazy="item.picUrl">
        </div>
        <div class="media-text d-flex jc-around">
          <div v-for="(song,index) of item.songList" :key="index">
            <span>{{index+1}}、</span>
            <span class="songname">{{song.songname}}</span>
            <span>-{{song.singername}}</span>
          </div>
        </div>
        <div class="arrow"></div>
      </li> 
    </ul>
  </div>
</template>
<script>
import Loading from '@/components/common/Loading'

export default {
  components: {
    Loading
  },
  props: {
    rankList: {
      type: Array,
      required: true
    },
  },
  computed: {
    isShow: {
      get() {
        return this.rankList.length
      }
    }
  },
  methods: {
    goTo(id,img) {
      this.$emit('select', id,img)
    },
  }
}
</script>
<style scoped>
.loading-container{
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
	}
	.rank-list{
		width: 100%;
		padding: 0 20px;
		background-color: #f4f4f4;
		overflow: hidden;
		margin-bottom: 80px;
	}
	.rank-list li{
		height: 100px;
		margin-top: 20px;
	}
	.rank-list img{
		width: 100px;
		height: 100px;
	}
	.rank-list .media-text{
		flex-direction: column;
		height: 80px;
    width: 60%;
		margin: 0 10px;
	}
	.rank-list .media-text .songname{
		color: #000;
	}
	.rank-list .media-text {
		font-size: 14px;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
		color: #888;
	}
	.arrow{
		position: absolute;
		right: 12px;
		top: 47.5px;
		width: 6px;
		height: 6px;
		box-sizing: content-box;
		border-right: 1px solid #1a73e1;
		border-bottom: 1px solid #1a73e1;
		transform: rotate(-45deg);
	}
</style>