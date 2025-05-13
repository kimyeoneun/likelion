import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './style.css'

const App = () => {
  const [dustData, setDustData] = useState([]);

  useEffect(() => {
    const fetchDust = async () => {
      try {
        const response = await axios.get(
          "https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty",
          {
            params: {
              serviceKey: "4tJdYPemoF26TyUO8Sto/kqCcQ1DCDFaaaJ21hBK7vlEgO/l+dlCsh0R2t53LaNmj8FqA0rtOxOGJMJuuSUPMg==",
              returnType: "json",
              sidoName: "서울",
              numOfRows: 10,
              pageNo: 1,
              ver: "1.0"
            }
          }
        );
        
    
        console.log("응답 데이터: ", response.data);
    
        if (response.data && response.data.response && response.data.response.body) {
          const items = response.data.response.body.items;
          setDustData(items);
        } else {
          console.error("응답 형식 오류");
        }
    
      } catch (error) {
        console.error("API 호출 실패", error);
      }
    };
    
    fetchDust();
  }, []);

  return (
    <div>
      <h1>서울 미세먼지 정보</h1>
      {dustData.length > 0 ? (
        <ul>
          {dustData.map((item, index) => (
            <li key={index}>
              📍 <strong>{item.stationName}</strong> 측정소 - PM10: {item.pm10Value} / PM2.5: {item.pm25Value}
            </li>
          ))}
        </ul>
      ) : (
        <p>데이터 불러오는 중...</p>
      )}
    </div>
  );
};

export default App;
