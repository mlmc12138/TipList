import { createRouter,createWebHistory} from "vue-router";

const Home = ()=> import('../views/Home.vue')
const Wait = ()=> import('../views/Wait.vue')
const Search = ()=> import('../views/Search.vue')
const Detail = ()=> import('../views/Detail.vue')
const Addtips = ()=> import('../views/Addtips.vue')
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta: {
      isShow: true
    }
  },
  {
    path: '/search',
    name: 'search',
    component: Search,
    meta: {
      isShow: false
    }
  },
  {
    path: '/detail',
    name: 'detail',
    component: Detail,
    meta: {
      isShow: false
    }
  },
  {
    path: '/addtips',
    name: 'addtips',
    component: Addtips,
    meta: {
      isShow: false
    }
  },
  {
    path: '/wait',
    name: 'wait',
    component: Wait,
    meta: {
      isShow: true
    }
  },
  
]
export const router = createRouter({
  history: createWebHistory(),
  routes: routes
})