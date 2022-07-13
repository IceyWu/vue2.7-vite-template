import Vue from 'vue'
import VueRouter from 'vue-router'

// 解决ncaught (in promise) NavigationDuplicated 问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) {
    return originalPush.call(this, location, onResolve, onReject)
  }
  return originalPush.call(this, location).catch((err) => err)
}
const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(location, onResolve, onReject) {
  if (onResolve || onReject) {
    return originalReplace.call(this, location, onResolve, onReject)
  }
  return originalReplace.call(this, location).catch((err) => err)
}

Vue.use(VueRouter)

export const constantRoutes = [
  {
    path: '/',
    redirect: '/index',
  },
  {
    path: '/index',
    name: 'Index',
    hidden: true,
    meta: {
      name: '页面一',
    },
    component: () => import('/@/views/Index.vue'),
  },

  {
    path: '/test',
    name: 'Test',
    hidden: true,
    meta: {
      name: '页面二',
    },
    component: () => import('/@/views/test.vue'),
  },
]

const createRouter = () =>
  new VueRouter({
    routes: constantRoutes,
  })

const router = createRouter()

export default router
