import React from 'react'
import logo_black from '../assets/img/logo_black.png'
import footer from '../assets/img/footer.png'

const Footer = () => {
  return (
    <div className='Footer_wrap'>
      <div className="logo_black">
        <img src={logo_black} alt="" />
      </div>
      <div className="footer">
        <img src={footer} alt="" />
      </div>
    </div>
  )
}

export default Footer