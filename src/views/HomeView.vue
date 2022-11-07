<template>
  <div v-if="error">
    {{error}}
  </div>
  <div v-if="posts.length > 0">
    <PostList :posts="posts"></PostList>
  </div>
  <div v-else>
    Loading data from API ...
  </div>
</template>

<script>
import PostList from '../components/PostList'
import getPosts from '../composables/getPosts'
export default {
  components: { PostList },
  setup() {
    let { posts, error, loadData } = getPosts();

    loadData();

    return {
      posts,
      error
    }
  }
}
</script>

<style scoped>

</style>
