import React, {useState} from 'react'
import styled from 'styled-components'
import Modal from 'react-modal';
import { useProductContext } from '../context/Context';
export default function SingleProduct({image,name, price,id}) {
    const [editModal, setEditModal] = useState(false);
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState(0);
    const [Quantity, setQuantity] = useState(0);
    const [editimage, setImage] = useState("");
    const {editProduct, deleteProduct} = useProductContext();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const newEditImage = editimage.replace(/^.*\\/,"");
        const editedProduct = {id,name : productName, price : productPrice, countInStock: Quantity,image:newEditImage};
        editProduct(editedProduct);
    }

    return (
        <Card>
            <div className="image-style">
            <img src ={image}/>
            </div>
            <div className ="textStyle">
            <h4>{name}</h4> 
            <h4>{price}</h4>
            </div> 
            <div className = "Stylebutton">
             <button onClick = {()=>setEditModal(true)}>Edit</button> 
             <button onClick={()=>deleteProduct(id)}>Delete</button> 
            </div> 
            <Modal isOpen={editModal}>

            <div className = "formDesign"> 
            <form>
            <label htmlFor="productName" >Product Name : </label> 
            <input type ="text" id="productName"  value ={productName} onChange={(e)=>setProductName(e.target.value)}  />

            <label htmlFor="productPrice" >Product Name : </label> 
            <input type ="number" id="productPrice"  value ={productPrice} onChange={(e)=>setProductPrice(e.target.value)}  />
             
            <label htmlFor="productInStock" >Quantity : </label> 
            <input type ="number" id="producInStock"  value ={Quantity} onChange={(e)=>setQuantity(e.target.value)}  />

            <input type="file" id="avatar" name="avatar" accept="image/*" value={editimage} onChange = {(e)=>setImage(e.target.value)}/>
            <button onClick ={(e)=>handleSubmit(e)}>Submit</button> 
            </form> 
            
                 <button onClick={()=>setEditModal(false)}>Close</button> 
                 </div> 
                 </Modal>
        
        
        </Card>
    )
}

const Card = styled.div`
    border: 2px solid #4A403A;
    width:25vw;
    height: 50vh;
    margin: 10px 20px;
    .image-style { 
        display:flex;
        align-items:center;
        justify-content:center;
        margin: 20px 0px;
    }
    .image-style img{ 
        width:200px;
        height:200px;
       
    }
    
.textStyle { 
    display:flex;
    flex-direction : column;
    justify-content: center;
    align-items:center;
}
.textStyle h4{ 
    margin: 10px;
    font-size: 15px;
}

.Stylebutton{ 
    display : flex;
    justify-content:space-around;
    margin: 15px 0px;
   
}

.Stylebutton button { 
    padding : 5px 20px;
    color: white;
    background :brown;
    border-radius : 12px;
    cursor:pointer;
}

.formDesign{ 
    display : flex;
    flex-direction : column;
    border: 2px solid red;
}

.formDesign input { 
    margin : 20px;
}
`
