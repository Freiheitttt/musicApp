<template>
  <div class="input-search">
    <div class="input-warp">
      <i class="iconfont icon-sousuo"></i>
      <input type="text" v-model="value" placeholder="搜索歌曲、歌单、专辑" @focus="toggleShow(true)">
      <i class="iconfont icon-chahao" v-show="value" @click="deleteValue"></i>
    </div>
    <div class="cancel-btn" v-show="isShow" @click="toggleShow(false)">
      取消</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: '',
      isShow: false,
    }
  },
  methods: {
    deleteValue(){
      this.value = ''
    },
    toggleShow(flag){
      this.isShow = flag
    },
  },
  
}
</script>
<style scoped>
	.input-search{
		display: flex;
		background: #f4f4f4;
		padding: 10px;
	}
	.input-warp{
		display: flex;
		justify-content: space-between;
		flex-grow: 1;
		height: 20px;
	  padding: 8px 10px;
		background-color: #fff;
		box-sizing: content-box;
		color: rgba(0,0,0,.3);
	}
	.input-warp i{
		font-size: 18px;
	}
	input::-webkit-input-placeholder{
		color: rgba(0,0,0,.3);
	}
	.input-warp input{
		margin: 0 5px;
		flex-grow: 1;
    border: none;
		color: rgba(0,0,0,.3);
  }
  .cancel-btn{
		height: 36px;
    line-height: 36px;
    font-size: 14px;
    padding: 0 5px 0 15px;
    color: #555;
	}
</style>