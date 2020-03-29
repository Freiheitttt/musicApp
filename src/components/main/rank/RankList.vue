<template>
  <div class="rank-list">
    <ul>
      <li v-for="item of rankList" :key="item.id" 
          class="d-flex mx-4 mt-3 ai-center">
          <img :src="item.coverImgUrl" class="w40 px-1">
          <div class="d-flex flex-wrap">
            <ul class="text-md ml-4 text-gray3">
              <li class="ls mt-3 " v-for="(info,index) of item.tracks" :key="index">
                <span>{{info.first}}</span>
                <span>——{{info.second}}</span>
              </li>
            </ul>
          </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    rankList: {
      type: Array,
      required: true
    },
  },
}
</script>