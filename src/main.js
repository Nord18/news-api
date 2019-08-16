import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(Vuetify)

new Vue({
    router,
    store,
    vuetify: new Vuetify(),
    render: function (h) { return h(App) }
}).$mount('#app')
