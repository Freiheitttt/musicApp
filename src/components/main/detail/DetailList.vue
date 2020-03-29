<template>
  <div class="detail-list">
    <ul class="ml-3">
      <li v-for="item of songList" :key="item.id" 
          class="lh mx-4 mt-3 ls" @click='fetchMusic'>
        <span class="text-lg text-rap">{{item.name}}</span>
        <ul >
          <li class="mt-3" v-for="(info,index) of item.al" :key="index">
            <span>{{info.name}}</span>
          </li>
        </ul>
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
  methods: {
    fetchMusic: function() {
      this.$axios.get('/song/url?id='+singerId)
        .then(res => {
          console.log(res.data.hotSongs);
          this.name =  res.data.artist.name;
          this.img =  res.data.artist.img1v1Url;
          this.songList = res.data.hotSongs;
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>