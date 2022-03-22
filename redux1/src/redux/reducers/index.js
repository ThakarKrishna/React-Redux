import { combineReducers } from "redux";
import { productsReducer,selectedProductsReducer, categoryFilterReducer } from "./ProductReducer";
import { handleCart } from "./ProductReducer";

const reducers = combineReducers({
    allproducts:productsReducer,
    product: selectedProductsReducer,
    handleCart,
})


export default reducers;