import React from 'react'
import Header from './Components/Header.jsx';
import Toggle from './Components/Toggle.jsx';
import Left from './Components/Left.jsx';
import Toolbar from './Components/Toolbar.jsx';


function App() {
  
  return (
    
    <div className=' flex  border rounded-lg   m-12 shadow-xl   flex-col'>
    <Header></Header>
    <div className='flex '>
    <Left/>
    <span className='border-r h-screen  border-gray-300'></span>
    <Toolbar/>
    </div>
          </div>
         
 
  )
}

export default App
