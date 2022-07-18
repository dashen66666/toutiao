import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        titles: []
    },
    getters: {},
    mutations: {
        getTitle(state, payload) {
            if (state.titles.length > 7) return
            state.titles.push(payload)
        }
    },
    actions: {

    },
    modules: {}
})