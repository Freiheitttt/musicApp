<template>
  <div class="playing">
  </div>
</template>
<script>
//import Aplayer from 'vue-aplayer'
export default {
  components: {
    //Aplayer,
  },
  props:{
    song: {
      type: String,
      required: true
    },

  }
}
</script>