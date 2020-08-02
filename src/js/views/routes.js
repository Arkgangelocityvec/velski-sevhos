var Vue = require('vue');
var VueRouter = require('vue-router');

//components
var About = require('./components/about.vue');
var Index = require('./components/index.vue');

Vue.use(VueRouter)

var router = new VueRouter({

    routes: [
        //main page set default 
        { 
            path: '/',
            component: Index.default
        },
        
        { 
            path: '/about-edu-organization', 
            component: About.default 
        },
    ]

})

new Vue({
    el: '#app',
    router: router,
})