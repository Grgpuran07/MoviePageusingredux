import React, { useState } from 'react'
import Image from '../../images/image.png'
import {Link} from "react-router-dom"
import "./Header.scss"
import {FaSearch} from 'react-icons/fa'
import { useDispatch } from 'react-redux/es/exports'
import { fetchAsyncMovies, fetchAsyncSeries } from '../../features/movies/movieSlice'

const Header = () => {
  const [term, setTerm] = useState('')
  const dispatch = useDispatch();
  const submitHandler = (e) =>{
       if(!term){
        alert("Please search something.")
        return 
       }
        e.preventDefault()
        console.log(term)
        dispatch(fetchAsyncMovies(term))
        dispatch(fetchAsyncSeries(term))
        setTerm("")

  }
  return (
    <div className='header'>
        <div className='logo'><Link to="/">Movie App</Link></div>
        <div className='search-bar'>
          <form onSubmit={submitHandler}>
            <input type='text' placeholder="Search Movies or shows" value={term} onChange={(e)=>setTerm(e.target.value)} />
            <button type='submit'><FaSearch/></button>
          </form>
        </div>
        <div className='user-image'>
            <img src={Image} alt=""/>
        </div>
    </div>
  )
}

export default Header