import Vue from 'vue'
import Router from 'vue-router'
import NewsList from './components/NewsList'

Vue.use(Router)

export default new Router({
    routes: [
        {
            component: NewsList,
            name: 'Home',
            path: '/'
        }
    ]
})