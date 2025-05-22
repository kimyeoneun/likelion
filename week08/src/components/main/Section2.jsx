import React from 'react'
import pic1 from '../../assets/img/section2_1.png'
import pic2 from '../../assets/img/section2_2.png'

const Section2 = () => {
  return (
    <div className='Section2_wrap'>
      <h1>기획전</h1>
      <div className="work">
        <div className="left">
          <img src={pic1} alt="" />
          <p>FILA CUSTOM STUDIO</p>
          <div className="see_more">자세히 보기</div>
        </div>
        <div className="right">
          <img src={pic2} alt="" />
          <p>Pertex LIfe</p>
          <div className="see_more">자세히 보기</div>
        </div>
      </div>
    </div>
  )
}

export default Section2