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
      <mt-tab-item v-for="item in tabs" :id="item.id" :key="item.id">{{item.name}}</mt-tab-item>
    </mt-navbar>
    <!--tab-->
    <div>
      <mt-cell
        :title="curSelected+'-hots'"
        is-link
        value="更多"
        class="page-part"
        :style="{'margin-top':'3px','margin-bottom':'0px','border-top':'none'}"
      ></mt-cell>
    </div>
    <!-- tab-container -->
    <!-- <mt-tab-container v-model="selected" class="home-tablist">
      <mt-tab-container-item v-for="item in lists" :id="item.id" :key="item.id" class="home-tablist-item">
        <mt-loadmore
          :top-method="loadTop"
          :ref="'loadmore'"
        >
          <mt-cell v-for="n in item.num" :title="item.name + n" :key="n">{{n}}</mt-cell>
        </mt-loadmore>
      </mt-tab-container-item>
    </mt-tab-container> -->
    <!-- tab-container -->
    <mt-swipe :auto="0" :defaultIndex="curSwipe" :showIndicators="false" @change="handleChange" :style="{height:'10rem'}">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
      <mt-swipe-item>4</mt-swipe-item>
      <mt-swipe-item>5</mt-swipe-item>
    </mt-swipe>
    <TabSwipe/>
  </div>
</template>
<script>
// 导入lodash工具函数库
// import _ from 'lodash'
import "@/assets/css/mobile/home/home.css";
import TabSwipe from '@/components/mobile/TabSwipe'
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
      tabs: [
        {
          name: "前端",
          id: "1"
        },
        {
          name: "后端",
          id: "2"
        },
        {
          name: "数据库",
          id: "3"
        },
        {
          name: "大数据分析",
          id: "4"
        },
        {
          name: "人工智能",
          id: "5"
        }
      ],
      lists:[
        {
          id:"1",
          name:"前端",
          num:10,
          total:30
        },
        {
          id:"2",
          name:"后端",
          num:10,
          total:20
        },
        {
          id:"3",
          name: "数据库",
          num:6,
          total:5
        },
        {
          id:"4",
          name: "大数据分析",
          num:5,
          total:5
        },
        {
          id:"5",
          name: "人工智能",
          num:3,
          total:5
        }
      ],
      selected: "1",
      topStatus: "",
      allLoaded: true,
      curSwipe:0,
    };
  },
  components:{
    TabSwipe
  },
  computed: {
    curSelected(){
      let ITEM = this.tabs.find((item,index)=>{
        return item.id === this.selected;
      })
      return ITEM.name;
    },
  },
  watch:{
    'selected':{
      handler(val,oldval){
        console.log(val,oldval)
      },
      immediate:true,
    }
  },
  methods: {
    loadTop() {
      setTimeout(() => {
            // 下拉刷新加载提示关闭 恢复原位
            this.$nextTick(() => {
              this.$refs.loadmore[this.selected-1].onTopLoaded();
            });
      }, 1000);
    },
    handleChange(index){
      console.log(index)
      this.selected = String(index+1)
      console.log(this.selected)
    }
  }
};
</script>