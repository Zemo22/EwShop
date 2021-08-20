<template>
  <div id="home">
    <nav-bar>
      <template v-slot:center>Home</template>
    </nav-bar>
    <tab-control :title="['Best-Selling','New Book' , 'Selection']"
                 @tabClick="tabClick"
                 v-show="isTabFixed"
    ></tab-control>
    <div class="wrapper">
      <div class="content">
        <div ref="banref">
          <div class="banners">
            <home-swiper :banners="banners"></home-swiper>
          </div>
          <div class="recommend">
            <recommend-view :recommends="recommends"></recommend-view>
          </div>
        </div>
        <tab-control :title="['Best-Selling','New Book' , 'Selection']"
                     @tabClick="tabClick" v-show="!isTabFixed"
        ></tab-control>
        <goods-list :goods="showGoods"></goods-list>

      </div>
    </div>
    <back-top v-show="isTabFixed" @btop="btop"></back-top>
  </div>
</template>

<script>
import NavBar from "@/components/common/navBar/NavBar";
import RecommendView from "@/views/home/ChildrenComponent/RecommendView";
import TabControl from "@/components/content/tabControl/TabControl";
import GoodsList from "@/components/content/goods/GoodsList";
import BackTop from "@/components/common/backtop/BackTop";
import HomeSwiper from "@/views/home/ChildrenComponent/HomeSwiper";

import {getHomeAllData, getHomeGoods} from "@/network/home";
import {onMounted, ref, reactive, computed, watchEffect, nextTick} from 'vue'
import BScroll from "better-scroll";


export default {
  name: "Home.vue",
  setup() {
    const recommends = ref([]);
    const goods = reactive({
      sales: {page: 0, list: []},
      new: {page: 0, list: []},
      recommend: {page: 0, list: []},
    })
    let currentType = ref('sales');

    let bscroll = reactive({})
    let isTabFixed = ref(false)
    let banref = ref(null)
    let isShowBackTop = ref(false)
    const banners = ref([])


    const showGoods = computed(() => {
      return goods[currentType.value].list;
    })
    const tabClick = (index) => {

      let types = ['sales', 'new', 'recommend']
      currentType.value = types[index]
      nextTick(() => {
        bscroll && bscroll.refresh()
      })

    }

    const btop = () => {
      bscroll.scrollTo(0, 0, 500)

    }


    onMounted(() => {
      getHomeAllData().then(res => {

        recommends.value = res.goods.data
        banners.value = res.slides
      })
      getHomeGoods('sales').then(res => {
        goods.sales.list = res.goods.data;
        console.log(goods.sales.list)
      })
      getHomeGoods('recommend').then(res => {
        goods.recommend.list = res.goods.data;
      })
      getHomeGoods('new').then(res => {
        goods.new.list = res.goods.data;
      })


      setTimeout(() => {
        bscroll = new BScroll(document.querySelector(".wrapper"), { // 获取到最外层元素
          probeType: 3, // 0,1,2,3, 3 只要在运行就触发 scroll 事件
          click: true,  // 是否允许点击
          pullUpLoad: true// 上拉加载更多，默认 false
        })
        //  7 触发滚动事件 - scroll 事件 - 位置 position
        bscroll.on('scroll', (position) => {
          // console.log(banref.value.offsetHeight) // 15 offsetHeight 偏移量的高度

          isShowBackTop.value = isTabFixed.value = (-position.y) > banref.value.offsetHeight // ️ 2-6 isShowBackTop.value =
        })

        bscroll.on("pullingUp", () => {

          const page = goods[currentType.value].page + 1

          getHomeGoods(currentType.value, page).then(res => {
            goods[currentType.value].list.push(...res.goods.data)
            goods[currentType.value].page++

          })
          console.log(banref.value.offsetHeight)
          bscroll.finishPullUp()
          bscroll.refresh()
        })


        console.log(bscroll)
      }, 3000)
      // bscroll = new BScroll(document.querySelector(".wrapper"), { // 获取到最外层元素
      //   probeType: 3, // 0,1,2,3, 3 只要在运行就触发 scroll 事件
      //   click: true,  // 是否允许点击
      //   pullUpLoad: true // 上拉加载更多，默认 false
      // })
      // //  7 触发滚动事件 - scroll 事件 - 位置 position
      // bscroll.on('scroll', (position) => {
      //   // console.log(banref.value.offsetHeight) // 15 offsetHeight 偏移量的高度
      //   console.log(-position.y) // 打印滚动的距离
      //   // isShowBackTop.value = isTabFixed.value = (-position.y) > banref.value.offsetHeight // ️ 2-6 isShowBackTop.value =
      // })

      // bscroll.on('pullingUp' , () => {
      //   console.log("pull up ")
      // })


    })

    watchEffect(() => {
      nextTick(() => {
        bscroll && bscroll.refresh()
      })
    })


    return {
      recommends,
      tabClick,
      goods,
      showGoods,
      isTabFixed,
      isShowBackTop,
      banref,
      btop,
      banners
    }
  },
  components: {HomeSwiper, BackTop, GoodsList, TabControl, RecommendView, NavBar}
}
</script>

<style scoped lang="scss">

#home { //  3 这一整块 固定高度
  height: 100vh; // 占领整个屏幕区域高度
  position: relative;

  .wrapper {
    position: absolute;
    top: 45px;
    bottom: 50px;
    left: 0; // 左右为0 内容可居中
    right: 0;
    overflow: hidden; // 超出部分隐藏
  }
}


.content {

}


</style>