import "./Moviedetail.scss"
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { fetchAsyncMovieorShowDetail,getSelectedMovieorShow, removeSelectedMovieorShow} from '../../features/movies/movieSlice'
import { FaStar,FaRegThumbsUp,FaFilm,FaCalendarAlt} from "react-icons/fa"

const Moviedetail = () => {
  const {imdbID} = useParams()
  const dispatch = useDispatch()
   
  useEffect(()=>{
        dispatch(fetchAsyncMovieorShowDetail(imdbID))
        return (()=>{
          dispatch(removeSelectedMovieorShow())
        })
  },[dispatch,imdbID])
 

  const data = useSelector(getSelectedMovieorShow)
 console.log(data)
  return (
    <div className='movie-section'>
      {Object.keys(data).length === 0 ? (<div>....Loading</div>) : ( 
      <> 
      <div className='section-left'>
        <div className='movie-title'>{data.Title}</div>
        <div className='movie-rating'>
          <span>IMDB rating <FaStar className="fa-star"/>:{data.imdbRating}</span>
          <span>IMDB Votes <FaRegThumbsUp className="fa-thumbs-up"/>:{data.imdbVotes}</span>
          <span>Runtime <FaFilm className="fa-film"/>:{data.Runtime}</span>
           <span>Year <FaCalendarAlt className="fa-calender"/>:{data.Year}</span> 
        </div>
        <div className='movie-plot'>{data.Plot}</div>
       <div className='movie-info'>
        <div>
          <span>Director</span>
          <span>{data.Director}</span>
        </div>
        <div>
          <span>Stars</span>
          <span>{data.Actors}</span>
        </div>
        <div>
          <span>Geners</span>
          <span>{data.Genre}</span>
        </div>
        <div>
          <span>Languages</span>
          <span>{data.Director}</span>
        </div>
        <div>
          <span>Awards</span>
          <span>{data.Awards}</span>
        </div>
      </div>
    </div>
    <div className='section-right'>
      <img src={data.Poster} alt={data.Title} />
    </div>
    </>)}
  </div>
  )
}

export default Moviedetail