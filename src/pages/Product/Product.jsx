import React, { useState } from 'react'
import './Product.scss'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import NextWeekIcon from '@mui/icons-material/NextWeek';

const Product = () => {

  const[selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1)
  const images =[
    "https://images.unsplash.com/photo-1661956601030-fdfb9c7e9e2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=742&q=80",
    "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
  ];
  return (

     
    <div className='product'>
        <div className="left">
          <div className="images">
          <img src={images[0]} alt="" onClick={()=>setSelectedImg(0)} />
          <img src={images[1]} alt="" onClick={()=>setSelectedImg(1)} />
          </div>
          <div className="mainImg">
            <img src={images[selectedImg]} alt="" />
          </div>
        </div>
        <div className="right">
         <h1>Title</h1>
         <span>$199</span>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus aliquid ipsum et similique modi optio asperiores sed quas quidem aperiam adipisci mollitia quos, sunt, alias, sapiente ducimus dignissimos a numquam.</p>
         <div className="quantity">
           <button onClick={() => setQuantity(prev => prev+1)}>+</button>
           {quantity}
           <button onClick={() => setQuantity(prev => prev===1 ? 1 : prev-1) }>-</button>
         </div>
         <button className="add">
           <AddShoppingCartIcon /> ADD TO CART
         </button>
         <div className="link">
           <div className="item">
             <ThumbUpOffAltIcon /> ADD TO WISH LIST
           </div>
           <div className="item">
             <NextWeekIcon /> ADD TO COMPARE
           </div>
         </div>
        </div>
    </div>
  )
  
}

export default Product