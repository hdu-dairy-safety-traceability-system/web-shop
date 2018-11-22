import Home from '@/pages/Home'
import Profile from '@/pages/Profile'
import Cart from '@/pages/Cart'
import Login from '@/pages/Login'
import Gifts from '@/pages/Gifts'
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
    exact: true,
    path: '/gifts',
    component: Gifts
  }, {
    component: NoMatch,
  }

]