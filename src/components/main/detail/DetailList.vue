<template>
  <div class="detail-list">
    <ul>
      <li v-for="(item, index) of songList" :key="index" 
          class="songs">
        <span class="text-md ml-3 text-primary">{{index+1}}</span>
        <span class="text-md ml-2 text-primary">{{item.songname}}</span>
        <span class="ml-4 text-gray2 show" v-if="item.singername">{{item.singername+'·'+item.albumname}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    songList: {
      type: Array,
      required: true
    },
  },
  data() {
    return{
      
    }
  },
  methods: {
  }
}
</script>
<style scoped>
.songs{
  line-height: 3rem;
  border-bottom: 1px solid rgba(65, 112, 240, 0.4);
  width: 100%;
  text-overflow: ellipsis;
	overflow: hidden;
}
.show{
  display: block;
  margin-top: 0;
  line-height: 1rem;
  margin-bottom: 1rem;
}
</style>