'use client'
import NavBar from "../../Components/navbar"
import "./styles.css"

const Pet = () => {
  if (typeof window !== 'undefined') {
    if(!window.localStorage.getItem('token')) {
      window.location.replace('http://localhost:3000/login')
    }
  }

  return (
    <main>
      <NavBar/>

      <section class="home">
        <h1>Your pet is a turtle!</h1>
      </section>
      
    </main>
    
  )
}

export default Pet