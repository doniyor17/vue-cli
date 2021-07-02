<template>
    <div class="header">
        <h1 @click="changeTitle">{{ title }}</h1>
    </div>
</template>

<script>
import { bus } from '../main';
export default {
    name: 'Header',
    props: {
        title: {
            type: String,
            required: true,
        },
    },
    methods: {
        changeTitle() {
            // this.$emit('changeTitle', 'Vue Forums'); //|> send emit event to parent component
            this.title = 'Vue Forums';
            bus.$emit('changeTitle', 'Vue Forums'); // |> This global event declaration in main.js file
        },
    },
};
</script>

<style scoped>
.header {
    width: 100%;
    padding: 30px 15px;
    background-color: rgb(230, 174, 174);
    text-align: center;
}
</style>
