<template>
  <div class="song-sheet-list">
    <ul class="px-4 pt-3">
      <li v-for="item of hotSong" :key="item.id" class="d-flex pb-3"            @click="sheetId(item.id)"> 
        <img :src="item.img" width="100">
        <div class="right d-flex flex-wrap pl-3 ai-center">
          <span class="title w100 text-md">{{item.title}}</span>
          <!-- <span class="info text-gray2">{{item.info}}</span> -->
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
    sheetId: function(id) {
      this.$emit('select', id);
    },
  }

}
</script>