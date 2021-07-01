<template>
    <div id="app">
        <div class="container">
            <Header :title="title" @changeTitle="updateTitle($event)" />
            <Content :users="users" />
            <Footer :title="title" />
        </div>
    </div>
</template>

<script>
Content;
import Header from './components/Header.vue';
import Content from './components/Content.vue';
import Footer from './components/Footer.vue';
export default {
    name: 'App',
    components: {
        Header,
        Content,
        Footer,
    },
    data: () => ({
        title: 'Vue Area',
        users: [
            {
                id: 1,
                name: 'Yusuf',
                show: false,
                job: 'Programmer',
            },
            {
                id: 1,
                name: 'Salohiddin',
                show: false,
                job: 'Programmer',
            },
            {
                id: 1,
                name: 'Muhammad',
                show: false,
                job: 'Designer',
            },
            {
                id: 1,
                name: 'Akmal',
                show: false,
                job: 'Designer',
            },
        ],
    }),
    methods: {
        updateTitle(newValue) {
            this.title = newValue;
        },
    },
};
</script>

<style>
.container {
    width: 1200px;
    margin: 60px auto 0;
    padding: 0 15px;
}
</style>
