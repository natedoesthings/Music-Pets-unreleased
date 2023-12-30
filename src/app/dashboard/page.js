"use client"
import {useEffect, useState } from "react";
import './styles.css'
import NavBar from "./components/navbar/navbar";
import Loader from "../Components/loader/loader";


const Dashboard = () => {
  const token = window.localStorage.getItem('token')
  const [name, setName] = useState('');
  const [image, setImg] = useState('');
  const [profile, setProfile] = useState('');
  const [tracks, setTracks] = useState([])

  const getUserInfo = async () => {

    const result = await fetch('https://api.spotify.com/v1/me', {
      method: 'GET',
      headers: { 'Authorization' : 'Bearer ' + token}

    })

    const data = await result.json();
    
    setName(data.display_name)
    setImg(data.images[1].url)
    setProfile(data.external_urls.spotify)
   

  }

  const getTopTracks = async () => {
    const LIMIT = 10;
    const TIME_RANGE = 'short_term'

    const result = await fetch(`https://api.spotify.com/v1/me/top/tracks?limit=${LIMIT}&time_range=${TIME_RANGE}`, {
      method: 'GET',
      headers: { 'Authorization' : 'Bearer ' + token }

    })

    const data = await result.json();
    console.log(data)
    setTracks(data.items)

   

  }

  getUserInfo();
  getTopTracks();
 
  return (
    <main>
      <NavBar 
      name={name}
      image={image}
      profile={profile}/>
    <section class="home">
        <div class="text text-capitalize">Welcome {name}!</div>
        <div className="data">
        <div class="text text-capitalize">Welcome {name}!</div>
        </div>
    </section> 

    <Loader/>

    </main>
  )
}

export default Dashboard