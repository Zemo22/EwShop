// import Vue from 'vue'
// import Router from 'vue-router'
// import Home from '../views/Home.vue'


import {createRouter, createWebHistory} from 'vue-router'

const Home = () => import('@/views/home/Home')
const Category = () => import('@/views/category/Category')
const Detail = () => import('@/views/detail/Detail')
const Profile = () => import('@/views/profile/Profile')
const ShopCart = () => import('@/views/shopcart/ShopCart')
const Register = () => import('@/views/profile/Register')
const Login = () => import('@/views/profile/Login')

const routes= [
  {
    path: '', // 访问空路由让它加载 Home 主键
    name: 'DefaultHome',
    component: Home,
    meta: {
      title: '图书兄弟'
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      title: '图书兄弟'
    }
  },
  {
    path: '/category',
    name: 'category',
    component: Category,
    meta: {
      title: '图书兄弟-书本分类'
    }
  },
  {
    path: '/detail',
    name: 'Detail',
    component: Detail,
    meta: {
      title: '图书兄弟-书本详情'
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {
      title: '图书兄弟-个人中心',
      isAuthRequired: true // 授权才能访问 标志
    }
  },
  {
    path: '/shopcart',
    name: 'ShopCart',
    component: ShopCart,
    meta: {
      title: '图书兄弟-购物车',
      isAuthRequired: true // 授权才能访问 标志
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      title: '图书兄弟-用户注册'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title: '图书兄弟-用户注册'
    }
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to,from,next) => {
  document.title = to.meta.title

  next();
})

export default router

