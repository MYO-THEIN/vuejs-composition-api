<template>
    <div class="tag">
        <div v-if="error">
            {{error}}
        </div>
        <div v-if="posts.length > 0" class="layout">
            <div>
                <PostList :posts="filteredPosts"></PostList>
            </div>
            <div>
                <TagCloud :posts="posts"></TagCloud>
            </div>
        </div>
        <div v-else>
            <Spinner></Spinner>
        </div>
    </div>
</template>

<script>
import TagCloud from '../components/TagCloud'
import Spinner from '../components/Spinner'
import PostList from '../components/PostList'
import { computed } from '@vue/runtime-core';
import getPosts from '../composables/getPosts'

export default {
    components: {
        TagCloud,
        Spinner, 
        PostList 
    },
    props: [
        'tag'
    ],
    setup(props){
        let { posts, error, loadData } = getPosts();
        loadData();

        let filteredPosts = computed(()=>{
            return posts.value.filter((post)=>{
                return post.tags.includes(props.tag);
            });
        });

        return {
            posts,
            error,
            filteredPosts
        };
    }
}
</script>

<style>
.tag {
    max-width: 1200px;
    margin: 0 auto;
}
</style>
