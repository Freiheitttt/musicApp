<template>
	<transition name="list-fade">
		<div class="playlist" v-show="showFlag" @click.stop="hide">
			<div class="list-wrapper" @click.stop>
				<div class="list-top text-md">
					<i class="iconfont icon-liebiao1 mr-3 mt-1"></i>
					<span>播放列表</span><span class="ml-2">({{playlist.length}})</span>
				</div>
				<div class="list-main" ref="listMain">
					<ul>
						<li v-for="(item,index) in playlist" :key="index" class="song" @click="selectSong(index)">
							<div class="songname" :class="active(item)">{{item.songname}}</div>
							<div class="control">
								<i class="iconfont" :class="getLikeIcon(item)" @click.stop="toggleFavorite(item)" ref="favorite"></i>
								<i class="iconfont icon-lvzhou_shanchu_lajitong ml-3" @click.stop="_removeItem(item,index)"></i>
							</div>
						</li>
					</ul>
				</div>
				<div class="list-bottom" @click="hide">关闭</div>
			</div>
		</div>
	</transition>
</template>
<script>
	import { mapState,mapGetters,mapMutations } from 'vuex'
	import { Toast,MessageBox } from 'mint-ui'
	import {shuffle} from '@/assets/js/util'

	export default {
		data(){
			return {
				showFlag:false,
			}
		},
		computed:{
			...mapState([
				'playlist',
				'sequencelist',
				'mylikeSongs',
				'currentIndex'
			]),
			...mapGetters([
				'currentSong'
			]),
		},
		methods:{
			...mapMutations([
				'clearList',
				'setPlayingState',
				'setModeState',
				'setPlaylist',
				'setCurrentIndex',
				'removeItem',
				'addItem'
			]),
			show() {
				this.showFlag = true
			},
			hide() {
				this.showFlag = false 
			},
			resetCurrentIndex(list,song) {
				let index = list.findIndex((item)=>{
					return item.id===song.id
				})
				this.setCurrentIndex(index)
			},
			getLikeIcon(song) {
				let idx=this.mylikeSongs.findIndex((likeSong)=>{
					return likeSong.id===song.id
				})
				if (idx!=-1) {
					return 'icon-xihuan1 red'
				}else {
					return 'icon-xihuan'
				}
			},
			toggleFavorite(song) {
				let idx=this.mylikeSongs.findIndex((likeSong)=>{
					return likeSong.id===song.id
				})
				if (idx!=-1) {
					this.removeItem({
						key:'mylikeSongs',
						index:idx
					})
				} else {
					this.addItem({
						key:'mylikeSongs',
						song:song
					})
				}
			},
			_removeItem(item,index) {
				this.setPlayingState(true)
				let nowSong = this.currentSong 
				this.removeItem({
					key:'playlist',
					index
				})
				if (item.id != nowSong.id) {
					this.resetCurrentIndex(this.playlist,nowSong)
				}
			},
			active(item) {
				if (item.id === this.currentSong.id) {
					return 'active'
				}
			},
			selectSong(index) {
				this.setCurrentIndex(index)
				this.setPlayingState(true)
			},
		}
	}
</script>
<style scoped>
	.list-fade-enter-active, .list-fade-leave-active{
		transition: opacity 0.3s;
	}
	.list-fade-enter-active .list-wrapper, .list-fade-leave-active .list-wrapper{
		transition: all 0.3s
	}
	.list-fade-enter, .list-fade-leave-to{
		opacity: 0;
	}
	.list-fade-enter .list-wrapper, .list-fade-leave-to .list-wrapper{
		transform: translate3d(0, 100%, 0)
	}

	.playlist{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 200;
		background-color: rgba(0,0,0,.3);
	}
	.list-wrapper{
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 430px;
		background-color: rgb(118, 185, 216);
		color: #fff;
	}
	.list-top{
		display: flex;
		justify-content: flex-start;
		color: #fff;
		padding: 20px 30px 10px 20px;
	}
	.list-main{
		height: 330px;
		overflow: scroll;
		padding: 0 30px 0 20px;
	}
	.list-main ul{
		padding-bottom: 285px;
	}
	.song{
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 45px;
		font-size: 1.2rem;
		color: #fff;
	}
	.song i{
		position: relative;
		top: -3px;
	}
	.song .songname{
		width: 80%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.list-bottom{
		height: 50px;
		line-height: 50px;
		text-align: center;
		background-color: rgb(50, 37, 105);
		font-size: 16px;
	}
	.active{
		color: #1a73e1;
	}
</style>