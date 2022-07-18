<template>
  <div class="adminst">
      <!-- 个人信息 -->
     <div>
          <div class="user">
          <div class="ziliao">
              <div class="left">
                  <div class="touxiang">
                      <!-- <i class="iconfont icon-jingshi"></i> -->
                      <img src="../../assets/2.png" alt="">
                  </div>
                  <p class="username">M78星云旅行者</p>
              </div>
              <div class="right">
                <p class="bianji">编辑资料</p>
              </div>
          </div>
          <div class="xinxi">
              <div class="toutiao">
                  <p class="fontsize">1</p>
                  <p>头条</p>
              </div>
              <div class="dianzan">
                  <p class="fontsize">3</p>
                  <p>获赞</p>
              </div>
          </div>
          </div>
          <div class="likes">
              <div>
                  <i class="iconfont icon-shoucang"></i>
                  <p>收藏</p>
              </div>
              <div>
                  <i class="iconfont icon-lishi"></i>
                  <p>历史</p>
              </div>
          </div>
     </div>
     <ul class="list">
         <li class="list-item">
             <p>修改密码</p>
             <i class="iconfont icon-youjiantou1"></i>
         </li>
          <li class="list-item">
             <p>联系我们</p>
             <i class="iconfont icon-youjiantou1"></i>
         </li>
          <li class="list-item">
             <p>关于我们</p>
             <i class="iconfont icon-youjiantou1"></i>
         </li>
     </ul>
     <div>
         <button class="btn" @click="$router.push('/login')">退出登录</button>
     </div>
      <Footer></Footer>
  </div>
</template>

<script>
import Footer from '@/views/Footer.vue'

export default {
components:{
    Footer
}
}
</script>

<style lang="less" scoped>
.adminst{
    background-color: rgb(247, 247, 247);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}
.user{
    display: flex;
    flex-direction: column;
    // background-color: pink;
    background: url('../../assets/1.jpg');
    .ziliao{
        display: flex;
        justify-content: space-between;
        padding: 30px 15px;
    .left{
        position: relative;
        .touxiang{
            position: relative;
            display: inline-block;
            width: 65px;
            height: 65px;
            border-radius: 50% 50%;
            background-color: #fff;
            text-align: center;
            line-height: 65px;
            .iconfont{
            font-size: 20px;
            color: rgb(157, 157, 157);
            }
            img{
                position: absolute;
                top: -6px;
                left: -6px;
            }
        }
        .username{
            min-width: 100px;
            display: inline-block;
            font-size: 14px;
            color: #fff;
            margin-left: 10px;
            position: absolute;
            top: 22px;
        }
        }
       
       .right{
           position: absolute;
           top: 55px;
           right: 15px;
           background-color: #fff;
           border-radius: 9px;
           color: #333;
           .bianji{
               padding: 1px 10px;
               font-size: 12px;
           }
       }
    }
    .xinxi{
        display: flex;
        justify-content: space-between;
        padding: 0 21%;
        font-size: 12px;
        text-align: center;
        color: #fff;
        font-family: Arial, Helvetica, sans-serif;
        margin: -10px 0 15px 0;
        .fontsize{
            font-size: 14px;
        }
    }
}
.likes{
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    padding: 10px 21%;
    font-size: 14px;
    font-family: '微软雅黑';
    .iconfont{
        font-size: 24px;
        color: rgb(216, 141, 0);
        margin-bottom: 10px;
    }
}

.list{
        margin: 5px 0;
    .list-item{
        display: flex;
        justify-content: space-between;
        padding: 15px 20px;
        font-size: 14px;
        background-color: #fff;
        border-bottom: 1px dotted #ccc;
    }
    .list-item:last-child{
        border: none;
        margin-bottom: 5px;
    }
}

.btn{
    width: 100%;
    height: 40px;
    background-color: #fff;
    border: none;
    color: red;
}
</style>