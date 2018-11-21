
import Home from '@/pages/Home'
import Profile from '@/pages/Profile'
import Cart from '@/pages/Cart'
import Login from '@/pages/Login'

export default [
  {
    exect: true,
    path: '/profile',
    component: Profile
  }, {
    exect: true,
    path: '/cart',
    component:  Cart
  }, {
    exect: true,
    path: '/login',
    component: Login
  }, {
    exect: true,
    path: '/',
    component:  Home 
  }
]