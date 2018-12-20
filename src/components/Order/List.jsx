import React, { Fragment,PureComponent } from 'react'


import OrderSingle from './Singel'

const mockData = { 'id': 2, 'name': null, 'title': '乐高积木', 'status': 'draft', 'off': false, 'offcost': 0, 'hot': 180, 'count': 150, 'description': '乐高LEGO方头仔系列迪士尼米奇41624/米妮41625小颗粒积木_41624 米奇', 'starts': 66, 'commentCount': 131, 'originl_price': 0, 'price': 99, 'cover': 'http://img3m5.ddimg.cn/21/4/1212305115-1_h_1.jpg', 'categorystr': 'toy', 'composite': 17, 'saleCount': 89, 'created_at': '2018-12-18T15:03:35.000Z', 'updated_at': '2018-12-18T15:03:35.000Z', 'category_id': null, 'depot_item_id': 2, 'images': ['http://img3m5.ddimg.cn/21/4/1212305115-1_e_1.jpg', 'http://img3m5.ddimg.cn/21/4/1212305115-1_h_1.jpg', 'http://img3m5.ddimg.cn/21/4/1212305115-2_e_1.jpg', 'http://img3m5.ddimg.cn/21/4/1212305115-3_e_1.jpg', 'http://img3m5.ddimg.cn/21/4/1212305115-6_e_1.jpg', 'http://img58.ddimg.cn/99999990003453608.jpg', 'http://img59.ddimg.cn/99999990003453609.jpg', 'http://img50.ddimg.cn/99999990003453610.jpg', 'http://img51.ddimg.cn/99999990003453611.jpg', 'http://img52.ddimg.cn/99999990003453612.jpg'], 'comments': [{ 'id': 1, 'content': '评论，针对于事物进行主观或客观的自我印象阐述。评论易让人听到不利于自己的一面，因此评论的话语容易产生对方的逆反心理。但由于可以较快的表达自己的想法及感受，广为被大众所使用，实则是说者过瘾，听者闹心。', 'stars': 3, 'avatar': 'http://dummyimage.com/750x750/50B347/FFF&text=EasyMock', 'username': '测试1', 'created_at': '2018-12-18T15:03:35.000Z', 'updated_at': '2018-12-18T15:03:35.000Z', 'present_id': 2, 'user_id': 1 }, { 'id': 3, 'content': '评论，针对于事物进行主观或客观的自我印象阐述。评论易让人听到不利于自己的一面，因此评论的话语容易产生对方的逆反心理。但由于可以较快的表达自己的想法及感受，广为被大众所使用，实则是说者过瘾，听者闹心。', 'stars': 1, 'avatar': 'http://dummyimage.com/750x750/50B347/FFF&text=EasyMock', 'username': '测试1', 'created_at': '2018-12-18T15:03:35.000Z', 'updated_at': '2018-12-18T15:03:35.000Z', 'present_id': 2, 'user_id': 1 }, { 'id': 4, 'content': '评论，针对于事物进行主观或客观的自我印象阐述。评论易让人听到不利于自己的一面，因此评论的话语容易产生对方的逆反心理。但由于可以较快的表达自己的想法及感受，广为被大众所使用，实则是说者过瘾，听者闹心。', 'stars': 2, 'avatar': 'http://dummyimage.com/750x750/50B347/FFF&text=EasyMock', 'username': '测试1', 'created_at': '2018-12-18T15:03:35.000Z', 'updated_at': '2018-12-18T15:03:35.000Z', 'present_id': 2, 'user_id': 1 }, { 'id': 5, 'content': '评论，针对于事物进行主观或客观的自我印象阐述。评论易让人听到不利于自己的一面，因此评论的话语容易产生对方的逆反心理。但由于可以较快的表达自己的想法及感受，广为被大众所使用，实则是说者过瘾，听者闹心。', 'stars': 5, 'avatar': 'http://dummyimage.com/750x750/50B347/FFF&text=EasyMock', 'username': '测试1', 'created_at': '2018-12-18T15:03:35.000Z', 'updated_at': '2018-12-18T15:03:35.000Z', 'present_id': 2, 'user_id': 1 }, { 'id': 13, 'content': '评论，针对于事物进行主观或客观的自我印象阐述。评论易让人听到不利于自己的一面，因此评论的话语容易产生对方的逆反心理。但由于可以较快的表达自己的想法及感受，广为被大众所使用，实则是说者过瘾，听者闹心。', 'stars': 4, 'avatar': 'http://dummyimage.com/750x750/50B347/FFF&text=EasyMock', 'username': '测试1', 'created_at': '2018-12-18T15:03:35.000Z', 'updated_at': '2018-12-18T15:03:35.000Z', 'present_id': 2, 'user_id': 1 }, { 'id': 17, 'content': '评论，针对于事物进行主观或客观的自我印象阐述。评论易让人听到不利于自己的一面，因此评论的话语容易产生对方的逆反心理。但由于可以较快的表达自己的想法及感受，广为被大众所使用，实则是说者过瘾，听者闹心。', 'stars': 4, 'avatar': 'http://dummyimage.com/750x750/50B347/FFF&text=EasyMock', 'username': '测试1', 'created_at': '2018-12-18T15:03:35.000Z', 'updated_at': '2018-12-18T15:03:35.000Z', 'present_id': 2, 'user_id': 1 }] }

export default class OrderList extends PureComponent {
  render() {
    const {orderSet} = this.props
    // const orderSet = [[mockData, mockData], [ mockData, mockData, mockData]]
    return (
      <Fragment>

        {orderSet.map( (order,idx) => (<OrderSingle  data={order} key={idx} />) )}
      </Fragment>
    )
  }
}
