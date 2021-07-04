<template>
    <div class="content row">
        <loading v-if="spinner" />
        <div class="search-box col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <input
                v-model="search"
                class="search form-control mb-5 py-4"
                type="text"
                placeholder="Search blog..."
            />
        </div>
        <ul class="posts-list m-0 p-0">
            <li
                v-rainbow
                class="post-item p-3 mb-3"
                v-for="blog in filteredBlogs"
                :key="blog.id"
            >
                <router-link class="text-center" :to="'blog/' + blog.id">
                    <h2 v-highlight class="py-2">
                        {{ blog.title | uppercase }}
                    </h2>
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
                el.style.background = 'rgb(200, 159, 192)';
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
.content {
    margin: 0;
    padding: 0;
}
.posts-list {
    width: 100% !important;
    margin: 30px auto 0;
}
.post-item {
    border: 1px solid #444;
    box-shadow: 0 0 5px #000;
    list-style-type: none;
    background-color: #fff !important;
}
</style>
