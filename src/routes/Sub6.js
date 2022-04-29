import React, { useEffect, useState } from 'react';
import AppList from '../components/AppList';
import Header from '../components/Header';
import '../styles/Sub6.scss';


function Sub6() {
  const [toggles, settoggle] = useState(false);
  const toggleclass = () =>{
    settoggle(!toggles);
  }

  return (
    <div className='sub6'>
      <Header title='6. AppDesign & Codding' site='앱 보러가기'/>
      <section>
        <div className='app_slide'>
          <span className='mockup'><img src={require('../images/iPhonemockup.png')} alt='' /></span>
          <ul className='screen'>
            <li><img src={require('../images/appmain.png')} alt='스플래쉬' /></li>
            <li ><img src={require('../images/applogin.png')} alt='로그인' /></li>
            <li><img src={require('../images/appmenu.png')} alt='메뉴' /></li>
            <li><img src={require('../images/apprecipemenu.png')} alt='레시피목록' /></li>
            <li><img src={require('../images/appdetailpage.png')} alt='상세페이지' /></li>
            <li><img src={require('../images/appmypage.png')} alt='마이페이지' /></li>
            <li><img src={require('../images/applikelist.png')} alt='관심목록' /></li>
            <li><img src={require('../images/appchat.png')} alt='문의하기' /></li>
          </ul>
        </div>
        <AppList />
      </section>
    </div>
  )
}

export default Sub6