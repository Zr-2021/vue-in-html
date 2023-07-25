const Home = httpVueLoader('./views/Home.vue');
// var Header = httpVueLoader('./components/Header.vue');
// Vue.component('my-header', Header);

const routes = [{
   path: '/',
   component: Home,
}, ];
const router = new VueRouter({
   routes // (缩写) 相当于 routes: routes
})
