import React from 'react'
import styled from 'styled-components';
import {useProductContext} from '../context/Context';
export default function ProductTable() {
    const {allProducts,deleteProduct} = useProductContext();
    return (
        <Wrapper>
        <table className="StyleTable">
        <tr>
          <th>Product Name</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Total</th>
          <th>Action</th>
        </tr>
        {allProducts.map((product)=>{
           return  (
               <tr>
            <td>{product.name}</td>
            <td>{product.countInStock}</td> 
            <td>{product.price}</td>
            <td>{product.price*product.countInStock}</td>
            <td> <button onClick={()=>deleteProduct(product.id)}>Remove</button></td>
          </tr>
          )
        })}
        
      </table>
        </Wrapper>
    )
}

const Wrapper = styled.div`
display:flex;
align-items:center;
justify-content:center;
margin-top:40px;
.StyleTable{ 
    border:1px solid black;
    width:80%;
}
.StyleTable th{ 
    border:1px solid black;
    padding:10px 20px;
    
}
.StyleTable tr{ 
    border:1px solid black;
    width:100%;
}
.StyleTable td{ 
    border:1px solid black;
    width:100%;
    padding:5px 30px;
}
.StyleTable button{
    color:white;
    background:brown;
    border-radius: 12px;
    padding:5px 15px;
}
`