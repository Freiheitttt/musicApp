<template>
  <div class="detail-header">
    <div class="d-flex title text-primary text-lg text-weight-7 text-center">
      <img src="@/assets/back.svg" class="mt-2 ml-3">
      <span class="ml-5 mt-2 lh">{{title}}</span>
    </div>
    <img :src="src" class="imgStyle w100">
    
  </div>
</template> 
<script>
export default {
  props: {
    title: {
      type: String,
      default: '歌曲详情'
    },
    src: {
      type: String,
      default: ''
    }
  },
}
</script>

<style scoped>
.imgStyle {
  overflow: hidden;
  height: 14rem;
}
</style>