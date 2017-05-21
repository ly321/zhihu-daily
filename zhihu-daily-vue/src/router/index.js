import Vue from 'vue'
import Router from 'vue-router'
import Index from '../page/Index.vue'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        component: Index
    }]
})