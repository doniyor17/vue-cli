<template>
    <article class="single-blog">
        <head-app :title="title"></head-app>
        <Loading v-if="spinner" />
        <div class="container">
            <div class="back" v-if="!del">
                <router-link to="/"> Go back</router-link>
            </div>
            <div v-show="del" class="blog-box">
                <h2 class="blog-title">{{ blog.title }}</h2>
                <p class="blog-body">{{ blog.body }}</p>
                <div class="controllers">
                    <a class="delete" @click.prevent="deleteBlog" href="#"
                        >Delete</a
                    >
                    <a class="edit" @click.prevent="editBlog" href="#">Edit</a>
                </div>
            </div>
        </div>
        <foot-app :title="title"></foot-app>
    </article>
</template>

<script>
import axios from 'axios';
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
            let text = prompt('Blog Body!');
            this.spinner = true;

            let title = name ? name : this.blog.title;
            let body = text ? text : this.body.body;

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
    width: 600px !important;
    margin: 10px auto;
    padding: 10px;
    border: 1px solid #000;
}
.controllers {
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.delete,
.edit {
    color: #000;
    text-decoration: none;
}
</style>
