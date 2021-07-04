<template>
    <div class="header">
        <h1>{{ title }}</h1>
        <div class="links-box">
            <router-link class="link" to="/" exact>All Blogs</router-link>
            <router-link class="link" to="/add" exact>Add Blog</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header',
    props: {
        title: {
            type: String,
            required: true,
        },
    },
};
</script>

<style scoped>
.header {
    width: 100%;
    padding: 30px 15px;
    margin-bottom: 60px;
    background-color: rgb(230, 174, 174);
    text-align: center;
}
.links-box {
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.link {
    padding: 10px 15px;
    border-radius: 25px;
    font-size: 18px;
    box-shadow: 0 0 5px #333;
    color: rgb(255, 255, 255);
    background-color: rgb(133, 102, 207);
    text-decoration: none;
}
.router-link-active {
    color: #444;
    background-color: #eee;
}
</style>
