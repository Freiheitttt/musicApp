<template>
  <div class="song-sheet-list">
    <ul class="px-4 pt-3">
      <li v-for="(item, index) of hotSong" :key="index" class="d-flex pb-3"            @click="sheetId(item.id,item.img)"> 
        <img :src="item.img" width="100">
        <div class="right d-flex flex-wrap pl-3 text-primary ai-center text-rap">
          <span class="title w100 text-md">{{item.title}}</span><br>
          <span class="info text-xs text-gray2">{{item.write}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    hotSong: {
      type: Array,
      required: true
    }
  },
  methods: {
    sheetId: function(id,img) {
      this.$emit('select',id,img);
    },
  }

}
</script>
<style scoped>
.right span {
  text-overflow: ellipsis;
	overflow: hidden;
  white-space: nowrap;
  margin-top: 1rem;
  display: inline-block;
}
</style>