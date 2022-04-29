import React from 'react';
import Header from '../components/Header';
import '../styles/Sub7.scss';

function Sub7() {
  return (
    <div className='sub7'>
      <Header title='7. Landing Page' />
      <section>
          <span><img src={require('../images/landdingMockup.png')} alt='imacmockup' /></span>
      </section>
    </div>
  )
}

export default Sub7