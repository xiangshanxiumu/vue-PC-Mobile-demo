<template>
  <div class="home-wrap">
    <!--首页轮播-->
    <mt-swipe :auto="3000" :style="{height:'15rem'}">
      <mt-swipe-item v-for="(item,index) in slides" :key="index">
        <a class="home-swipe-a" :href="item.url">
          <img class="home-swipe-img" :src="item.img" />
        </a>
      </mt-swipe-item>
    </mt-swipe>
    <!--首页轮播-->
    <!--tab-->
    <mt-navbar v-model="selected">
      <mt-tab-item id="前端">前端</mt-tab-item>
      <mt-tab-item id="后端">后端</mt-tab-item>
      <mt-tab-item id="数据库">数据库</mt-tab-item>
      <mt-tab-item id="大数据分析">大数据分析</mt-tab-item>
      <mt-tab-item id="人工智能">人工智能</mt-tab-item>
    </mt-navbar>
    <!--tab-->
    <div>
      <mt-cell
        title="最新发布"
        :value="selected"
        class="page-part"
        :style="{'margin-top':'3px','margin-bottom':'1rem','border-top':'none'}"
      ></mt-cell>
    </div>
    <!-- tab-container -->
    <mt-tab-container v-model="selected" class="home-tablist">
      <mt-tab-container-item id="前端" class="home-tablist-item">
        <!--下拉刷新加载-->
        <!-- <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" @top-status-change="handleTopChange">
          <ul>
            <li v-for="item in list" style="height:5rem;'text-algin':center;">{{ item }}</li>
          </ul>
          <div slot="top" class="mint-loadmore-top">
            <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
            <span v-show="topStatus === 'loading'">加载中...</span>
          </div>
        </mt-loadmore> -->
        <!--下拉刷新加载-->
      </mt-tab-container-item>
      <mt-tab-container-item id="后端">
        back-end
        <!-- <mt-cell v-for="n in 4" :title="'测试 ' + n"></mt-cell> -->
      </mt-tab-container-item>
      <mt-tab-container-item id="数据库">database</mt-tab-container-item>
      <mt-tab-container-item id="大数据分析">bigdata</mt-tab-container-item>
      <mt-tab-container-item id="人工智能">AI</mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
// 导入lodash工具函数库
// import _ from 'lodash'
import "@/assets/css/mobile/home/home.css";
export default {
  name: "Home_m",
  data() {
    return {
      slides: [
        {
          img: require("@/assets/img/home/mobile-app.jpg"),
          url: ""
        },
        {
          img: require("@/assets/img/home/pc.jpg"),
          url: ""
        },
        {
          img: require("@/assets/img/home/wx-xcx.jpg"),
          url: ""
        },
        {
          img: require("@/assets/img/home/wx-gzh.jpg"),
          url: ""
        },
        {
          img: require("@/assets/img/home/mobile-app2.jpg"),
          url: ""
        }
      ],
      selected: "前端",
      topStatus: "",
      list: [1, 2, 3, 4, 5, 6,7,8,9,10]
    };
  },
  methods: {
    loadTop() {
      // 加载更多数据
      // this.$refs.loadmore.onTopLoaded();
      console.log("loadTop")
    },
    handleTopChange(status) {
      console.log(status)
      this.topStatus = status;
      if(this.topStatus==="loading"){
        setTimeout(()=>{
          this.topStatus = ''
        },2000)
      }
    },
    loadBottom() {
      // 加载更多数据
      this.allLoaded = true; // 若数据已全部获取完毕
      // this.$refs.loadmore.onBottomLoaded();
    }
  }
};
</script>
