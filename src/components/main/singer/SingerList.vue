<template>
	<div class="singerlist">
    <div class="loading-container" :v-if="!isShow">
      <loading></loading>
    </div>
    <mt-index-list>
      <mt-index-section v-for="(item,index) in singerList" :key="index" :index="item.title">
        <mt-cell v-for="(singer,index) in item.items" :key="index" class="singer-item">
          <div class="media" @click="goTo(singer.singermid,singer.singername)">
            <img v-lazy="singer.img">
            <span>{{singer.singername}}</span>
          </div>
        </mt-cell>
      </mt-index-section>
    </mt-index-list>
  </div>
</template>
<script>
	import Loading from '@/components/common/Loading'
	export default {
		components:{
			Loading
		},
    props: {
      singerList: {
        type: Array,
        required: true
      }
    },
		computed: {
      isShow: {
        get() {
          return this.singerList.length
        }
      }
    },
    methods: {
      goTo(id,name){
        this.$emit('select', id, name)
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
	.singer-item{
		position: relative;
		height: 72px;
	}
	.media{
		position: absolute;
		bottom: 0;
		left: 0;
		width: 80%;
		height: 72px;
		line-height: 72px;
		padding-left: 20px;
	}
	.media img{
		display: inline-block;
		width: 50px;
		height: 50px;
		margin-right: 15px;
		border-radius: 50%;
	}
	.media span{
		font-size: 14px;
	}
</style>