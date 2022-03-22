import { actionTypes } from "../constants/actions-type";


 export const setProducts  = (products) =>{
    return{
        type:actionTypes.SET_PRODUCTS,
        payload:products,
    }
};

export const selectedProduct = (product) =>{
    return{
        type:actionTypes.SELECTED_PRODUCTES,
        payload:product,
    }
};

export const removeSelectedProduct =() =>{
    return{
        type:actionTypes.REMOVE_SELECTED_PRODUCTS
    }
}


export const addCart = (data)=>{
    return{
        type:"ADD_ITEM",
        payload:data
    }

}

export const delCart = (data) =>{
    return{
        type:"DEL_ITEM",
        payload:data
    }
}