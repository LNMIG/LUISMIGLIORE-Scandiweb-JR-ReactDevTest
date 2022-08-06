import { 
    GET_ALL_CURRENCIES,
    GET_ALL_CATEGORIES,
    GET_PRODUCT_BY_ID,
    GET_PRODUCTS_BY_CATEGORY,
    GET_PAGINATION_DATA,
    POST_CURRENT_CATEGORY,
    POST_CURRENT_SELECTED_PRODUCTS,
    POST_CURRENT_SELECTED_CURRENCY,
    CLEAR_PRODUCT_DETAILS,
} from '../constants'

const initialState = {
    allCategories: [],
    allCurrencies: [],
    productsByCategory: [],
    paginationData: {},
    productDetails: {},
    postedCurrentCategory: {},
    postedCurrentCurrency: [],
}

function reducer (state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCTS_BY_CATEGORY:
        return {
        ...state,
        productsByCategory: action.payload
        }
        case GET_ALL_CURRENCIES:
        return {
        ...state,
        allCurrencies: action.payload
        }
        case GET_ALL_CATEGORIES:
        return {
        ...state,
        allCategories: action.payload
        }
        case GET_PRODUCT_BY_ID:
        return {
        ...state,
        productDetails: action.payload
        }
        case CLEAR_PRODUCT_DETAILS:
        return {
            ...state,
            productDetails: action.payload
        }
        case GET_PAGINATION_DATA:
        return {
        ...state,
        paginationData: action.payload
        }
        case POST_CURRENT_CATEGORY:
        return {
        ...state,
        postedCurrentCategory: action.payload
        }
        case POST_CURRENT_SELECTED_PRODUCTS:
        return {
        ...state,
        productsByCategory: action.payload
        }
        case POST_CURRENT_SELECTED_CURRENCY:
        return {
        ...state,
        postedCurrentCurrency: action.payload
        }
        default:
        return state;
    }
}
export default reducer;