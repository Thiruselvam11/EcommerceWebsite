import React from 'react'
import {Link} from 'react-router-dom'
import './Card.scss'

const Card = ({item}) => {
  return (
      <Link className='link' to={`/product/${item.id}`}>
      <div className='card'>
          <div className="image">
              {item.isNew && <span>New Season</span>}
              <img src={item.image1} alt="" className="mainImg" />
              <img src={item.image2 } alt="" className="secondImg" />
              <h2>{item.title}</h2>
              <div className="prices">
                  <h3>${item.oldPrice}</h3>
                  <h3>${item.Price}</h3>
              </div>
          </div>
      </div>
      </Link>
    
  )
}

export default Card