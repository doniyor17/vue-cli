<template>
    <div class="all-blogs">
        <Header :title="title" />
        <div class="container">
            <Content />
        </div>
        <Footer :title="title" />
    </div>
</template>

<script>
import Header from '../components/Header.vue';
import Content from '../components/Content.vue';
import Footer from '../components/Footer.vue';
export default {
    name: 'ShowBlogs',
    components: {
        Header,
        Content,
        Footer,
    },
    data: () => ({
        title: 'Vue Blog',
    }),
};
</script>

<style scoped></style>
