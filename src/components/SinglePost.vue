<template>
    <h4>{{post.title}}</h4>
    <p>{{cuttedBody}}</p>
</template>

<script>
import { computed } from '@vue/runtime-core'
export default {
    props: [
        'post'
    ],
    setup(props) {
        let cuttedBody = computed(()=>{
            return props.post.body.substring(0, 30) + ' ...';
        });

        return {
            cuttedBody
        }
    }
}
</script>

<style>
h4 {
    color: green;
}
</style>
