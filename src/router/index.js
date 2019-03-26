import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: () => import('@/components/HelloWorld')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/pages/login/login')
    },

    {
      path: '/game',
      name: 'game',
      component: () => import('@/pages/game/game')
    }
  ]
})
