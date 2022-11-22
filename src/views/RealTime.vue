<template>
    <div v-for="post in posts" :key="post.id">
        <h2>{{post.title}}</h2>
        <p>{{post.body}}</p>
        <hr>
    </div>
</template>

<script>
import { firestoreDB } from '../firebase/config'
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore'
import { ref } from '@vue/reactivity'

export default {
    setup(){
        let posts = ref([]);

        let q = query(collection(firestoreDB, "posts"), orderBy("created_at", "desc"));
        onSnapshot(q, (snapShot)=>{
            posts.value = snapShot.docs.map((doc)=>{
                return {
                    id: doc.id,
                    ...doc.data()
                }
            });
        })

        return {
            posts
        }
    }
}
</script>

<style>

</style>
