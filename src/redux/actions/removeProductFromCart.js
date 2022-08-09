import { REMOVE_PRODUCT_FROM_CART } from '../constants'

  const removeProductFromCart = (data) => {
  return {type: REMOVE_PRODUCT_FROM_CART, payload: data}
}
export default removeProductFromCart