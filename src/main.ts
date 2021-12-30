import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import api from './api/index'
import naiveUi from './plugins/naive-ui'
import './styles/style.less'


// 通用字体
import "vfonts/Lato.css";
// 等宽字体
import "vfonts/FiraCode.css";

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.use(naiveUi)
app.config.globalProperties.$api = api
app.mount('#app')

