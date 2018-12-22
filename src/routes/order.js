import PresentIndex from '@/pages/Order/pages/Index'
import PresentPayed from '@/pages/Order/pages/Payed'

export default [
  {
    path: '/payed',
    component: PresentPayed,
  },{
    path: '/',
    exact: true,
    component: PresentIndex,
  }
]