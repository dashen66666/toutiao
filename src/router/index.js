import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/userLogin/login/Login.vue'
import Register from '@/views/userLogin/register/Register.vue'
import Home from '@/views/home/Home.vue'
import Publish from '@/views/publish/Publish.vue'
import User from '@/views/user/User'

Vue.use(VueRouter)

const routes = [{
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    },
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/my',
        name: 'my',
        component: User
    },
    {
        path: '/publish',
        name: 'publish',
        component: Publish
    }


]

const router = new VueRouter({
    routes
})


router.beforeEach((to, from, next) => {
    if (to.path == '/login' || to.path == '/register') {
        next()
    } else {
        let token = localStorage.getItem('token');
        if (token == null || token === '') {
            alert('请先登录')
            next({ name: 'login' })
        } else if (token) {
            next()
        }
    }
})
export default router