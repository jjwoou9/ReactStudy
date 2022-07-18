import React from 'react'
import './App.css';
import {Routes, Route } from 'react-router-dom';
import Heading from "./Component/Heading"
import List from "./Component/Post/List"
import Upload from "./Component/Post/Upload"
import Detail  from './Component/Post/Detail';
import Edit from './Component/Post/Edit';

function App() {    
  return (
    <>
      <Heading />
      <Routes>
        <Route path="/" element= { <List />} />
        <Route path="/Upload" element= { <Upload />} />
        <Route path="/post/:postNum" element= { <Detail />} />
        <Route path="/edit/:postNum" element= { <Edit />} />
      </Routes>
    </>
  );
}

export default App;
