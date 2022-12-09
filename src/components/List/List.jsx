import React from 'react'
import './List.scss'
import Card from '../Card/Card'
import { useParams } from 'react-router'

const List = () => {

    

    const data = [
        {
            id:1,
            image1:"https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHdvbWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            image2:"https://images.unsplash.com/photo-1669993427076-3d9acc119413?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            title:"Long Sleeve T-Shirt",
            IsNew:true,
            oldPrice: 19,
            Price:12,
          },
          {
           id:2,
           image1:"https://images.unsplash.com/photo-1593495677707-5b8e095375b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
           image2:"https://images.unsplash.com/photo-1535207010348-71e47296838a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80",
           title:"Long Sleeve T-Shirt",
           IsNew:true,
           oldPrice: 20,
           Price:13,
         },
         {
           id:3,
           image1:"https://images.unsplash.com/photo-1663534253007-822c4c2c52c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
           image2:"https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHdvbWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
           title:"Long Sleeve T-Shirt",
           IsNew:true,
           oldPrice: 21,
           Price:14,
         },
         {
           id:4,
           image1:"https://images.unsplash.com/photo-1669993427076-3d9acc119413?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
           image2:"https://images.unsplash.com/photo-1670151791172-af9ad99c671a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
           title:"Long Sleeve T-Shirt",
           IsNew:true,
           oldPrice: 22,
           Price:15,
         }
    ]
  return (
    <div className='list'> 
    {data.map(item=>(<Card item={item} key={item.id} />))}   
    </div>
  )
}

export default List