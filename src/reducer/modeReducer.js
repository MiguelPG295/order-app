import { types } from "../types/types";

const initialState = {
    products: [],
}


export const Reducer = (state = initialState, action ) => {

    switch ( action.type ) {
        case types.loadProductsByClient:
            return {
                ...state,
                products:  [...action.payload]
            }
        
        case types.addNewProduct:
            let newProducts = [ ...state.products ]

            const found = state.products.find(element => element.sku === action.payload.sku )

            if ( found === undefined ) {
                newProducts.push( action.payload )
            }

            return{
                ...state,
                products:  [...newProducts ]
            }
        case types.changeQuantity:

            let newQuantity = [ ...state.products ]
            newQuantity[ action.payload.id ].quantity = action.payload.quantity
            
            return{
                ...state,
                products:  [...newQuantity ]
            }

        default:
            return state;
    }

}