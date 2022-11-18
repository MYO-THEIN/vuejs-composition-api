import { ref } from 'vue'
import { firestoreDB } from '../firebase/config'
import { collection, getDocs } from 'firebase/firestore'

let getPosts = ()=>{
    let posts = ref([]);
    let error = ref("");

    let loadData = async()=>{
        try {
            let response = await getDocs(collection(firestoreDB, "posts"));
            posts.value = response.docs.map((doc)=>{
                return {
                    id: doc.id,
                    ...doc.data()
                };
            });

            // local storage using JSON-SERVER
            // let response = await fetch("http://localhost:3000/posts");
            // if (response.status === 404)
            //     throw new Error("404 - URI Not Found");
            // let data = await response.json();
            // posts.value = data;
        }
        catch(err) {
            error.value = err.message;    
        }
    };

    return {
        posts,
        error,
        loadData
    };
}

export default getPosts;
