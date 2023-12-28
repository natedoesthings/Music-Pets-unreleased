import Link from 'next/link'
import './page.module.css'
import BeforeLogin from './Components/beforeLogin'
import { getToken } from './Components/getToken'

export default function Home() {
  getToken();

  return (
    <main>

      <BeforeLogin />

    </main>
  )
}
