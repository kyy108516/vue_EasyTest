import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/index'
import page from '../components/page'

Vue.use(Router)

export default new Router({
  routes:[
    {
      path:'/',
      name:'index',
      component:index
    },
    {
      path:'/page',
      name:'page',
      component:page
    }
  ]
})
