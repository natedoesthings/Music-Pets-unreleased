import GetToken from './Components/getToken'
import Loader from './Components/loader/loader';
import './styles.css'



export default function Home() {

  return (
    <main>

      {typeof window !== "undefined" ?
        <h1>hehe</h1>

        :

        <main>
          <GetToken
            CLIENT_ID={process.env.CLIENT_ID_NATE}
            REDIRECT_URI={process.env.REDIRECT_URI}
            RESPONSE_TYPE={process.env.RESPONSE_TYPE}
            AUTH_ENDPOINT={process.env.AUTH_ENDPOINT}
            SCOPE={process.env.SCOPE} />


          <Loader />

        </main>

      }






    </main>
  )
}
