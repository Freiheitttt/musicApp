<template>
  <div class="wrapper" ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
export default {
  props: {
    top: {
      type: Number,
      default: 0,
    },
    list: {
      type: Array,
      required: true
    }
  },
  methods: {
    initScroll() {
      this.$refs.wrapper.style.top = this.top + "px"
      this.scroll = new BScroll(this.$refs.wrapper, { mouseWheel: true, click: true, tap: true });
    },
    refresh() {
      this.scroll && this.scroll.refresh();
    }
  },
  mounted() {
    this.initScroll();
  },
  watch: {
    list() {
      this.$nextTick(() =>{
        this.refresh();//重新计算子组件的高度
      })
    }
  }
}
</script>
<style scoped>
.wrapper {
  position: absolute;
  overflow: hidden;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>