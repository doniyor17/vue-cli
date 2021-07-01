<template>
    <div class="content">
        <ul class="users-list">
            <li
                class="user-item"
                v-for="user in users"
                :key="user.id"
                @click="user.show = !user.show"
            >
                <h2>{{ user.name }}</h2>
                <h3 v-show="user.show">Profession: {{ user.job }}</h3>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Content',
    props: {
        users: {
            type: Array,
            required: true,
        },
    },
};
</script>

<style scoped>
.content {
    margin-top: 60px;
}
.users-list {
    width: 600px;
    margin: 10px auto;
    list-style-type: none;
}
.user-item {
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #000;
    background-color: rgb(243, 140, 140);
}
</style>
