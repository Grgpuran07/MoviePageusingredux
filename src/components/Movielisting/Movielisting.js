import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies, getAllShows } from '../../features/movies/movieSlice'
import Moviecard from '../Moviecard/Moviecard'
import "./Movielisting.scss"
import Slider from 'react-slick'
import { settings } from '../../common/settings'

const Movielisting = () => {
    const movies = useSelector(getAllMovies)
    const shows = useSelector(getAllShows)
    console.log(movies)
    let renderMovies,renderShows = "";
    

    renderMovies = movies.Response === "True" ? (movies.Search.map((movie,index)=>{
           return <Moviecard key={index} data={movie}/>
    })) : (<div className="movies-error"><h3>{movies.Error}</h3></div>)
    // console.log(movies.Search)
    // console.log(renderMovies)

    renderShows = shows.Response === "True" ? (shows.Search.map((movie,index)=>{
        return <Moviecard key={index} data={movie}/>
    })) : (<div className="movies-error"><h3>{movies.Error}</h3></div>)
    // console.log(movies.Search)
    //  console.log(renderShows)
     
     
  return (
    <> 
    <div className='movie-wrapper'>
        <div className='movie-list'>
             <h2>Movies</h2>
             <div className='movie-container'>
             {
              Object.keys(renderMovies).length === 0 ? (<div>....Loading</div>) : (<Slider {...settings}>
                {renderMovies}
                </Slider>)
             }
             </div>
        </div>
        <div className='movie-list'>
             <h2>Shows</h2>
             <div className='movie-container'>
             <Slider {...settings}>
               {renderShows}
               </Slider>
             </div>
        </div>
    </div>
    </>
  )
}

export default Movielisting