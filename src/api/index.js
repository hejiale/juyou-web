import Axios from 'axios'

export default {
   /**
   * 角色-查询角色列表-分页
   */
    async roleQueryRolePage (query) {
      return await Axios.post('/role/queryRolePage', query)
    },
}