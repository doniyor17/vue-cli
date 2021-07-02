export default {
    computed: {
        filteredBlogs() {
            return this.posts.filter((blog) => {
                return blog.title
                    .toLowerCase()
                    .match(this.search.toLowerCase());
            });
        },
    },
};
