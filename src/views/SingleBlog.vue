<template>
    <div>
        <head-app :title="title"></head-app>
        <article class="single-blog row">
            <Loading v-if="spinner" />
            <div class="container">
                <div class="back text-center" v-if="!del">
                    <router-link to="/">
                        <i class="fas fa-arrow-left"></i> Go back</router-link
                    >
                </div>
                <div v-show="del" class="blog-box">
                    <h2 class="blog-title text-center">
                        {{ blog.title }}
                    </h2>
                    <p class="blog-body">{{ blog.body }}</p>
                    <div class="controllers">
                        <a class="delete" @click.prevent="deleteBlog" href="#">
                            Delete
                            <i class="fas fa-trash"></i>
                        </a>
                        <a class="edit" @click.prevent="editBlog" href="#">
                            Edit
                            <i class="fas fa-pen"></i>
                        </a>
                    </div>
                </div>
            </div>
        </article>
        <foot-app :title="title"></foot-app>
    </div>
</template>

<script>
import Header from '../components/Header.vue';
import Loading from '../components/Loading.vue';
import Footer from '../components/Footer.vue';
export default {
    data() {
        return {
            id: this.$route.params.id,
            blog: {},
            del: true,
            spinner: false,
            title: 'Vue Blog',
        };
    },
    components: {
        Loading,
        'head-app': Header,
        'foot-app': Footer,
    },
    async created() {
        this.spinner = true;
        const data = await this.$http.get(
            'https://vue-blog-app-3ffb5-default-rtdb.asia-southeast1.firebasedatabase.app/blogs/' +
                this.id +
                '.json'
        );
        const blog = await data.json();
        if (blog) {
            this.blog = blog;
            this.spinner = false;
        }
    },
    methods: {
        async deleteBlog() {
            this.spinner = true;
            const data = await this.$http.delete(
                'https://vue-blog-app-3ffb5-default-rtdb.asia-southeast1.firebasedatabase.app/blogs/' +
                    this.id +
                    '.json'
            );
            const blog = await data.json();
            if (blog === null) {
                this.blog = {};
                this.spinner = false;
                this.del = false;
            }
        },
        async editBlog() {
            let name = prompt('Blog title!');
            let text = prompt('Blog body!');
            this.spinner = true;

            let title = name ? name : this.blog.title;
            let body = text ? text : this.blog.body;

            const data = await this.$http.put(
                'https://vue-blog-app-3ffb5-default-rtdb.asia-southeast1.firebasedatabase.app/blogs/' +
                    this.id +
                    '.json',
                {
                    id: this.id,
                    title: title,
                    body: body,
                }
            );
            const blog = await data.json();
            blog.title = title;
            blog.body = body;
            this.blog = blog;
            this.spinner = false;
        },
    },
};
</script>
<style scoped>
.blog-box {
    width: 100%;
    margin: 10px auto;
    padding: 10px;
    border: 1px solid #000;
}
.controlles {
    display: flex;
    align-items: center;
}
.delete {
    margin-right: 60px;
}
</style>
