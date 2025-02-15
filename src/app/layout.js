import 'bootstrap/dist/css/bootstrap.min.css';
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import BootstrapClient from '@/bootstrap/bootstrapclient';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import Loader from '@/Components/loader';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'musicpets.io',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link href='https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css' rel='stylesheet'></link>
      </head>
      <body className={inter.className}>{children} <BootstrapClient /> <Analytics/> <SpeedInsights/> <Loader/></body>
    </html>
    
  )
}
