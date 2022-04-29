import React, { useState } from 'react';
import Header from '../components/Header';
import '../styles/Sub3.scss';

function Sub3() {
  const[texts,settext] = useState('삼성전기');
  const[imgs, setimg] = useState(require('../images/samsungMockup.png'));
  const[imgsubtitles, setimgsubtitle] = useState('삼성전기pcmockup');
  const change1 = () =>{
    settext('1. W3C유효성검사')
    setimg(require('../images/w3.png'))
    setimgsubtitle('삼성전기 W3C유효성검사결과')
}
    const change2 = () =>{
        settext('2. 웹접근성 검사')
        setimg(require('../images/웹접근성.png'))
        setimgsubtitle('삼성전기 웹접근성결과')
    }
    const change3 = () =>{
        settext('삼성전기')
        setimg(require('../images/samsungMockup.png'))
        setimgsubtitle('삼성전기pcmockup')
    }
    
  
  return (
    <div className='sub3'>
      <Header title='3. 삼성전기' />
      <section>
        <span><img src={imgs} alt={imgsubtitles} /></span>
        <p>{texts}</p>
        <div className='checklist'>
          <ul>
            <li onClick={change3}>삼성전기</li>
            <li onClick={change1}>1. W3C 유효성검사</li>
            <li onClick={change2}>2. 웹 접근성 검사</li>
            <li>삼성전기 보러가기</li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Sub3