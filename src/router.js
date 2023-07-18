const Home = httpVueLoader('./views/Home.vue');
var Header = httpVueLoader('./components/Header.vue');
Vue.component('my-header', Header);
const Foo = {
   template: '<div>foo</div>'
};
const Bar = {
   template: '<div>bar</div>'
};
const routes = [{
   path: '/',
   component: Home,
   children: [{
         path: '/foo',
         component: Foo
      },
      {
         path: '/bar',
         component: Bar
      },
   ]
}, ];
const router = new VueRouter({
   routes // (缩写) 相当于 routes: routes
})
