import React from 'react'
import './App.css'
import Messenger from './Messenger'
import Middlebar from './Middlebar'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Story from './Story'

function App() {
  return (
    <div className="Facebook">
     <Navbar/>
     <div className='middlecontent'>

     <Sidebar/>

     <Middlebar/>
     <Messenger/>
     </div>
    </div>
  );
}

export default App;
