"use client"
import React from "react";
import { useEffect, useState } from "react";

import HomeScreen from "./homescreen"
import Dashboard from "./dashboard";


const GetToken = ({ CLIENT_ID, AUTH_ENDPOINT, REDIRECT_URI, RESPONSE_TYPE, SCOPE }) => {
    const [token, setToken] = useState("");

    useEffect(() => {
      if (typeof window !== 'undefined') {
        const storedToken = window.localStorage.getItem("token");
        if(!storedToken) {
          const hash = window.location.hash;

          if (!token && hash) {
            const newToken = hash
              .substring(1)
              .split("&")
              .find((elem) => elem.startsWith("access_token"))
              .split("=")[1];
  
            window.location.hash = "";
            window.localStorage.setItem("token", newToken);
            setToken(newToken);
          }
        }
        else {
          setToken(storedToken)
        }

        
        
      }
    }, [token]);

    const logout = () => {
      setTimeout(() => {
        setToken("");
        window.localStorage.removeItem("token");
      }, 500);

    };

  return (
    <main>
      {!token ?

        <HomeScreen
          AUTH_ENDPOINT={AUTH_ENDPOINT}
          CLIENT_ID={CLIENT_ID}
          REDIRECT_URI={REDIRECT_URI}
          RESPONSE_TYPE={RESPONSE_TYPE}
          SCOPE={SCOPE}
          loggedIn={true}
          logOut={logout}
        /> :
        <main>
          <Dashboard 
          func={logout} 
          token={token}/>
        </main>

      }


    </main>
  )


}

export default GetToken
