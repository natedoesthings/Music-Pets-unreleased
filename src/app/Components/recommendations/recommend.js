
const Recommend = ({recommendations}) => {
    return (
      <div class="bottom-left-carousel">
          <div id="carouselExample" class="carousel slide custom-carousel">
            <div class="carousel-inner">

            <div class="carousel-item active">
            <div className='d-flex align-items-center'>
              <a>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Simple_Music.svg/600px-Simple_Music.svg.png" class="d-block w-100" alt="..."></img>
              </a>
              <div class="vstack gap-3">
                <h4 className='text-white ms-3 p-2'>Swipe For Music Recommendations</h4>
                <div class="mt-auto">
                <audio controls className='invisible' src='https://p.scdn.co/mp3-preview/d3b1d6dbcbe7fae512662a27c293a972022ea458?cid=5cfd58de39694316a974ca5c2da6603f'></audio>
                </div>
              </div>
            </div>

          </div>
          
            
              {recommendations && recommendations.length > 0 ?
                <div class="carousel-item">
                  <div className='d-flex align-items-center'>
                    <a href={recommendations[0].external_urls.spotify}>
                      <img src={recommendations[0].album.images[0].url} class="d-block w-100" alt="..."></img>
                    </a>
                    <div class="vstack gap-3">
                      <h6 className='text-white ms-3 p-2'>{recommendations[0].name}</h6>
                      <h6 className='text-white ms-3 p-2'>By: {recommendations[0].artists[0].name}</h6>
                      <div class="mt-auto">
                        <audio controls src={recommendations[0].preview_url}></audio>
                      </div>
                    </div>
                  </div>

                </div> : <p></p>}

                {recommendations && recommendations.length > 0 ?
                <div class="carousel-item">
                  <div className='d-flex align-items-center'>
                    <a href={recommendations[1].external_urls.spotify}>
                      <img src={recommendations[1].album.images[0].url} class="d-block w-100" alt="..."></img>
                    </a>
                    <div class="vstack gap-3">
                      <h6 className='text-white ms-3 p-2'>{recommendations[1].name}</h6>
                      <h6 className='text-white ms-3 p-2'>By: {recommendations[1].artists[0].name}</h6>
                      <div class="mt-auto">
                        <audio controls src={recommendations[1].preview_url}></audio>
                      </div>
                    </div>
                  </div>

                </div> : <p></p>}

                {recommendations && recommendations.length > 0 ?
                <div class="carousel-item">
                  <div className='d-flex align-items-center'>
                    <a href={recommendations[2].external_urls.spotify}>
                      <img src={recommendations[2].album.images[0].url} class="d-block w-100" alt="..."></img>
                    </a>
                    <div class="vstack gap-3">
                      <h6 className='text-white ms-3 p-2'>{recommendations[2].name}</h6>
                      <h6 className='text-white ms-3 p-2'>By: {recommendations[2].artists[0].name}</h6>
                      <div class="mt-auto">
                        <audio controls src={recommendations[2].preview_url}></audio>
                      </div>
                    </div>
                  </div>

                </div> : <p></p>}

                {recommendations && recommendations.length > 0 ?
                <div class="carousel-item">
                  <div className='d-flex align-items-center'>
                    <a href={recommendations[3].external_urls.spotify}>
                      <img src={recommendations[3].album.images[0].url} class="d-block w-100" alt="..."></img>
                    </a>
                    <div class="vstack gap-3">
                      <h6 className='text-white ms-3 p-2'>{recommendations[3].name}</h6>
                      <h6 className='text-white ms-3 p-2'>By: {recommendations[3].artists[0].name}</h6>
                      <div class="mt-auto">
                        <audio controls src={recommendations[3].preview_url}></audio>
                      </div>
                    </div>
                  </div>

                </div> : <p></p>}


                {recommendations && recommendations.length > 0 ?
                <div class="carousel-item">
                  <div className='d-flex align-items-center'>
                    <a href={recommendations[4].external_urls.spotify}>
                      <img src={recommendations[4].album.images[0].url} class="d-block w-100" alt="..."></img>
                    </a>
                    <div class="vstack gap-3">
                      <h6 className='text-white ms-3 p-2'>{recommendations[4].name}</h6>
                      <h6 className='text-white ms-3 p-2'>By: {recommendations[4].artists[0].name}</h6>
                      <div class="mt-auto">
                        <audio controls src={recommendations[4].preview_url}></audio>
                      </div>
                    </div>
                  </div>

                </div> : <p></p>}

            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
    )
}

export default Recommend