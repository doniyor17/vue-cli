import Vue from 'vue';
import VueRouter from 'vue-router';
import ShowBlogs from '../views/ShowBlogs.vue';
import AddBlog from '../views/AddBlog.vue';
import SingleBlog from '../views/SingleBlog.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: ShowBlogs,
    },
    {
        path: '/add',
        component: AddBlog,
    },
    {
        path: '/blog/:id',
        component: SingleBlog,
    },
];
const router = new VueRouter({
    routes,
    mode: 'history',
});

export default router;
