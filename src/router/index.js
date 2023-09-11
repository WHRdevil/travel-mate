import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView,
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
          component: () => import('../views/ChatView.vue')
        },
        {
          path: 'message',
          component: () => import('../views/MessageView.vue')
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
    }
  ]
})

export default router
