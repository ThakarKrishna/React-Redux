import { combineReducers } from "redux";
import { productsReducer } from "./ProductReducer";
import {selectedProductsReducer} from "./ProductReducer";


const reducers = combineReducers({
    allproducts:productsReducer,
    product: selectedProductsReducer,
})


export default reducers;