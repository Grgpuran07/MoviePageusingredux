import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import "./App.scss"
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Moviedetail from './components/Moviedetail/Moviedetail'
import Pagenotfound from './components/Pagenotfound/Pagenotfound'

const App = () => {
  return (
    <div className='App'>
        <BrowserRouter>
        <Header/>
          <div className='container'>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/movie/:imdbID' element={<Moviedetail/>}/>
            <Route path="*" element={<Pagenotfound/>}/>
         </Routes>
          </div>
         <Footer/>
        </BrowserRouter>    
     </div>
  )
}

export default App