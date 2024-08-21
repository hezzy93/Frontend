import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },


    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/Contact.vue')
    },

    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },

    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/SignupView.vue')
    },

    {
      path: '/loggedin',
      name: 'loggedin',
      component: () => import('../views/LoggedInView.vue')
    },
    
    {
      path: '/interests',
      name: 'interests',
      component: () => import('../views/InterestsView.vue')
    },

    {
      path: '/writepost',
      name: 'writepost',
      component: () => import('../views/WritePost.vue')
    },

    {
      path: '/previewpost',
      name: 'previewpost',
      component: () => import('../views/PreviewPost.vue')
      
    },

    {
      path: '/myposts',
      name: 'myposts',
      component: () => import('../views/MyPosts.vue')
    },
    

    {
      path: '/recommended',
      name: 'Recommended',
      component: () => import('../views/Recommended.vue')
    },

    {
      path: '/terms',
      name: 'Terms',
      component: () => import('../views/TermsView.vue')
    },


  ]
})

export default router
