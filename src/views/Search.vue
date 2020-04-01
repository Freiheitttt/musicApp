<template>
  <div class="search">
    <input-search/>
    <search-list />
  </div>
</template>
<script>
import InputSearch from '@/components/main/search/InputSearch'
import SearchList from '@/components/main/search/SearchList'
import { getHotKey,getSuggestion } from '@/api/getHotKey'
import { createSong } from '@/assets/js/song'
export default {
  components: {
    InputSearch,
    SearchList,
  },
  data() {
    return {
      suggestionList: [],
    }
  },
  methods: {
    
  },
  created() {
    
  }
}
</script>