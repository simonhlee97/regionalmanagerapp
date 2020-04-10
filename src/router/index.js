import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import OurTeam from '../views/OurTeam.vue'
import Manage from '../views/Manage.vue'
import ProfilePage from '@/components/ProfilePage.vue'
import Employee from '@/components/Employee.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
  	path: '/employee/:id',
  	name: Employee,
  	component: () => import(/* webpackChunkName: "about" */ '../components/Employee.vue')
  },
  {
    path: '/profile',
    name: 'ProfilePage',
    component: ProfilePage
  },
  
  {
    path: '/team',
    name: 'OurTeam',
    component: OurTeam
  },
  {
    path: '/manage',
    name: 'Manage',
    component: Manage
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  
]

const router = new VueRouter({
  mode: 'history',
  routes

})

export default router
