import React, {useState} from 'react'
import styled from 'styled-components';
import { useProductContext } from '../context/Context'; 
import SingleProduct from "./SingleProduct";
import ProductTable from './ProductTable';
import Modal from 'react-modal';
export default function Home() {
    const {allProducts,addProduct} = useProductContext(); 
    const [modal,showModal] = useState(false);
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState(0);
    const [editimage, setImage] = useState("");
    const [Quantity, setQuantity] = useState(0);
    const handleSubmit = (e) => {
        e.preventDefault();
        const newImage = editimage.replace(/^.*\\/,"");
        const addedProduct = {name : productName, price : productPrice,countInStock: Quantity, image:newImage};
        addProduct(addedProduct);
    }
    return (
        <Wrapper>
        <div className ="header">
        <h1>Super Shop</h1>  
                  
        </div> 
        <div className = "buttonContainer"> 
        <button className ="AddProductButton" onClick ={()=>showModal(true)} >Add Product</button> 
        </div> 

        <Modal isOpen={modal}>

        <div> 
        <form>
        <label htmlFor="productName" >Product Name : </label> 
        <input type ="text" id="productName"  value ={productName} onChange={(e)=>setProductName(e.target.value)}  />

        <label htmlFor="productPrice" >Product Price : </label> 
        <input type ="number" id="productPrice"  value ={productPrice} onChange={(e)=>setProductPrice(e.target.value)}  />
         
        <label htmlFor="productQuantity" >Quantity : </label> 
        <input type ="number" id="productQuantity"  value ={Quantity} onChange={(e)=>setQuantity(e.target.value)}  />

        <input type="file" id="avatar" name="avatar" accept="image/*" value={editimage} onChange = {(e)=>setImage(e.target.value)}/>
        <button onClick ={(e)=>handleSubmit(e)}>Submit</button> 
        </form> 
        
             <button onClick={()=>showModal(false)}>Close</button> 
             </div> 
             </Modal>

        {allProducts.length>0 ? 
            <div className ="Card-Container"> 
        {
            allProducts.map((product)=>{
                return (<div>
                    <SingleProduct {...product}/> 
                </div>)
            })
        }
        </div>   
            : <h1>No Product Found</h1>
        }
    
          {allProducts.length> 0?<ProductTable/> :<h1></h1> } 
        
        
        </Wrapper>
    )
}

const Wrapper = styled.div `
 margin : 10px ;

 .Card-Container {
    border: 3px solid #4A403A;
    box-shadow: 1px 1px 10px 3px;
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
 }
h1{
    font-size: 40px;
    color : #4A403A;
}
.header{
    display:flex;
    justify-content : center;
    
}
.AddProductButton { 
    background: brown;
    color:white;
    padding: 10px 30px;
    border-radius: 12px;
    cursor:pointer;
}

.buttonContainer { 
     position:absolute;
     right: 18px;
     top:46px;
      
}
`
