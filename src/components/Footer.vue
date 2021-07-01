<template>
    <div class="footer">
        <h2 class="text">{{ title }} 2021</h2>
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
.footer {
    margin-top: 60px;
    text-align: center;
}
</style>
