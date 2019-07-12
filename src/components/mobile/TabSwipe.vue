<template>
  <div class="tabSwipe-warp" :tabs="tabs" :defaultTabSelected="defaultTabSelected">
    <ul class="tabSwipe-tabs">
      <li class="tabSwipe-tabItem" v-for="(item,index) in tabs" :key="index" :class="{tabSelected:index===defaultIndex}" @click="tabClick(index)">
          <span>{{item.tabName}}</span>
      </li>
    </ul>
    <div class="tabSwipe-swipe-wrap" ref="swipeWrap">
      <ul class="tabSwipe-swipe" ref="swipe">
        <li class="tabSwipe-swipeItem" v-for="(item,index) in swipes" :key="index" :value="index">
            {{item}}
        </li>
    </ul>
    </div>
    
  </div>
</template>
<script>
import { constants } from 'fs';
export default {
  name: "TabSwipe",
  props: {
    tabs: {
      type: Array,
      default: function() {
        return [
            { tabId: 0, tabName: "前端" },
            { tabId: 1, tabName: "后端" },
            { tabId: 2, tabName: "数据库" },
            { tabId: 3, tabName: "大数据分析" },
            { tabId: 4, tabName: "人工智能" },
        ];
      }
    },
    defaultTabSelected:{
        type:Number,
        default: 0
    },
    swipes:{
        type:Array,
        default:function(){
            return [0,1,2,3,4]
        }
    }
  },
  data() {
    return {
        defaultIndex:this.defaultTabSelected
    };
  },
  mounted(){
    let swipeWrap = this.$refs.swipeWrap;
    let swipe = this.$refs.swipe;
    let swipeWrapWidth = this.$refs.swipeWrap.offsetWidth;
    let swipeHeight = swipe.offsetHeight;
    swipe.style.width = this.swipes.length*swipeWrapWidth + 'px';
    swipeWrap.style.height = swipeHeight + 'px'
    
    swipe.addEventListener('touchstart',e=>{
      let target = e.target || e.srcElement;
      let index = target.value;
      swipe.startX = e.targetTouches[0].pageX;
      swipe.startY = e.targetTouches[0].pageY;

      swipe.addEventListener('touchmove',e=>{
        swipe.curX = e.targetTouches[0].pageX;
        swipe.curY = e.targetTouches[0].pageY;
        // 计算运动距离
        swipe.disX = swipe.curX - swipe.startX;
        swipe.disY = swipe.curY - swipe.startY;
        swipe.disX>0?swipe.direction = "swipeRight" : swipe.direction = "swipeLeft";
        console.log(swipe.direction)

          if(swipe.direction === "swipeLeft"){
              if(index<=this.swipes.length-2){
                swipe.style.left = swipe.disX + 'px'
                if(Math.abs(swipe.disX)>100){
                  swipe.style.left = -swipeWrapWidth*(index+1) + 'px'
                }
              } else if(index === this.swipes.length-1){
                swipe.style.left = -swipeWrapWidth*(index) + 'px'
              }
              // swipe.style.transform = `translateX(${-swipeWrapWidth}+ 'px)`
          } else if(swipe.direction === "swipeRight"){
            if(index >= 1) {
                swipe.style.left = swipe.disX + 'px'
                if(Math.abs(swipe.disX)>100){
                  swipe.style.left = -swipeWrapWidth*(index-1) + 'px'
                 // swipe.style.transform = `translateX(${swipeWrapWidth}+ 'px)`
                }
            }
            
          }
          
      })
    })
    swipe.addEventListener('touchend',()=>{
      
    })
  },
  methods:{
      tabClick(index) {
          this.defaultIndex = index;
      }
  }
};
</script>
<style scoped>
.tabSwipe-warp {
  widows: 100%;
  height: auto;
  box-sizing: border-box;
}
.tabSwipe-tabs {
  width: 100%;
  display: flex;
  justify-content: space-between;

}
.tabSwipe-tabItem {
  flex: 1;
  display: block;
  font-size: 1.25rem;
  padding:1.25rem 0rem;
  text-align: center;
}
.tabSelected{
  font-weight: 700;
  border-bottom: 3px solid #26a2ff;
  margin-bottom: -3px;
}
.tabSwipe-swipe-wrap{
  width:100%;
  height:auto;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
}
.tabSwipe-swipe{
  position: absolute;
  left:0;
  top:0;
  display: flex;
  transform: translateX(0px);
  transition:all 1s;
}
.tabSwipe-swipeItem{
  width:100%;
  height:10rem;
  background-color: #ccc;
}
</style>