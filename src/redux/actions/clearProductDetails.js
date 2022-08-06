import { CLEAR_PRODUCT_DETAILS } from '../constants'

const clearProductDetails = () => {
  return {type: CLEAR_PRODUCT_DETAILS, payload: {}}
}
export default clearProductDetails