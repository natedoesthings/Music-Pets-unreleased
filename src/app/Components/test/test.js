"use client"
import React from "react";
import { useEffect, useState } from "react";


const testingToken = () => {
  
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

  return token
}

export default testingToken

