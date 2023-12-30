"use client"
import React from "react";
import { useEffect, useState } from "react";

import BeforeLogin from "./before/beforeLogin"
import AfterLogin from "./after/afterLogin"


const GetToken = ({ CLIENT_ID, AUTH_ENDPOINT, REDIRECT_URI, RESPONSE_TYPE, SCOPE }) => {

  const storedToken = window.localStorage.getItem("token");
  const [token, setToken] = useState(storedToken || "");

  useEffect(() => {
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

        <BeforeLogin
          AUTH_ENDPOINT={AUTH_ENDPOINT}
          CLIENT_ID={CLIENT_ID}
          REDIRECT_URI={REDIRECT_URI}
          RESPONSE_TYPE={RESPONSE_TYPE}
          SCOPE={SCOPE}
        /> :
        <main>
          <AfterLogin 
          func={logout} 
          token={token}/>
        </main>

      }


    </main>
  )


}

export default GetToken
