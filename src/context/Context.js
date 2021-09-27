import React, {createContext, useContext, useEffect, useReducer}  from "react";
import Reducer from "../reducer/Reducer";
import products from '../products';
import { ADD_PRODUCT, EDIT_PRICE, EDIT_PRODUCT, DELETE_PRODUCT } from "../types";
const productsContext = createContext();

const initialState = {
    allProducts : products,
    editedProduct: {},
    addToCart:[],
    newProduct : {},
}
export const ProductProvider = ({children}) =>{
    const [state,dispatch] = useReducer(Reducer, initialState);

    const editProduct = (editedProduct) =>{
        dispatch({type: EDIT_PRODUCT, payload : editedProduct});
    }

    const addProduct = (addedProduct) =>{
        dispatch({type:ADD_PRODUCT, payload: addedProduct});
    }

    const deleteProduct = (id) =>{
        dispatch({type:DELETE_PRODUCT, payload:id});
    }

    return <productsContext.Provider value = {{...state,editProduct,deleteProduct,addProduct}}>{children}</productsContext.Provider>
}

export const useProductContext = () =>{
    return useContext(productsContext);
}

