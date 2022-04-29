import React from 'react'
import Header from '../components/Header';
import '../styles/Sub5.scss';

function Sub5() {
  return (
    <div className='sub5'>
      <Header title='5. 빙그레' site='빙그레 바로가기'/>
      <section>
        <dl>
          <dt><img src={require('../images/빙그레mob.png')} alt="cjone mobilesize mockup"/></dt>
          <dd>Mobile</dd>
          <dt><img src={require('../images/빙그레web.png')} alt="cjone websize mockup"/></dt>
          <dd>Web</dd>
          <dt><img src={require('../images/빙그레tab.png')} alt="cjone tabletsize mockup"/></dt>
          <dd>Ipad</dd>
        </dl>
 
      </section>
    </div>
  )
}

export default Sub5