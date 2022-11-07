<template>
  <PostList :posts="posts"></PostList>
</template>

<script>
import PostList from '../components/PostList'
import { ref } from 'vue'
export default {
  components: { PostList },
  setup() {
    let posts = ref([]);

    return {
      posts
    }
  }
}
</script>

<style scoped>

</style>
