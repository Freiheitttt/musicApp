<template>
	<div class="progress-bar">
		<div class="bar-inner" ref="barinner" @click="progressClick">
			<div class="progress" ref="progress"></div>
			<div class="buffer" ref="buffer"></div>
			<div class="progress-ball" ref="progressball"
				@touchstart.prevent="progressTouchStart"
				@touchmove.prevent="progressTouchMove"
				@touchend="progressTouchEnd"
			></div>
		</div>
	</div>
</template>
<script>
	export default {
		props:{
			percentage:{
				type:Number,
				default:0
			},
			buffer:{
				type:Number,
				default:0
			}
		},
		created(){
			//用来保存触摸时的状态
			this.touch = {}
		},
		watch:{
			percentage(newPercentage){
				if (newPercentage >= 0 && !this.touch.init) {
					const barWidth = this.$refs.barinner.clientWidth-16
					const offsetWidth = newPercentage * barWidth
					this.move(offsetWidth)
				}
			},
			buffer(newPercentage) {
				console.log(newPercentage)
				const barWidth = this.$refs.barinner.clientWidth-16
				const offsetWidth = newPercentage * barWidth
				this.$refs.buffer.style.width=offsetWidth+'px'
			}
		},
		methods:{
			move(offsetWidth) {
				this.$refs.progress.style.width=offsetWidth+'px'
				this.$refs.progressball.style.left=offsetWidth+'px'
			},
			progressTouchStart(event) {
				this.touch.init=true;
				this.touch.touchStartX=event.touches[0].pageX
				this.touch.progressStartX=this.$refs.progress.clientWidth
			},
			progressTouchMove(event) {
				if (!this.touch.init) {
					return
				}
				let touchMoveX = event.touches[0].pageX - this.touch.touchStartX
				let offsetWidth = Math.min(this.$refs.barinner.clientWidth-16,Math.max(0,this.touch.progressStartX+touchMoveX))
				this.move(offsetWidth)
			},
			progressTouchEnd() {
				this.touch.init = false
				this.triggerPercent()
			},
			triggerPercent() {
				const barWidth = this.$refs.barinner.clientWidth-16
				const percentage = this.$refs.progress.clientWidth / barWidth
				this.$emit('percentChange', percentage)
			},
			progressClick(event){
				const barWidth = this.$refs.barinner.clientWidth-16
				const offsetWidth = event.offsetX
				const percentage = offsetWidth / barWidth
				this.$emit('percentChange', percentage)
			}

		}
	}
</script>
<style scoped>
	.progress-bar{
		height: 30px;
	}
	.bar-inner{
		position: relative;
		height: 4px;
		top: 13px;
    	background: rgba(255,255,255,.3);
	}
	.bar-inner .progress{
		position: absolute;
		height: 100%;
		background: #1a73e1;
	}
	.bar-inner .buffer{
		position: absolute;
		height: 100%;
		background: rgba(255,255,255,.3);
	}
	.bar-inner .progress-ball{
		position: absolute;
		left: 0;
		top: -6px;
		height: 16px;
		width: 16px;
		border-radius: 50%;
		background: #1a73e1;
	}

</style>