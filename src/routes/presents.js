import PresentIndex from '@/pages/Presents/pages/Home'
import PresentDetail from '@/pages/Presents/pages/Detail'

export default [
  {
    path: '/:id',
    component: PresentDetail,
  },{
    path: '/',
    exact: true,
    component: PresentIndex,
  }
]