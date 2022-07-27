import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchAsyncMovies, fetchAsyncSeries } from '../../features/movies/movieSlice'
import Movielisting from '../Movielisting/Movielisting'

const Home = () => {
    const movieText = "Harry"
    const showText = "Friends"
    const dispatch = useDispatch()
    useEffect(()=>{
         dispatch(fetchAsyncMovies(movieText))
         dispatch(fetchAsyncSeries(showText))
    },[dispatch])
  return (
    <div>
        <div className='banner-img'>
        </div>
        <Movielisting/>
    </div>
  )
}

export default Home