import { POST_PAGINATION_DATA } from '../constants'

// const postPaginationData = (currentPage, totalProducts, pageSize) => {
  const postPaginationData = (data) => {
  return {type: POST_PAGINATION_DATA, payload: data}
}
export default postPaginationData