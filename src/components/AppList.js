import React, { useEffect, useState } from 'react'

function AppList() {
    const [toggles, settoggle] = useState(false);
    const toggleclass = () =>{
        settoggle(!toggles);
    }
    const appmenus = ['스플래쉬','로그인','메뉴','레시피목록','상세페이지','마이페이지','관심목록','문의하기']
    const appmenulist = appmenus.map((appmenu, index) => 
    <li key={index} className={toggles ? 'on' : null} onClick={toggleclass}>{appmenu}</li>)
  return (
    <ul className='app_menu'>{appmenulist}</ul>
  )
}

export default AppList