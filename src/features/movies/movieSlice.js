import { createSlice,createAsyncThunk } from "@reduxjs/toolkit"
import { APIkey } from '../../common/apis/MovieApiKey'
import movieApi from '../../common/apis/movieApi'

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies',async(term)=>{
    const response = await movieApi.get(`?apikey=${APIkey}&s=${term}&type=movie`)
    return response.data
})

export const fetchAsyncSeries = createAsyncThunk('movies/fetchAsyncSeries',async(term)=>{
    const response = await movieApi.get(`?apikey=${APIkey}&s=${term}&type=series`)
    return response.data
})

export const fetchAsyncMovieorShowDetail = createAsyncThunk('movies/fetchAsyncMovieorShowDetail',
    async(id)=>{
    const response = await movieApi.get(`?apikey=${APIkey}&i=${id}&Plot=full`)
    return response.data
})

const initialState = {
    movies:{},
    shows:{},
    movieorshowdetail:{}
}

const movieSlice = createSlice({
    name:"movies",
    initialState,
    reducers:{
        // addMovies:(state,{payload})=>{
        //     state.movies = payload
        // },
        removeSelectedMovieorShow:(state)=>{
            state.movieorshowdetail = {}
        }
    },
    extraReducers:{
        [fetchAsyncMovies.pending]:()=>{
            console.log("Pending")
        },
        [fetchAsyncMovies.fulfilled]:(state,{payload})=>{
            console.log("Fetched sucessfully!")
           return {...state,movies:payload};
        },
        [fetchAsyncMovies.rejected]:()=>{
            console.log("Rejected.")
        },
        [fetchAsyncSeries.fulfilled]:(state,{payload})=>{
            console.log("Fetched sucessfully!")
           return {...state,shows:payload};
        },
        [fetchAsyncMovieorShowDetail.fulfilled]:(state,{payload})=>{
            console.log("Fetched sucessfully!")
           return {...state,movieorshowdetail:payload};
        },
    }
})

// export const {addMovies} = movieSlice.actions
export const {removeSelectedMovieorShow} = movieSlice.actions
export const getAllMovies = (state) =>state.movies.movies
export const getAllShows = (state) =>state.movies.shows
export const getSelectedMovieorShow = (state) => state.movies.movieorshowdetail
export default movieSlice.reducer