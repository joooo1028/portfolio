import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Main from './routes/Main';
import Sub2 from './routes/Sub2';
import Sub3 from './routes/Sub3';
import Sub4 from './routes/Sub4';
import Sub5 from './routes/Sub5';
import Sub6 from './routes/Sub6';
import Sub7 from './routes/Sub7';
import Sub8 from './routes/Sub8';
import Sub9 from './routes/Sub9';
import Contact from './routes/Contact';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/sub2' element={<Sub2 />} />
      <Route path='/sub3' element={<Sub3 />} />
      <Route path='/sub4' element={<Sub4 />} />
      <Route path='/sub5' element={<Sub5 />} />
      <Route path='/sub6' element={<Sub6 />} />
      <Route path='/sub7' element={<Sub7 />} />
      <Route path='/sub8' element={<Sub8 />} />
      <Route path='/sub9' element={<Sub9 />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
