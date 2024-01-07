'use client'
import React from "react"
import { useEffect } from "react"
import WaitlistForm from "./waitlist"

const Denied = () => {

  function restartPage() {
    window.location.reload(true)
  }

  useEffect(() => {
    if(typeof window !== undefined)  {
      window.localStorage.removeItem("token");
    }
    
  }, [])


  return (
    <main>
     <WaitlistForm func={restartPage}/>
    </main>
  ) 
}

export default Denied