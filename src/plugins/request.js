import router from "@/router";
import axios from "axios";

//设置axios请求头加入token
axios.interceptors.request.use(config => {
        if (config.push === '/') {

        } else {
            if (localStorage.getItem('token')) {
                config.headers.token = localStorage.getItem('token')
            }
        }
        return config
    }, error => {
        return Promise.reject(error)
    })
    //响应回来token是否过期
axios.interceptors.response.use(response => {
        console.log('响应回来' + response.data.data);
        if (response.data.data == 403) {
            alert('身份已失效')
            localStorage.removeItem('token')
            router.push('/login')
        } else {
            return response
        }
    },
    error => {
        return Promise.reject(error)
    })