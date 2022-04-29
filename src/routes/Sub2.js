import React from 'react';
import '../styles/Sub2.scss';
import Header from '../components/Header';

function Sub2() {
  return (
    <div className='sub2'>
      <Header title='2. Skill & Profile' />
        <section className='skill'>
        <span className='pin'><img src={require('../images/핀.png')} alt='profile 열기' /></span>
          <ul className='skill_level'>
            <li>HTML <span></span><span>90%</span></li>
            <li>CSS <span></span><span>80%</span></li>
            <li>JQuery <span></span><span>70%</span></li>
            <li>Javascript <span></span><span>70%</span></li>
            <li>React <span></span><span>70%</span></li>
          </ul>
          <div className='profile'>
            <h3>About Me</h3>
            <ul>
              <li>Name: <span>서경주</span></li>
              <li>Education: <span>동명대학교 의용공학과 졸업<br/>
                  이젠아카데미 - [스마트웹&콘텐츠개발]<br/>
                  웹콘텐츠UIUX디자인 & 프론트엔드(React.js) 수료</span></li>
            </ul>
            <q>프론트엔드 개발자를 꿈꾸고 있습니다!</q>
          </div>
        </section>     
    </div>
  )
}

export default Sub2