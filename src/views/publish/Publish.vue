<template>
  <div class="publish">
    <header class="header">发布</header>
    <form action="" class="form">
        <input type="text" placeholder="请输入标题" class="input" v-model="title">

       <div class="select">
            <van-picker title="请选择发布位置" class="titles" show-toolbar visible-item-count="1" :columns="titles" />
       </div>
        <textarea name="" class="textarea" cols="30" rows="4" placeholder="请输入内容" v-model="content"></textarea>
        <i class="iconfont icon-xiangji"></i>
        <button class="button" @click="send">确定</button>
    </form>
   <Footer></Footer>

  </div>
</template>

<script>
import Footer from '@/views/Footer.vue'
import { mapState } from 'vuex'

export default {
components:{
    Footer
},
data(){
    return{
        title: '',
        content: ''
    }
},
computed:{
    ...mapState(['titles'])
},
methods:{
   send(){
       this.$http.post('/api/add_article',{
           title: this.title,
           content: this.content
       })
   }
},
async created(){
        const res = await this.$http.post('/api/get_cate_list')
        const result = res.data.data
        result.forEach(item => {
            this.$store.commit('getTitle',item.name)
        });
}

}
</script>

<style lang="less" scoped>
@import '@/common/change.less';
.select{
    height: 80px;
    width: 100%;
    position: absolute;
    overflow: hidden;
    font-size: 14px;
}

.publish{
    // background-color: rgb(244, 227, 227);
    background-color: rgb(247, 247, 247);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}
.header,.button{
    height: 40px;
    text-align: center;
    line-height: 40px;
    font-size: 14px;
    color: #fff;
    background-color: @color-bgColor;
}
.form{
    position: relative;
    margin: 8px 0 30px 0;
    font-size: 14px;
    .input{
        width: 100%;
        padding: 15px;
        margin-bottom: 10px;
    }
    .textarea{
        margin-top: 85px;
        width: 100%;
        padding: 15px;
    }
    .button{
        position: absolute;
        top: 340px;
        left: 10%;
        width: 300px;
        border: none;
        box-shadow: 1px 2px 8px rgb(255, 221, 221);
    }
    .iconfont{
        position: absolute;
        top: 260px;
        left: 30px;
        color: rgb(255, 121, 210);
        font-size: 30px;
    }
}

</style>