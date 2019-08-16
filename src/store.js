import Vue from 'vue'
import Vuex from 'vuex'
import moment from 'moment'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        newsList: [],
        time: null
    },
    mutations: {
        loadData(state, data) {
            state.newsList = data
        }
    },
    actions: {
        async fetchData({ commit }, category) {
            try {
                const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=63b030373c884540893728081432246c`);
                const data = await response.json();
                const articles = data.articles.filter(article => {
                    return article.urlToImage
                });
                commit('loadData', articles)
            } catch (e) {
                console.log(e)
            }
        }
    },
    getters: {
        getTime(state) {
            state.newsList.forEach(news => {
                state.time = moment(news.publishedAt).fromNow()
            })
        }
    }
})