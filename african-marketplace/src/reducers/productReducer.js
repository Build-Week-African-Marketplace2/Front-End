import {
    FETCH_PRODUCTS_START,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAIL,
    CREATE_PRODUCT_START,
    POST_PRODUCT_SUCCESS,
    POST_PRODUCT_FAIL,
  } from "../actions/productActions";
  
  const initialState = {
    products: [],
    fetchingProducts: false,
    error: "",
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_PRODUCTS_START:
        return {
          ...state,
          fetchingProduct: true,
        };
  
      case FETCH_PRODUCTS_SUCCESS:
        return {
          ...state,
          products: action.payload,
          fetchingProducts: true,
          error: "",
        };
  
      case FETCH_PRODUCTS_FAIL:
        return {
          ...state,
          fetchingProducts: false,
          error: action.payload,
        };

        case CREATE_PRODUCT_START:
      return {
        ...state,
        isFetching: true,
        error: null
      };
  
      case POST_PRODUCT_SUCCESS:
        return {
          products: [...state, action.payload],
          error: null
      };
  
      case POST_PRODUCT_FAIL:
        return {
          ...state,
        products: [],
        error: action.payload
        };
  
      default:
        return state;
    }
  };
  
  export default reducer;