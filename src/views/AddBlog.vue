<template>
    <div>
        <Header :title="title" />
        <div class="container">
            <div class="row">
                <div
                    class="form col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
                >
                    <loading v-if="spinner" />
                    <form-blog>
                        <h2
                            class="form-heading col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
                            slot="form-heading"
                        >
                            Add Blog
                        </h2>
                        <div
                            class="form-inputs col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
                            slot="form-inputs"
                        >
                            <input
                                class="title form-control"
                                type="text"
                                placeholder="Title..."
                                v-model="blogTitle"
                            />
                            <input
                                class="body form-control"
                                type="text"
                                placeholder="Body..."
                                v-model="blogBody"
                            />
                        </div>
                        <div
                            class="form-controls col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
                            slot="form-controls"
                        >
                            <input
                                @click="submitBlog"
                                class="submit btn btn-primary"
                                type="submit"
                                value="Add"
                            />
                            <input
                                @click="resetBlog"
                                class="reset btn btn-danger"
                                type="reset"
                                value="Cancel"
                            />
                        </div>
                        <div
                            class="result mt-5 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
                            slot="form-result"
                        >
                            <h3 class="text-title">{{ blogTitle }}</h3>
                            <p class="text-body">{{ blogBody }}</p>
                        </div>
                    </form-blog>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '../components/Header.vue';
import Form from '../components/Form.vue';
import Loading from '../components/Loading.vue';
export default {
    name: 'AddBlogs',
    components: {
        Header,
        'form-blog': Form,
        loading: Loading,
    },
    data: () => ({
        title: 'Vue Blog',
        blogTitle: '',
        blogBody: '',
        spinner: false,
    }),
    methods: {
        async submitBlog() {
            try {
                if (this.blogTitle === '') {
                    alert('Blog title can not be empty!');
                } else if (this.blogBody === '') {
                    alert('Blog body can not be empty!');
                } else {
                    this.spinner = true;
                    const data = await this.$http.post(
                        'https://vue-blog-app-3ffb5-default-rtdb.asia-southeast1.firebasedatabase.app/blogs.json',
                        {
                            title: this.blogTitle,
                            body: this.blogBody,
                        }
                    );
                    const id = await data.json();
                    if (id) {
                        this.spinner = false;
                        this.blogTitle = '';
                        this.blogBody = '';
                        alert(`Blog created succesfully!`);
                    }
                }
            } catch (e) {
                console.log(e.message);
            }
        },
        resetBlog() {
            this.blogTitle = '';
            this.blogBody = '';
        },
    },
};
</script>

<style scoped>
.form-heading,
.text-title {
    text-align: center;
}
.form-inputs {
    width: 800px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;
}
.title,
.body {
    padding: 10px 15px;
    margin-bottom: 15px;
    font-size: 16px;
    outline: none;
}
.form-controls {
    width: 800px;
    display: flex;
    flex-direction: row-reverse;
    margin: 0 auto;
}
.result {
    width: 800px;
    padding: 0 15px;
    margin: 0 auto;
}
.text-title {
    font-size: 26px;
    line-height: 1.3;
    font-family: Open-sans, sans-serif;
}
.text-body {
    font-size: 18px;
    line-height: 1.5;
    font-family: Arial, sans-serif;
}
.submit,
.reset {
    border-radius: 7px;
}
.submit {
    margin-left: 15px;
}
</style>
