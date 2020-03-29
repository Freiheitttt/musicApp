<template>
  <div class="main">
    <main-header 
      title="Music World"
      @nav-click="toPath"
    />
    <router-view/>
  </div>
</template>

<script>
import MainHeader from '@/components/main/MainHeader'
export default {
  components: {
    MainHeader
  },
  methods: {
    toPath(path){
      this.$router.push(path);
    }
  }
}
</script>