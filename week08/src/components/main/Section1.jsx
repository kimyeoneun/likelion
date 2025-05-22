import React, { useEffect, useRef, useState } from 'react'
import main1 from '../../assets/img/main1.png'
import main2 from '../../assets/img/main2.png'
import main3 from '../../assets/img/main3.png'
import main4 from '../../assets/img/main4.png'
import main5 from '../../assets/img/main5.png'
import item1 from '../../assets/img/popular1.png'
import item2 from '../../assets/img/popular2.png'
import item3 from '../../assets/img/popular3.png'
import item4 from '../../assets/img/popular4.png'
import item5 from '../../assets/img/popular5.png'
import item6 from '../../assets/img/popular6.png'
import item7 from '../../assets/img/popular7.png'
import heart from '../../assets/img/heart.png'

const Section1 = () => {
  const [activeTag, setActiveTag] = useState(null);
  const tagList = ['# 냉감티셔츠', '# 에샤페', '# 반팔티셔츠', '# 페이토&샌들', '# 인터런'];

  const itemListRef = useRef(null);

  useEffect(() => {
    const el = itemListRef.current;
    if (!el) return;

    const handleScroll = (e) => {
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    };

    el.addEventListener('wheel', handleScroll);

    return () => el.removeEventListener('wheel', handleScroll);
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const mainImages = [main1, main2, main3, main4, main5];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % mainImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="Section1_wrap">
      <div className="main">
        <img src={mainImages[currentIndex]} alt="" />
      </div>
      <div className="popular">
        <h1>지금 많이 찾는 상품</h1>
        <div className="option">
          {tagList.map((tag, index) => (
            <p
              key={index}
              className={activeTag === tag ? 'active' : ''}
              onClick={() => setActiveTag(tag)}
            >
              {tag}
            </p>
          ))}
        </div>
      </div>
      <div className="item_list" ref={itemListRef}>
        <div className="item1">
          <img src={item1} alt="" />
          <div className="name">
            <p>공용 컴포트핏 라이프스타일</p>
            <h2>&lt;COLD WAVE&gt; 그래픽 프린트 냉감 티셔츠</h2>
            <div className="under">
              <h3>49,000원</h3>
              <img src={heart} alt="" />
            </div>
          </div>
        </div>
        <div className="item2"><img src={item2} alt="" /><div className="name"><p>공용 컴포트핏 라이프스타일</p><h2>&lt;COLD WAVE&gt; 그래픽 프린트 냉감 티셔츠</h2><div className="under"><h3>49,000원</h3><img src={heart} alt="" /></div></div></div>
        <div className="item3"><img src={item3} alt="" /><div className="name"><p>공용 컴포트핏 라이프스타일</p><h2>&lt;COLD WAVE&gt; 그래픽 프린트 냉감 티셔츠</h2><div className="under"><h3>49,000원</h3><img src={heart} alt="" /></div></div></div>
        <div className="item4"><img src={item4} alt="" /><div className="name"><p>공용 컴포트핏 라이프스타일</p><h2>&lt;COLD WAVE&gt; 그래픽 프린트 냉감 티셔츠</h2><div className="under"><h3>49,000원</h3><img src={heart} alt="" /></div></div></div>
        <div className="item5"><img src={item5} alt="" /><div className="name"><p>공용 컴포트핏 라이프스타일</p><h2>&lt;COLD WAVE&gt; 그래픽 프린트 냉감 티셔츠</h2><div className="under"><h3>49,000원</h3><img src={heart} alt="" /></div></div></div>
        <div className="item6"><img src={item6} alt="" /><div className="name"><p>공용 컴포트핏 라이프스타일</p><h2>&lt;COLD WAVE&gt; 그래픽 프린트 냉감 티셔츠</h2><div className="under"><h3>49,000원</h3><img src={heart} alt="" /></div></div></div>
        <div className="item7"><img src={item7} alt="" /><div className="name"><p>공용 컴포트핏 라이프스타일</p><h2>&lt;COLD WAVE&gt; 그래픽 프린트 냉감 티셔츠</h2><div className="under"><h3>49,000원</h3><img src={heart} alt="" /></div></div></div>
      </div>
    </div>
  )
}

export default Section1