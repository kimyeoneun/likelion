import React from 'react'
import sec1 from '../../assets/img/sec3-1.png'
import sec2 from '../../assets/img/sec3-2.png'
import sec3 from '../../assets/img/sec3-3.png'
import sec4 from '../../assets/img/sec3-4.png'
import sec5 from '../../assets/img/sec3-5.png'
import sec6 from '../../assets/img/sec3-6.jpg'
import sec7 from '../../assets/img/sec3-7.jpg'
import sec8 from '../../assets/img/sec3-8.jpg'
import sec9 from '../../assets/img/sec3-9.png'
import sec10 from '../../assets/img/sec3-10.png'

const Section3 = () => {
  return (
    <div className='Section3_wrap'>
        <p>@fila_korea</p>
        <div className="line1">
          <img src={sec1} alt="" />
          <img src={sec2} alt="" />
          <img src={sec3} alt="" />
          <img src={sec4} alt="" />
          <img src={sec5} alt="" />
        </div>
        <div className="line2">
          <img src={sec6} alt="" />
          <img src={sec7} alt="" />
          <img src={sec8} alt="" />
          <img src={sec9} alt="" />
          <img src={sec10} alt="" />
        </div>
    </div>
  )
}

export default Section3