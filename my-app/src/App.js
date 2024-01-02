import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import Welcome from './componants/Welcome';
import ClassDemo from './componants/ClassDemo';
import Greeting from './componants/Greeting';
import Table from './componants/Table';

function App() {
  const data = [
    { name: 'Dhoni', Address:'Ranchi' },
    { name: 'kolhi', Address:'Delhi' },
    { name: 'jadeja', Address:'Gujarat' },
  ];
  return (
    <div className="App">
    <h1>Table Example</h1>
    <Table data={data} />
  </div>
  
 
  );
}

export default App;
