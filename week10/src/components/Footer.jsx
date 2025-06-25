import React from 'react'
import twitter from '../../src/assets/img/Footer/Twitter.png'
import insta from '../../src/assets/img/Footer/Insta.png'
import youtube from '../../src/assets/img/Footer/YouTube.png'
import line from '../../src/assets/img/Homepage/line.png'

const Footer = () => {
  return (
    <div>
      <div className="Footer_wrap">
        <div className="footer">
          <div className="link">
            <img src={twitter} alt="" />
            <img src={insta} alt="" />
            <img src={youtube} alt="" />
          </div>
          <div className="line">
            <img src={line} alt="" />
          </div>
          <p>support@openui.design</p>
          <p>+60 825 876</p>
          <p>08:00 - 22:00 - Everyday</p>
          <div className="line">
            <img src={line} alt="" />
          </div>
          <div className="more">
            <div className="about">About</div>
            <div className="contact">Contact</div>
            <div className="blog">Blog</div>
          </div>
          <div className="copyright">Copyright© OpenUI All Rights Reserved.</div>
        </div>
      </div>
    </div>
  )
}

export default Footer