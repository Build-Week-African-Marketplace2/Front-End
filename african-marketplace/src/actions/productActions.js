import  axiosWithAuth  from "../utils/axiosWithAuth";

export const FETCH_PRODUCTS_START = "FETCH_PRODUCTS_START";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCTS_FAIL = "FETCH_PRODUCTS_FAIL";

export const CREATE_PRODUCT_START = "CREATE_PRODUCT_START";
export const POST_PRODUCT_SUCCESS = "POST_PRODUCT_SUCCESS";
export const POST_PRODUCT_FAIL = "POST_PRODUCT_FAIL";

export const getProducts = () => (dispatch) => {
  dispatch({ type: FETCH_PRODUCTS_START });
  axiosWithAuth()
    .get("https://bw-african-marketplace-lucas.herokuapp.com/api/market/items")
    .then((res) => {
      dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: FETCH_PRODUCTS_FAIL, payload: err.res });
    });
};

export const postProduct = (newProduct) => (dispatch) => {
  dispatch({ type: CREATE_PRODUCT_START });
  axiosWithAuth()
    .post("https://bw-african-marketplace-lucas.herokuapp.com/api/market/items", newProduct)
    .then((res) => {
      dispatch({ type: POST_PRODUCT_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: POST_PRODUCT_FAIL, payload: err.response });
    });
};

export const updateProduct = (newProduct) => (dispatch) => {
  axiosWithAuth()
    .post("https://bw-african-marketplace-lucas.herokuapp.com/api/market/items", newProduct)
    .then((res) => {
      dispatch({ type: POST_PRODUCT_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: POST_PRODUCT_FAIL, payload: err.response });
    });
};