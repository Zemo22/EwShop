import  {createApp} from 'vue'
import App from './App.vue'
import router from './index/router'
import store from './index/store'
import 'vant/lib/index.css';

import {SubmitBar,Stepper,Checkbox, CheckboxGroup,SwipeCell,Field,Form,Tag,Button,Image as VanImage,Card,Tab, Tabs,Swipe, SwipeItem, Lazyload, Badge,Sidebar, SidebarItem,Collapse, CollapseItem} from 'vant';

createApp(App)
  .use(SubmitBar).use(Stepper).use(CheckboxGroup).use(Checkbox).use(SwipeCell).use(Field).use(Form).use(Button).use(Tag).use(VanImage).use(Card).use(Tab).use(Tabs ).use(Swipe).use(SwipeItem).use(Lazyload, {
  loading: require('./assets/images/default.png') // 设置先加载默认图片，请求的图片过来覆盖默认图片
}).use(Badge).use(Sidebar).use(SidebarItem).use(Collapse).use(CollapseItem)
  .use(store).use(router).mount('#app')
