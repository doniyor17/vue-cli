<template>
    <div class="content">
        <loading v-if="spinner" />
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
                v-for="blog in filteredBlogs"
                :key="blog.id"
            >
                <router-link :to="'blog/' + blog.id">
                    <h2 v-highlight>{{ blog.title | uppercase }}</h2>
                </router-link>
                <p>{{ blog.body | shortBody }}</p>
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
        blogs: [],
        spinner: true,
        search: '',
        id: null,
    }),
    async created() {
        try {
            const posts = await this.$http.get(
                'https://vue-blog-app-3ffb5-default-rtdb.asia-southeast1.firebasedatabase.app/blogs.json'
            );
            const datas = await posts.json();
            let blogs = [];
            for (let key in datas) {
                datas[key].id = key;
                blogs.push(datas[key]);
            }
            if (blogs && this.blogs && this.blogs !== []) {
                this.spinner = false;
                this.blogs = blogs;
            }
        } catch (e) {
            console.log(e);
        }
    },
    computed: {
        filteredBlogs: function() {
            return this.blogs.filter((blog) => {
                return blog.title
                    .toLowerCase()
                    .match(this.search.toLowerCase());
            });
        },
    },
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
                el.style.color = '#333';
                el.style.background = '#ddd';
            },
        },
        rainbow: {
            bind(el, binding, vnode) {
                el.style.background = '#fddffd';
            },
        },
    },
};
</script>

<style scoped>
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
