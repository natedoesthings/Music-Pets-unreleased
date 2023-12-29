import Link from "next/link"
import './styles.css'

const BeforeLogin = () => {
  return (

    <main className="main">
      <nav className="navbar navbar-expand-lg fixed-top" style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">MusicPets.io</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="#scrollspyHeading1">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" href="#scrollspyHeading2">Contact</Link>
              </li>
            </ul>
            <Link href={`${process.env.AUTH_ENDPOINT}?client_id=${process.env.CLIENT_ID_NATE}&redirect_uri=${process.env.REDIRECT_URI}&response_type=${process.env.RESPONSE_TYPE}&scope=${process.env.SCOPE}`}
              className="btn btn-success fs-5" role="button">
              Login</Link>
          </div>
        </div>
      </nav>


      <div className="d-flex justify-content-center align-items-center vh-100 added">
        <div className="text-center">
          <h1 className="badge fw-bolder fs-1">
            Get Started with your Music Pet!
          </h1>

          <div>
            <Link href={`${process.env.AUTH_ENDPOINT}?client_id=${process.env.CLIENT_ID_NATE}&redirect_uri=${process.env.REDIRECT_URI}&response_type=${process.env.RESPONSE_TYPE}&scope=${process.env.SCOPE}`}
              className="btn btn-success fs-5 animated" role="button">
              Connect your Spotify!
              <span className='invisible'>""</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-spotify" viewBox="0 0 16 16">
                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.669 11.538a.498.498 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686zm.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858m.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288z" />
              </svg>
            </Link>

          </div>
        </div>
      </div>


      <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" class="scrollspy-example p-3" tabindex="0">
      <h1 id="scrollspyHeading1" className="display-4 invisible">About</h1>
        <h1 id="scrollspyHeading1" className="display-2 text-white">About</h1>
        <p className="text-white">
          Storytelling, an ancient and fundamental aspect of human communication, serves as the linchpin of our collective experiences. It's not merely the transmission of events or facts but a gateway to emotions, beliefs, and shared values. Through narratives, whether passed down through generations or woven into contemporary forms, we glimpse into diverse worlds, perspectives, and cultures.

          Stories possess an unparalleled power to transcend boundaries. They bridge gaps between individuals, cultures, and generations, fostering empathy and understanding. When we immerse ourselves in a story, whether through literature, film, or oral tradition, we inhabit the lives and emotions of characters, broadening our perspectives. We connect with their struggles, triumphs, fears, and aspirations, realizing the universality of human experiences.

          Moreover, stories serve as repositories of wisdom, preserving cultural heritage and knowledge. Folktales, myths, and legends carry the ethos and values of societies, imparting moral lessons and shaping societal norms. They offer a window into the collective consciousness of a community, reflecting its fears, dreams, and aspirations.

          In contemporary society, storytelling extends its influence through various mediums. Literature continues to be a profound force, shaping opinions and inspiring change. Film and television transport us to different realities, fostering empathy by portraying diverse characters and experiences. Social media platforms have become modern arenas for storytelling, allowing individuals to share personal narratives and create communities based on shared experiences.

          The impact of storytelling transcends entertainment; it influences our perceptions, beliefs, and actions. It challenges stereotypes, dismantles prejudices, and ignites social movements by amplifying voices that need to be heard.

          In conclusion, storytelling is a thread that weaves through the fabric of human existence, connecting us, shaping our identities, and fostering empathy. It's a potent tool that educates, inspires, and unites, reminding us of our shared humanity. Embracing the diversity of stories enriches our lives, broadens our understanding, and ultimately propels us toward a more empathetic and interconnected world.
        </p>

        <h1 id="scrollspyHeading2" className="display-2 text-white">Contact</h1>
        <p className="text-white">
          Storytelling, an ancient and fundamental aspect of human communication, serves as the linchpin of our collective experiences. It's not merely the transmission of events or facts but a gateway to emotions, beliefs, and shared values. Through narratives, whether passed down through generations or woven into contemporary forms, we glimpse into diverse worlds, perspectives, and cultures.

          Stories possess an unparalleled power to transcend boundaries. They bridge gaps between individuals, cultures, and generations, fostering empathy and understanding. When we immerse ourselves in a story, whether through literature, film, or oral tradition, we inhabit the lives and emotions of characters, broadening our perspectives. We connect with their struggles, triumphs, fears, and aspirations, realizing the universality of human experiences.

          Moreover, stories serve as repositories of wisdom, preserving cultural heritage and knowledge. Folktales, myths, and legends carry the ethos and values of societies, imparting moral lessons and shaping societal norms. They offer a window into the collective consciousness of a community, reflecting its fears, dreams, and aspirations.

          In contemporary society, storytelling extends its influence through various mediums. Literature continues to be a profound force, shaping opinions and inspiring change. Film and television transport us to different realities, fostering empathy by portraying diverse characters and experiences. Social media platforms have become modern arenas for storytelling, allowing individuals to share personal narratives and create communities based on shared experiences.

          The impact of storytelling transcends entertainment; it influences our perceptions, beliefs, and actions. It challenges stereotypes, dismantles prejudices, and ignites social movements by amplifying voices that need to be heard.

          In conclusion, storytelling is a thread that weaves through the fabric of human existence, connecting us, shaping our identities, and fostering empathy. It's a potent tool that educates, inspires, and unites, reminding us of our shared humanity. Embracing the diversity of stories enriches our lives, broadens our understanding, and ultimately propels us toward a more empathetic and interconnected world.
        </p>

      </div>



    </main>
  )
}

export default BeforeLogin