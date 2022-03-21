import { combineReducers } from "redux";
import { productsReducer, itemReducer,selectedProductsReducer } from "./ProductReducer";


const reducers = combineReducers({
    allproducts:productsReducer,
    selectedItem:itemReducer,
    product: selectedProductsReducer,
})


export default reducers;