import { createApp } from 'vue'
import { createPinia } from 'pinia'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './style.css'
import App from './App.vue'

// 引入router
import router from './router/index'

const app = createApp(App)
//在引入 ElementPlus 时，可以传入一个包含 size 和 zIndex 属性的全局配置对象。 size 用于设置表单组件的默认尺寸，zIndex 用于设置弹出组件的层级，zIndex 的默认值为 2000。
app.use(router).use(ElementPlus, { size: 'small', zIndex: 3000 }).use(createPinia()).use(store)
app.mount('#app')
