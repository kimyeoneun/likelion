import React from 'react'
import logo from '../assets/img/logo.png'
import map_icon from '../assets/img/map.png'
import search_icon from '../assets/img/search.png'
import center_icon from '../assets/img/center.png'
import shopping_cart_icon from '../assets/img/shopping_cart.png'

const Nav = () => {
  return (
    <div className="Nav_wrap">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className='Category'>
        <ul>
          <li>WOMEN</li>
          <li>MEN</li>
          <li>KIDS</li>
          <p>ㅣ</p>
          <li>TENNIS</li>
          <li>BRAND</li>
        </ul>
      </div>
      <div className="Option">
        <img src={map_icon} alt="" />
        <img src={search_icon} alt="" />
        <img src={center_icon} alt="" />
        <img src={shopping_cart_icon} alt="" />
      </div>
    </div>
  )
}

export default Nav