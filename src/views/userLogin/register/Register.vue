<template>
  <div>
     <!-- 头部 -->
       <header class="header">
            <i class="iconfont icon-zuojiantou left" @click="$router.back()"></i>
            <span @click="$router.push('/login')">注册 / 登录</span>
      </header>
      <!-- 头部 -->
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
        type="password"
            v-model="password"
            placeholder="请输入密码"
            :rules="[{ required: true, message: '请填写密码' }]"
        />
        <i class="iconfont icon-yanzhengma icon-position"></i>
        <van-field
        class="input"
            v-model="yanzhengma"
            type="password"
            placeholder="请输入验证码"
            :rules="[{ required: true, message: '请填写验证码' }]"
        />
        <a href="#javascript" class="yanzheng" @click="sendYZ">发送验证码</a>

        <div class="gologin">
            注册完成了吗？去<a href="#javascript" @click="$router.push('/login')">登录</a>吧！
            <span><a href="#javascript">忘记密码</a></span>
        </div>
        <div style="margin: 16px;">
            <van-button round block type="info" native-type="submit" @click="Register">注册</van-button>
        </div>
</van-form>
  </div>
</template>

<script>
import { Toast } from 'vant';
export default {
 components:{
        },
        data(){
            return{
                username: '',
                password: '',
                yanzhengma: ''
            }
        },
        methods:{
           async sendYZ(){
              const res = await  this.$http.post('/user/sendSms',{
                    mobile:this.username,
                    type:'register'
                })
                console.log(res);
            },
           async Register(){
               const result = await this.$http.post('/user/reg',{
                   username: this.username,
                   password: this.password,
                   vercode: this.yanzhengma
               })
                localStorage.setItem('token',result.data.token)
                if(result.data.code === '50202'){
                    Toast({
                        message: '验证码错误',
                        position: 'top'
                    })
                }
                Toast({
                        message: '注册成功',
                        position: 'top'
                    })
               console.log(result);
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
//头部
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
//点击去登录
.gologin{
    font-size: 14px;
    margin-left: 14px;
    margin-top: 8px;
    a{
        color: rgb(255, 134, 154);
    }
    span{
        float: right;
        margin-right: 24px;
    }
}

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


</style>