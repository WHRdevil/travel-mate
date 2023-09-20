import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView,
      meta: {
        requireAuth: true
      },
      redirect: {
        name: 'people'
      }, // default page
      children: [
        {
          path: 'nearby',
          component: () => import('../views/NearbyView/index.vue'),
          redirect: {
            name: 'people'
          },
          children: [
            {
              path: 'people',
              name: 'people',
              component: () => import('../views/NearbyView/PeopleView.vue')
            },
            {
              path: 'dynamic',
              name: 'dynamic',
              component: () => import('../views/NearbyView/DynamicView.vue')
            }
          ]
        },
        {
          path: 'chat',
          component: () => import('../views/ChatView/index.vue')
        },
        {
          path: 'message',
          component: () => import('../views/MessageView/index.vue'),
          children: [
            {
              path: 'message',
              name: 'message',
              component: () => import('../views/MessageView/MessageView.vue')
            }
          ]
        },
        {
          path: 'trip',
          component: () => import('../views/TripView.vue')
        },
        {
          path: 'me',
          component: () => import('../views/UserView.vue')
        }
      ]
    },
    {
      path: '/body',
      name: 'message_body',
      meta: {
        requireAuth: true
      },
      component: () => import('../views/MessageView/MessageBody.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/AuthView.vue')
      // beforeEnter: (to, from) => {}
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
      // beforeEnter: (to, from) => {}
    },
    {
      path: '/setting',
      name: 'setting',
      meta: {
        requireAuth: true
      },
      component: () => import('../views/SettingView/index.vue')
    },
    {
      path: '/setting/server',
      name: 'server',
      meta: {
        requireAuth: true
      },
      component: () => import('../views/SettingView/ServerView.vue')
    },
    {
      path: '/setting/about',
      name: 'about',
      meta: {
        requireAuth: true
      },
      component: () => import('../views/SettingView/AboutView.vue')
    },
    {
      path: '/setting/purview',
      name: 'purview',
      meta: {
        requireAuth: true
      },
      component: () => import('../views/SettingView/PurviewView.vue')
    },
    {
      path: '/personal',
      name: 'personal',
      component: () => import('../views/PersonalView.vue')
    },
    {
      path: '/hotel',
      name: 'hotel',
      component: () => import('../views/HotelView.vue')
    },
    {
      path: '/publish',
      name: 'publish',
      component: () => import('../views/PublishView.vue')
    },
    {
      path: '/showplan',
      name: 'showplan',
      component: () => import('../views/ShowplanView.vue')
    },
    {
      path: '/revise',
      name: 'revise',
      component: () => import('../views/ReviseView.vue')
    },
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if (localStorage.getItem('token')) {
      next()
    } else {
      next({
        name: 'login'
      })
    }
  } else {
    next()
  }
})

export default router
