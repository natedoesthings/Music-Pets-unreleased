'use client'
import { useState } from "react";
const LogOut  = ({prevToken}) => {
  const [token, setToken] = useState(prevToken || "");

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };
  
  return (
    <main>
      <button type="button" className="btn btn-danger" onClick={logout}>Danger</button>
    </main>
  )

}

export default LogOut