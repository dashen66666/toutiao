import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import getPlugin from '@/plugins/index.js'
import '@/iconfont/iconfont.css'

Vue.prototype.$http = axios
axios.defaults.baseURL = 'https://d33a5037-6c63-4e92-8bb1-30018ab701ea.bspapp.com/http'

Vue.config.productionTip = false
getPlugin(Vue)


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')