import React from 'react'
import './Categories.scss'
import {Link} from 'react-router-dom'

const Categories = () => {
  return (
    <div className='categories'>
        <div className="col">
            <div className="row">
            <img src="https://images.unsplash.com/photo-1582079767981-78d3a3178a41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
            <button >
                <Link className="link" to="/products/1">Sale</Link>
            </button>
            </div>
            <div className="row">
            <img src="https://images.unsplash.com/photo-1500602517813-4142fef80b29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80" alt="" />
            <button >
                <Link className="link" to="/products/1">Women</Link>
            </button>
            </div>
        </div>
        <div className="col">
            <div className="row">
                <img src="https://images.unsplash.com/photo-1492447273231-0f8fecec1e3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
            <button >
                <Link className="link" to="/products/1">Men</Link>
            </button></div>
        </div>
        <div className="col col-l">
            <div className="row">
                <div className="col">
                    <div className="row">
                    <img src="https://images.unsplash.com/photo-1491308056676-205b7c9a7dc1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80" alt="" />
            <button >
                <Link className="link" to="/products/1">Children</Link>
            </button>
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                    <img src="https://images.unsplash.com/photo-1550246140-5119ae4790b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
            <button >
                <Link className="link" to="/products/1">Fashion</Link>
            </button>
                    </div>
                </div>
            </div>
            <div className="row">
            <img src="https://images.unsplash.com/photo-1550246140-480ae9bf13c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
            <button >
                <Link className="link" to="/products/1">Men</Link>
            </button>
            </div>
        </div>
    </div>
  )
}

export default Categories