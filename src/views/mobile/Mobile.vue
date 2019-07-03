<template>
  <div class="mobile-wrap">
    <!--全局loading--->
    <mt-spinner type="fading-circle" color="#00C80C" :size="50" v-show="isLoading" class="mobile-spinner"></mt-spinner>
    <!--全局loading -->
    <transition name="fade">
    <!--需要缓存的-->
    <keep-alive>
    <!--子组件渲染-->
    <router-view v-if="$route.meta.KeepAlive"></router-view>
    <!--子组件渲染-->
    </keep-alive>
    <!--需要缓存的-->
    </transition>
    <transition name="fade">
    <!--不需要缓存的-->
    <!--子组件渲染-->
    <router-view v-if="!$route.meta.KeepAlive"></router-view>
    <!--子组件渲染-->
    <!--不需要缓存的-->
    </transition>
  </div>
</template>
<script>
import '@/assets/css/mobile/reset_mobile.css'
import '@/assets/css/mobile/mobile.css'
import {mapGetters} from 'vuex'
export default {
  // Mobile 端入口组件
  name: 'Mobile',
  computed: {
    ...mapGetters(['isLoading'])
  },
  mounted () {
    // 控制全局loading效果
    // this.$store.commit('showLoading')
  }
}
</script>
