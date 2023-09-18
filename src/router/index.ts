import {
  createRouter,
  createWebHashHistory
} from 'vue-router'
// 引入components单体文件
import HomeVue from '../components/HomeVue.vue'

const routes = [
  // 定义路由对应的组件
  {
    path: '/',
    component: HomeVue 
    // component:() => import('../components/HomeVue.vue') //懒引入的components单体文件
  },
  {
    path: '/e',
    component: () => import('../views/EventTest/EventTest.vue') //懒引入的components单体文件
  },
  {
    path: '/bus',
    component: () => import('../views/_event-bus/EventBusTest.vue') //懒引入的components单体文件
  },
  {
    path: '/model',
    component: () => import('../views/_v-model/ModelTest.vue') //懒引入的components单体文件
  },
  {
    path: '/attr',
    component: () => import('../views/_useAttr/useAttrTest.vue') //懒引入的components单体文件
  },
  {
    path: '/ref',
    component: () => import('../views/_ref-children-parent/RefChildrenParent.vue') //懒引入的components单体文件
  },
  {
    path: '/pj',
    component: () => import('../views/_provide-inject/ProvideInjectTest.vue') //懒引入的components单体文件
  },
  {
    path: '/pinia',
    component: () => import('../views/pinia/index.vue') //懒引入的components单体文件
  }
]

// createRouter创建路由
const router = createRouter({
  // 指定路由模式基于HTML5 History API
  history: createWebHashHistory(),
  // 配置路由规则
  routes
})

export default router