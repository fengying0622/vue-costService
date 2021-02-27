import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'home',
      component: ()=>import('@/views/Home')
    },
    {
      path: '/source',
      name: 'source',
      component: ()=>import('@/views/Source')
    },
    {
      path: '/about',
      name: 'about',
      component: ()=>import('@/views/About')
    },
  ]
})
