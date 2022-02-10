import { types } from "../types/types"


export const changeOrder= ( page ) => ({
    type:types.changeOrder,
    payload: page 
})

export const loadProducts = ( products ) => ({
    type:types.loadProductsByClient,
    payload: products 
})

export const addProduct = ( product ) => ({
    type:types.addNewProduct,
    payload: product 
})

export const changeQuantity = ( quantity, id ) => ({
    type:types.changeQuantity,
    payload: { quantity, id } 
})


