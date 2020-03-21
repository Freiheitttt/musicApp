<template>
  <div class="singer-catergory">
    <div v-for="(value, key) of singerCategory" :key="key" class="px-3">
      <ul class="d-flex text-gray2 text-xs flex-wrap ">
        <li 
          v-for="(category, index) of value" :key="category.id" 
          class="p-1 mt-2 mx-1"
          :class="{'singer-active': activeIndex[key] === index}"
          @click="activeIndex[key] = index"
        >
          {{category.name}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    singerCategory: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      activeIndex: {
        sex: 0,
        genre: 0,
        area: 0,
      }
    }
  }
}
</script>