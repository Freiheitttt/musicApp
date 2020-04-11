<template>
  <div class="input-search">
    <div class="search d-flex px-1 pt-2 " >
			<div class="input-warp">
				<i class="iconfont icon-sousuo"></i>
				<input type="text" v-model="value" placeholder="搜索歌曲、歌单、专辑" @focus="toggleShow(true)">
				<i class="iconfont icon-chahao" v-show="value" @click="deleteValue"></i>
			</div>
			<div class="cancel-btn text-xs" v-show="isShow" @click="toggleShow(false)">取消</div>
		</div>
		<div class="hot-keys ml-4" v-show="!isShow || !value">
			<h3>热门搜索</h3>
			<ul>
				<li v-for="(item,index) in hotList" :key="index" @click="selectHotKey(item.k)">
					<span class="text-gray3">{{item.k}}</span>
				</li>
			</ul>
		</div>
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
  props: {
    hotList: {
      type: Array,
      required: true,
    }
	},
	watch:{
    'value':function(){
      this.$emit('getInput',this.value)
    }
  },
  methods: {
    selectHotKey(value){
      this.value = value
      this.isShow = true
		},
    deleteValue(){
			this.value = ''
    },
    toggleShow(flag){
			this.value = ''
			this.isShow = flag;
		},
  },
}
</script>
<style scoped>
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
		font-size: 1rem;
		color: rgba(0,0,0,.3);
  }
  .cancel-btn{
		height: 36px;
    line-height: 36px;
    font-size: 14px;
    padding: 0 5px 0 15px;
    color: #555;
  }
	.hot-keys li{
		display: inline-block;
		padding: 5px 10px;
		margin: 0 20px 10px 0;
    border-radius: 6px;
		border: 1px solid rgba(36, 29, 29, 0.4);
	}
</style>