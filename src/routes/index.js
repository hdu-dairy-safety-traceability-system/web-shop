import Home from '@/pages/Home'
import Profile from '@/pages/Profile'
import Cart from '@/pages/Cart'
import Login from '@/pages/Login'
import Presents from '@/pages/Presents'
import Order from '@/pages/Order'
import NoMatch from '@/pages/Error/NoMatch'
export default [
  {
    exact: true,
    path: '/',
    component: Home
  }, {
    exact: true,
    path: '/profile',
    component: Profile
  }, {
    exact: true,
    path: '/cart',
    component: Cart
  }, {
    exact: true,
    path: '/login',
    component: Login
  }, {
    path: '/presents',
    component: Presents
  }, {
    path: '/order',
    component: Order
  }, {
    component: NoMatch,
  }

]