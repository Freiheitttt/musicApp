<template>
  <div class="singer-list">
    <ul>
      <li v-for="item of singerList" :key="item.id" 
          class="d-flex mx-4 mt-3 ai-center">
        <img :src="item.img" class="imgStyle">
        <span class="name pl-4 text-gray2">{{item.name}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    singerList: {
      type: Array,
      required: true
    }
  },
  
}
</script>

<style scoped>
.imgStyle {
  border-radius: 50%;
  width: 50px;
}
</style>