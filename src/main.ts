import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import 'vant/lib/index.css'
import { Search,Sticky,Notify,Toast,SwipeCell,Button } from 'vant';
require ('./mock/home')
let app = createApp(App)
// app.use(router) 一定要写在 mount前面 不然会报错
app.use(router)
   .use(Search)
   .use(Sticky)
   .use(Notify)
   .use(Toast)
   .use(SwipeCell)
   .use(Button)
app.mount('#app')