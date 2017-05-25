import Vue from 'vue'
import Router from 'vue-router'
import Index from '../page/Index.vue'
import TitleView from '../page/TitleView.vue'
import ArticleView from '../page/ArticleView.vue'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        component: Index
    }, {
        path: '/titleView',
        component: TitleView
    }, {
        path: '/articleView',
        component: ArticleView
    }]
})