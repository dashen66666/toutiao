<template>
  <div>
    <!-- 顶部搜索 -->
    <div class="search">
       <div class="input">
           <i class="iconfont icon-search icon-positon"></i>
           <input type="text" placeholder="搜索">
       </div>
    </div>

    <div class="content">
        <div class="content-bar">
         <van-tabs v-model="active" >
                <van-tab class="title" v-for="(item) in titleList" :title="item.name" :key="item._id" ></van-tab>
          </van-tabs>
        </div>
        <ArticeleInfo v-for="item in contentList" :time="item.time" :img="item.imageSrc" :amcount="item.fav" :title="item.title" :key="item._id" :author="item.author"></ArticeleInfo>
    </div>
   <Footer></Footer>
  </div>
</template>

<script>
import Footer from '@/views/Footer.vue'
import ArticeleInfo from '@/views/home/ArticeleInfo.vue'

export default {
        components:{
              Footer,ArticeleInfo
        },
        data(){
            return{
                titleList : [],
                contentList: [],
                active:0
            }
        },
        watch:{
            active(){
            this.getListItem()
            }
        },
        methods:{
        async getListItem(){
          const result =   await this.$http.post('/api/get_article_list',{
                  cate_id: this.titleList[this.active]._id
              })
              this.contentList = result.data.data
            }
        },
       async created(){
        const res =   await  this.$http.post('/api/get_cate_list')
            this.titleList = res.data.data
             this.getListItem()
             console.log(this.titleList);
        }
}
</script>

<style lang="less" scoped>
@import '@/common/change.less';
.search{
    width: 100%;
    height: 45px;
    // background-color: rgb(89, 215, 89);
    background-color: @color-bgColor;
}
.input{
    width: 280px;
    height: 30px;
    margin: 0 auto;
    input{
        color: #fff;
        border-radius: 15px;
        width: 100%;
        height: 30px;
        margin-top: 6px;
        border: none;
        background: rgb(255, 255, 255);
        text-align: center;
        font-size: 14px;
    }
    .icon-positon{
        position: absolute;
        top: 13px;
        left: 150px;
    }
}

.content-bar{
   border-bottom: 1px solid #ccc;
}

.list h4{
    font-weight: normal;
}
</style>