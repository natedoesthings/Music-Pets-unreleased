'use client'
import { useEffect } from 'react';
import './loader.css'

const Loader = () => {
  useEffect(() => {
    const fadeOutLoader = () => {
      const loaderWrapper = document.querySelector('.loader-wrapper');
      if (loaderWrapper) {
        loaderWrapper.style.transition = 'opacity 0.5s ease-in-out';
        loaderWrapper.style.opacity = '0';

        setTimeout(() => {
          loaderWrapper.style.display = 'none';
        }, 500); // Timeout to hide the loader after fading out
      }
    };

    // Fade out the loader after the component has mounted
    fadeOutLoader();

    // Optionally, remove the loader after a certain duration
    const removeLoader = setTimeout(() => {
      const loaderWrapper = document.querySelector('.loader-wrapper');
      if (loaderWrapper) {
        loaderWrapper.style.display = 'none';
      }
    }, 2500); // Timeout to remove the loader after 2.5 seconds (adjust as needed)

    // Clean-up logic to clear the timeout
    return () => clearTimeout(removeLoader);
  }, []);

  return (  
    <main>
      <div className="loader-wrapper">
        <span className="loader"><span className="loader-inner"></span></span>
      </div>
    </main>

  )
}

export default Loader