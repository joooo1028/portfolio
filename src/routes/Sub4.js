import React from 'react';
import Header from '../components/Header';
import '../styles/Sub4.scss';

function Sub4() {
  return (
    <div className='sub4'>
      <Header title='4. CJ ONE' site='CJ ONE 바로가기'/>
      <section>
        <dl>
          <dt><img src={require('../images/cjonemobMockup.png')} alt="cjone mobilesize mockup"/></dt>
          <dd>Mobile</dd>
          <dt><img src={require('../images/cjonewebMockup.png')} alt="cjone websize mockup"/></dt>
          <dd>Web</dd>
          <dt><img src={require('../images/cjonetabMockup.png')} alt="cjone tabletsize mockup"/></dt>
          <dd>Ipad</dd>
        </dl>
 
      </section>
    </div>
  )
}

export default Sub4