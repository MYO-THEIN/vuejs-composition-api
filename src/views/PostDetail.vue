<template>
    <div v-if="post" class="post">
        <h2>{{post.title}}</h2>
        <p>{{post.body}}</p>
        <div v-for="tag in post.tags" :key="tag" class="pill">
            <router-link :to="{name: 'tag', params: {tag} }">
                {{tag}}
            </router-link>
        </div>
        <button class="delete" @click="deletePost">Delete</button>
    </div>
    <div v-else>
        <Spinner></Spinner>
    </div>
</template>

<script>
import Spinner from '../components/Spinner'
import getPost from '../composables/getPost'
import { useRoute, useRouter } from 'vue-router'
import { firestoreDB } from '../firebase/config'
import { doc, deleteDoc } from 'firebase/firestore'

export default {
    components: { Spinner },
    props: [
        'id'
    ],
    setup() {
        let route = useRoute();
        let router = useRouter();
        let { post, error, loadData } = getPost(route.params.id);
        loadData();

        let deletePost = async()=>{
            await deleteDoc(doc(firestoreDB, "posts", route.params.id));
            router.push({name: 'home'});
        };

        return {
            post,
            error,
            deletePost
        };
    }
}
</script>

<style>
.post {
    max-width: 1200px;
    margin: 0 auto;
    padding-bottom: 30px;
    border-bottom: 1px dashed #e7e7e7;
}
.post h2 {
    display: inline-block;
    position: relative;
    font-size: 26px;
    color: white;
    margin-bottom: 10px;
    max-width: 400px;
}
.post h2::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: #ff8800;
    position: absolute;
    z-index: -1;
    padding-right: 40px;
    left: -30px;
    transform: rotateZ(-1deg);
}
.pill {
    display: inline-block;
    margin: 10px 10px 0 0;
    color: #444;
    background: #ddd;
    padding: 8px;
    border-radius: 20px;
    font-size: 14px;
}
button.delete {
    margin: 30px auto;
}
</style>
