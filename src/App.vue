<template>
  <div id="app" class="app bg-gray1">
    <router-view></router-view>
    <play-music/>
  </div>
</template>
<script>
import PlayMusic from '@/components/main/play/PlayMusic'
export default {
  components: {
    PlayMusic,
  },
}
</script>
<style scoped>
.app {
  width: 100vw;
  height: 100vh;
}
</style>
