import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import CardSection from './Components/CardSection'
import axios from 'axios'


const App = () => {

  const [TrendingMovie,setTrendingMovie]=useState([])
  const [TrendingTVshows,setTrendingTVshows]=useState([])
  const [UpcomingMovies,setUpcomingMovies]=useState([])

  useEffect(()=>{

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOWNkYjQ0ODlhY2YyMTA1M2ZhODc4NjM4MDZlMzg0MyIsInN1YiI6IjY1MDE5YzhlMWJmMjY2MDBjNWQ2NmEzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DlgZ90NEyjy42GBiFvdw8GeoKv3436_yrSUN_dZWvuM'
      }
    };

    const TrendingMovieApiCall= async()=>{
      const fetchData = async()=>{
        const fetches = await axios.get('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
        setTrendingMovie(fetches.data.results)
      }  
      fetchData()
    }

    const TrendingTVshowsApiCall= async()=>{
      
      const fetchData=async()=>{
        const fetches = await axios.get('https://api.themoviedb.org/3/trending/tv/day?language=en-US', options)
        setTrendingTVshows(fetches.data.results)
      } 
      fetchData()
    }

    const UpcomingMoviesApiCall= async()=>{
      
      const fetchData=async()=>{
        const fetches = await axios.get('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
        setUpcomingMovies(fetches.data.results)
      } 
      fetchData()
      
    }


    TrendingMovieApiCall()
    TrendingTVshowsApiCall()
    UpcomingMoviesApiCall()
  },[])

  return (
    <>
    <Navbar/>
    <HeroSection List={TrendingMovie}/>
    <CardSection title={"Popular on Netflix"} List={TrendingMovie}/>
    <CardSection title={"Trending TV Shows"} List={TrendingTVshows}/>
    <CardSection title={"Upcoming Movies"} List={UpcomingMovies}/>
    </>
    )
}

export default App