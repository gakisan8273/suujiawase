import Vue from 'vue'
import VueRouter from 'vue-router'
import Top from '@/router/top.vue'
import Game from '@/router/game.vue'
import Result from '@/router/result.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: Top
    },
    {
      path: '/game',
      component: Game
    },
    {
      path: '/result',
      component: Result
    }
  ]
})