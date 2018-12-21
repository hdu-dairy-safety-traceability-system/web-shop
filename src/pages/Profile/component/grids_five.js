import card from '@/assets/icons/card.svg'
import box from '@/assets/icons/box.svg'
import After_Sale from '@/assets/icons/After_Sale.svg'
import message from '@/assets/icons/message.svg'
import Order from '@/assets/icons/Order.svg'

export default [{
  icon: card,
  name: '待付款',
  path: '/unpayed',
}, {
  icon: box,
  name: '待收货',
  path: '/unrecived',
},{
  icon: After_Sale,
  name: '待评价',
  path: '/uncomment',
},{
  icon: message,
  name: '退货/售后',
  path: '#',
},{
  icon: Order,
  name: '我的订单',
  path: '/order',
}]