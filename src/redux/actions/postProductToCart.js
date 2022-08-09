import { POST_PRODUCT_TO_CART } from '../constants'

  const postProductToCart = (data) => {
  return {type: POST_PRODUCT_TO_CART, payload: data}
}
export default postProductToCart