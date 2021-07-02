import Vue from 'vue';
import App from './App.vue';
Vue.filter('shortTitle', (value) => {
    return value.slice(0, 50) + '...';
});
Vue.filter('shortBody', (value) => {
    return value.slice(0, 150) + '...';
});
Vue.config.productionTip = false;
export const bus = new Vue();
new Vue({
    render: (h) => h(App),
}).$mount('#app');
