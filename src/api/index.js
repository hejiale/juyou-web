import Axios from 'axios'

export default {
   /**
   * 官网商品购买
   */
  async payBuyProductWithHome (query) {
    return await Axios.post('/pay/buyProductWithHome', query)
  },
  /**
   * 用户-用户查询通过手机
   */
  async userGetUserByPhone (query) {
    return await Axios.post('/user/getUserByPhone', query)
  }
}