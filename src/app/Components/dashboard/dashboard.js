"use client"
import { useEffect, useState } from "react";
import './after.css'
import Recommend from "../recommendations/recommend";
import NavBar from "../navbar/navbar";

const Dashboard = ({ func, token }) => {
 

  const [name, setName] = useState('');
  const [image, setImg] = useState('');
  const [profile, setProfile] = useState('');
  const [artists, setArtists] = useState([])
  const [tracks, setTracks] = useState([])
  const [trackIds, setTrackIds] = useState([])



  const getUserInfo = async () => {

    const result = await fetch('https://api.spotify.com/v1/me', {
      method: 'GET',
      headers: { 'Authorization': 'Bearer ' + token }

    })

    const data = await result.json();
    console.log(data)
    setName(data.display_name)
    setImg(data.images[1].url)
    setProfile(data.external_urls.spotify)


  }

  const getTopTracks = async () => {
    const LIMIT = 50;
    const TIME_RANGE = 'short_term'

    const result = await fetch(`https://api.spotify.com/v1/me/top/tracks?limit=${LIMIT}&time_range=${TIME_RANGE}`, {
      method: 'GET',
      headers: { 'Authorization': 'Bearer ' + token }

    })

    const data = await result.json();
    console.log(data)
    setTracks(data.items)
    console.log(tracks)

    let temp = []
    for (let i = 0; i < 5; ++i) {
      temp.push(data.items[i].id)
    }

    const getRecommendations = async () => {

      const result = await fetch(`https://api.spotify.com/v1/recommendations?limit=5&seed_tracks=${temp.join(',')}`, {
        method: 'GET',
        headers: { 'Authorization': 'Bearer ' + token }

      })

      const data = await result.json();
      console.log(data)
      setRecommendations(data.tracks)

    }

    getRecommendations();

  }

  const getTopArtists = async () => {
    const LIMIT = 50;
    const TIME_RANGE = 'short_term'

    const result = await fetch(`https://api.spotify.com/v1/me/top/artists?limit=${LIMIT}&time_range=${TIME_RANGE}`, {
      method: 'GET',
      headers: { 'Authorization': 'Bearer ' + token }

    })

    const data = await result.json();
    console.log(data)
    setArtists(data.items)

  }


  const [recommendations, setRecommendations] = useState([])





  useEffect(() => {
    getUserInfo();
    getTopTracks();
    getTopArtists();

  }, []);

  // Initialize genreCounts state as an array of objects using useState
  const [genreCounts, setGenreCounts] = useState([]);

  // Update genreCounts when 'artists' prop changes
  useEffect(() => {
    // Function to update genreCounts based on 'artists'
    const updateGenreCounts = () => {
      let counts = {};
      if (artists && artists.length > 0) {
        artists.forEach((item) => {
          item.genres.forEach((genre) => {
            if (counts[genre]) {
              counts[genre] += 1;
            } else {
              counts[genre] = 1;
            }
          });
        });
      }


      // Convert counts object to an array of objects
      const countsArray = Object.keys(counts).map((genre) => ({
        genre: genre,
        count: counts[genre],
      }));

      countsArray.sort((a, b) => b.count - a.count);
      // Update the genreCounts state with the array of objects
      setGenreCounts(countsArray);
    };

    // Call the function to update genreCounts
    updateGenreCounts();
  }, [artists]);


  console.log(genreCounts)
  console.log(recommendations)
  return (
    <main>
      <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              ...
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-danger" data-bs-dismiss="modal" onClick={func}>Understood</button>
            </div>
          </div>
        </div>

      </div>

      <NavBar image={image} profile={profile} name={name}/>

      <section class="home">
        <div class="text">Dashboard</div>
        <div class="hstack gap-3 positioning">

          <p className="text text-small">Your Top Tracks! </p>
          <div className="scrollable-container">
            <div className="scrollable-content">
              <ol>
                {tracks && tracks.length > 0 ? (
                  tracks.map(item => (
                    <li key={item.name}>
                      <a href={item.external_urls.spotify}>{item.name}</a>
                    </li>
                  ))
                ) : (
                  <li>No tracks available</li>
                )}
              </ol>

            </div> 
          </div>
          <p className="text-small">Your Top Artists!</p>
          <div className="scrollable-container">
            <div className="scrollable-content">
              <ol>
                {artists && artists.length > 0 ? (
                  artists.map(item => (
                    <li key={item.name}>
                      <a href={item.external_urls.spotify}>{item.name}</a>
                    </li>
                  ))
                ) : (
                  <li>No Artists available</li>
                )}
              </ol>

            </div>

          </div>

          <div className="scrollable-container">
            <div className="scrollable-content">
              <ol>
                {genreCounts && genreCounts.length > 0 ? (
                  genreCounts.map(item => (
                    <li key={item.genre}>
                      <p className="text-capitalize">{item.genre}</p>
                    </li>
                  ))
                ) : (
                  <li>No Genres available</li>
                )}
              </ol>

            </div>

          </div>

        </div>

        <Recommend recommendations={recommendations}/>

      </section>







    </main>
  )
}

export default Dashboard