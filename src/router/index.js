import Vue from 'vue'
import Router from 'vue-router'
var course=()=>import("@/pages/Course")
var select=()=>import("@/pages/Select")

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      component: course
    },
    {
      path:'/select',
      component: select
    }
  ]
})
