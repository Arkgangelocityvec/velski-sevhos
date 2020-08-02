var Vue = require('vue');
var VueRouter = require('vue-router');

//components
var About = require('./components/about.vue');

Vue.use(VueRouter)

var router = new VueRouter({

    routes: [
        { path: '/about', components: About },
    ]

})

new Vue({
    el: '#app',
    router: router,
})