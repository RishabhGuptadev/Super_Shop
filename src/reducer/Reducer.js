import React from 'react'
import { ADD_PRODUCT, EDIT_PRODUCT,EDIT_PRICE, DELETE_PRODUCT } from '../types'

export default function Reducer(state, action) {
    if(action.type === EDIT_PRODUCT){
        state.allProducts.splice(action.payload.id, 1);
        state.allProducts.splice(action.payload.id, 0, action.payload);
        return {...state,  editedProduct: state.allProducts}
    }

    if(action.type === DELETE_PRODUCT){
        const newProducts = state.allProducts.filter((product)=>product.id !== action.payload);
        console.log(newProducts);
        return {...state, allProducts: newProducts}
    }

    if(action.type === ADD_PRODUCT) { 
        state.allProducts.splice(state.allProducts.length, 0, action.payload)
        return {...state, allProducts : state.allProducts}
    }
    else return {...state}
}
