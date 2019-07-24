import React from 'react';

import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import CheckBoxSimple from './components/CheckBoxSimple'

import { listData } from "./listData";

function App() {

  const studentItemComponent = listData.map( 
    student => 
    <CheckBoxSimple  
      name = {student.nameOfStudent}
      regno = {student.regNo}
      deptname = {student.departmentName}/>)

  return (
    <div>
      <Header />
      <MainContent />
      {studentItemComponent}
      <Footer />
    </div>
  );
}

export default App;
