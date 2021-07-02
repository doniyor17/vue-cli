<template>
    <div class="content">
        <loading :spinner="spinner" />
        <!-- Vue props in using -->
        <div class="search-box">
            <input
                v-model="search"
                class="search"
                type="text"
                placeholder="Search blog..."
            />
        </div>
        <ul class="posts-list">
            <li
                v-rainbow
                class="post-item"
                v-for="post in filteredBlogs"
                :key="post.id"
            >
                <h2 v-highlight>{{ post.title | uppercase }}</h2>
                <!-- Vue filters in using -->
                <p>{{ post.body | shortBody }}</p>
                <!-- Vue filters in using -->
            </li>
        </ul>
    </div>
</template>

<script>
import filteredBlogs from '../mixins/searchBlogs';
import Loading from './Loading.vue';
export default {
    components: { Loading },
    name: 'Content',
    data: () => ({
        posts: [],
        search: '',
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
    computed: {},
    filters: {
        uppercase: (val) => {
            return val.slice(0, 50).toUpperCase() + '...';
        },
        shortBody: (val) => {
            return val.slice(0, 150) + '...';
        },
    },
    directives: {
        highlight: {
            bind(el, binding, vnode) {
                el.style.color =
                    '#' +
                    Math.random()
                        .toString(16)
                        .slice(2, 8);
                el.style.background =
                    '#' +
                    Math.random()
                        .toString(16)
                        .slice(2, 8);
            },
        },
        rainbow: {
            bind(el, binding, vnode) {
                el.style.background =
                    '#' +
                    Math.random()
                        .toString(16)
                        .slice(2, 8);
            },
        },
    },
    mixins: [filteredBlogs],
};
</script>

<style scoped>
.content {
    margin-top: 60px;
}
.search-box {
    width: 600px;
    margin: 0px auto 10px !important;
}
.search {
    width: 600px;
    padding: 10px 15px;
    font-size: 20px;
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
