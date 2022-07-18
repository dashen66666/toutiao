<template>
   <van-cell>
      <!-- 标题区域的插槽 -->
      <template #title>
        <div class="title-box">
          <!-- 标题 -->
          <span>{{ title }}</span>
          <!-- 单张图片 -->
          <img
            :src="img[0]"
            alt=""
            class="thumb"
            v-if="img.length === 1"
          />
        </div>
        <!-- 两张图片 -->
        <div class="thumb-box" v-if="img.length === 2">
          <img
            :src="item"
            alt=""
            class="thumb"
            v-for="item in img"
            :key="item.index"
          />
        </div>
        <!-- 三张图片 -->
          <div class="thumb-box" v-if="img.length === 3">
          <img
            :src="item"
            alt=""
            class="thumb"
            v-for="item in img"
            :key="item.index"
          />
        </div>
      </template>
      <!-- label 区域的插槽 -->
      <template #label>
        <div class="label-box">
          <span>
            作者 {{ author }} &nbsp;&nbsp; {{ amcount }}评论 &nbsp;&nbsp;
            发布日期 {{ new Date(time).toLocaleString() }}
          </span>
          <!-- 关闭按钮 -->
          <van-icon name="cross" />
        </div>
      </template>
    </van-cell>
</template>

<script>
export default {
    data(){
        return{
            // times:parseInt(this.time)
        }
    },
    props:{
        author: {
            type: [Number,String],
            default: '吴彦祖'
        },
        title:{
            type: String,
            default: ''
        },
        amcount:{
            type: Number,
            default: 0
        },
        img:{
            default:'https://www.bing.com/th/id/OGC.7358f4766f5d9772dd78801d41f983fc?pid=1.7&rurl=https%3a%2f%2fpic1.zhimg.com%2fv2-8bb7134349fe776844ed1de000af4de0_b.gif&ehk=l0nDsBOMRNW3Hz3AlBoxPzSo0r9jqZDX7S3J6KTB2qw%3d'
        },
        time:{
            default: new Date()
        }
    }
   
}
</script>

<style lang="less" scoped>
.label-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.thumb {
  // 矩形黄金比例：0.618
  width: 113px;
  height: 70px;
  background-color: #f8f8f8;
  object-fit: cover;
}

.title-box {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.thumb-box {
  display: flex;
  justify-content: space-between;
}
</style>