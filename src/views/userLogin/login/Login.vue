<template>
  <div>
      <!-- 头部 -->
       <header class="header">
            <i class="iconfont icon-zuojiantou left" @click="$router.push('/my')"></i>
            <span @click="$router.push('/register')">注册 / 登录</span>
      </header>
      <!-- 头部 -->
<!-- 表单 -->
 <van-form class="icon-re">
     <i class="iconfont icon-mobile icon-position"></i>
        <van-field
        class="input"
            v-model="username"
            placeholder="请输入手机号"
            :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <i class="iconfont icon-mima1 icon-position"></i>
        <van-field
        class="input"
            v-model="password"
            type="password"
            placeholder="请输入密码"
            :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div class="gologin">
            还没注册吗？先去<a href="#none" @click="$router.push('/register')">注册</a>吧！
        </div>
        <div style="margin: 16px;">
            <van-button round block type="info" native-type="submit" @click="login">登录</van-button>
        </div>
</van-form>
<!-- 表单 -->
  </div>
</template>

<script>
import { Toast } from 'vant'
// import LoginHeader from '@/views/userLogin/LoginHeader.vue'
export default {
 components:{
   
        },
        data(){
            return{
                username: '',
                password: ''
            }
        },
        methods:{
           async login(){
              const result =  await this.$http.post('/user/login',{
                    username:this.username,
                    password:this.password
                })
                localStorage.setItem('token',result.data.token)
                console.log(result);
                if(result.data.message === '登录成功'){
                    Toast({
                        message: '登录成功！',
                        position: 'top'
                    })
                    this.$router.push('/')
                }
            }
        }
}
</script>

<style lang="less" scoped>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
// 头部
.header{
    display: flex;
    justify-content: center;
    color: #fff;
    // background-color: rgb(35, 190, 35);
    background-color: pink;
    height: 50px;
    line-height: 50px;
    text-align: center;
}
.left{
    position: absolute;
    font-size: 18px;
    top: 0;
    left: 8px;
}
//表单
.icon-position{
    position: relative;
    top: 31px;
    left: 10px;
    z-index: 100;
    color: rgb(169, 169, 169);
}
.input{
    padding-left: 30px;
}

.yanzheng{
    position: relative;
    top: -38px;
    left: 285px;
    display: inline-block;
    padding: 1px 5px;
    border-radius: 15px;
    line-height: 1.5;
    font-size: 12px;
    color: #333;
    background-color: rgb(242, 242, 242);
}

.gologin{
    font-size: 14px;
    margin-top: 8px;
    margin-left: 14px;
    a{
        color: orangered;
    }
}

</style>