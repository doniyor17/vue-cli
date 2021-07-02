<template>
    <div class="content">
        <loading :spinner="spinner" />
        <!-- Vue props in using -->
        <ul class="posts-list">
            <li class="post-item" v-for="post in posts" :key="post.id">
                <h2>{{ post.title | shortTitle }}</h2>
                <!-- Vue filters in using -->
                <p>{{ post.body | shortBody }}</p>
                <!-- Vue filters in using -->
            </li>
        </ul>
    </div>
</template>

<script>
import Loading from './Loading.vue';
export default {
    components: { Loading },
    name: 'Content',
    data: () => ({
        posts: [],
        spinner: true,
    }),
    async created() {
        const data = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await data.json();
        this.posts = posts;
        if (this.posts && this.posts !== []) {
            this.spinner = false;
        }
    },
};
</script>

<style scoped>
.content {
    margin-top: 60px;
}
.posts-list {
    width: 600px;
    margin: 10px auto;
    list-style-type: none;
}
.post-item {
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #000;
    background-color: rgb(243, 140, 140);
}
</style>
