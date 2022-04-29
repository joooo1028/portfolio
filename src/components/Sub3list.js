import React, { useState } from 'react'

function Sub3list() {
    const[texts,settext] = useState('1. W3C유효성검사');
    const changetexts = () =>{
        settext('2. 웹접근성 검사')
    }
  return (
    <div className='Sub3list'>
        <p></p>
    </div>
  )
}

export default Sub3list