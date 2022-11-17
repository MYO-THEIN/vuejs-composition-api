import { ref } from 'vue'

let getPost = (id)=>{
    let post = ref(null);
    let error = ref("");

    let loadData = async()=>{
        try {
            let response = await fetch("http://localhost:3000/posts/" + id);
            if (response.status === 404)
                throw new Error("404 - URI Not Found");
            let data = await response.json();
            post.value = data;
        }
        catch(err) {
            error.value = err.message;
        }
    };

    return {
        post,
        error,
        loadData
    };
};

export default getPost;
