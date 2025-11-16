import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name : "movies",
    initialState : {
        nowPlayingMovies : null,
        movieTrailor : null

    },
    reducers:{
        addNowPlayingMovies : (state,action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addMovieTrailor : (state,action)=>{
            state.movieTrailor = action.payload;
        }
    }
});

export const {addNowPlayingMovies, addMovieTrailor} = movieSlice.actions;
export default movieSlice.reducer;