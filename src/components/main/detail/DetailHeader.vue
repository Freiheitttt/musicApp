<template>
  <div class="detail-header" :style="imgStyle">
		<div class="header">
			<span class="iconfont icon-zuojiantou" @click="goback"></span>
			<span class="title text-primary">{{title}}</span>
		</div>
		
  </div>
</template> 
<script>
export default {
  props: {
    title: {
      type: String,
      default: '歌曲列表'
		},
		src: {
			type: String,
      required: true
		},
  },
  computed: {
		imgStyle(){
      return `background-image: url('${this.src}')`
    }
  },
  methods: {
    goback(){
			this.$router.go(-1)
		},
		
  }
}
</script>

<style scoped>
.detail-header{
		top: 0;
		left: 0;
		height: 18rem;
		background-size: cover;
		background-repeat: no-repeat;
		position: relative;
		width: 100%;
	}
	.detail-header::before{
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 44px;
  }
  .header .iconfont{
		left: 15px;
		position: absolute;
		font-size: 25px;
		line-height: 44px;
		color: #1a73e1;
	}
	.header .title{
		height: 44px;
		font-size: 18px;
		font-weight: bold;
		line-height: 44px;
		text-align: center;
		margin-left: 5rem;
	}
</style>