import Axios from 'utils/Axios'

const apiUrl = {
  customerManage: '/api/custom/getAllCustomInfo'
}

const customerManage = (params: object) =>
  Axios.getInstance().get(apiUrl.customerManage, { params })

export default {
  customerManage
}
