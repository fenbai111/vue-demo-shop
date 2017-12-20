import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/views/layout/Layout'
import Home from '@/views/home'
import Category from '@/views/category'
import Content from '@/views/category/Content'
import Me from '@/views/me'
import TTS from '@/views/TTS'
import check from '@/views/check'
import report from '@/views/report'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/home',
      children: [
        {
          name: 'Home',
          path: 'home',
          component: Home
        },
        {
          name: '质检',
          path: 'TTS',
          component: TTS
        },
        {
          name: '打卡',
          path: 'check',
          component: check
        },
        {
          name: '报告',
          path: 'report',
          component: report
        },
        {
          name: 'Category',
          path: 'category',
          component: Category,
          children: [
            {
              name: 'Content',
              path: 'content',
              component: Content
            }
          ]
        },
        {
          name: 'Me',
          path: 'me',
          component: Me
        }
      ]
    },
  ]
})
