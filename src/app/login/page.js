import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <main>
    <div>Login Plz</div>
    <Link href={`${process.env.AUTH_ENDPOINT}?client_id=${process.env.CLIENT_ID_NATE}&redirect_uri=${process.env.REDIRECT_URI}&response_type=${process.env.RESPONSE_TYPE}&scope=${process.env.SCOPE}`}>dsdsd</Link>
    </main>
  )
}

export default page