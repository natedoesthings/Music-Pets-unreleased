import './styles.css'
import Link from 'next/link'


const Blank = () => {

    return (
        <main className="main">
            <nav className="z-0 navbar navbar-expand-lg fixed-top" style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">MusicPets.io</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" href="#scrollspyHeading1">About</Link>

                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#scrollspyHeading2">Contact</Link>
                            </li>
                        </ul>

                        <div class="btn-group">
                            <button type="button" class="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                Logout
                            </button>
                            <ul class="dropdown-menu dropdown-menu-end">
                                <li><a class="dropdown-item" href="/dashboard">Dashboard</a></li>
                                <li><hr class="dropdown-divider"></hr></li>
                                <li><a class="dropdown-item text-danger" href="#">Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>


            <div className="d-flex justify-content-center align-items-center vh-100 added">
                <div className="text-center">
                    <h1 className="badge fw-bolder fs-1">
                        Welcome Nate!
                    </h1>
                    <p className='text-white'>Navigate to your Dashboard!</p>
                    <div>
                        <Link href='/dashboard'
                            className="btn btn-success fs-5 animated" role="button">
                            Dashboard
                        </Link>

                    </div>
                </div>
            </div>


            <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" className="scrollspy-example" tabIndex="0">
                <h1 id="scrollspyHeading1" className="display-4 invisible">About</h1>
                <h1 id="scrollspyHeading1" className="display-2 text-white p-3">About</h1>
                <p className="text-white p-3">
                    Storytelling, an ancient and fundamental aspect of human communication, serves as the linchpin of our collective experiences. It's not merely the transmission of events or facts but a gateway to emotions, beliefs, and shared values. Through narratives, whether passed down through generations or woven into contemporary forms, we glimpse into diverse worlds, perspectives, and cultures.

                    Stories possess an unparalleled power to transcend boundaries. They bridge gaps between individuals, cultures, and generations, fostering empathy and understanding. When we immerse ourselves in a story, whether through literature, film, or oral tradition, we inhabit the lives and emotions of characters, broadening our perspectives. We connect with their struggles, triumphs, fears, and aspirations, realizing the universality of human experiences.

                    Moreover, stories serve as repositories of wisdom, preserving cultural heritage and knowledge. Folktales, myths, and legends carry the ethos and values of societies, imparting moral lessons and shaping societal norms. They offer a window into the collective consciousness of a community, reflecting its fears, dreams, and aspirations.

                    In contemporary society, storytelling extends its influence through various mediums. Literature continues to be a profound force, shaping opinions and inspiring change. Film and television transport us to different realities, fostering empathy by portraying diverse characters and experiences. Social media platforms have become modern arenas for storytelling, allowing individuals to share personal narratives and create communities based on shared experiences.

                    The impact of storytelling transcends entertainment; it influences our perceptions, beliefs, and actions. It challenges stereotypes, dismantles prejudices, and ignites social movements by amplifying voices that need to be heard.

                    In conclusion, storytelling is a thread that weaves through the fabric of human existence, connecting us, shaping our identities, and fostering empathy. It's a potent tool that educates, inspires, and unites, reminding us of our shared humanity. Embracing the diversity of stories enriches our lives, broadens our understanding, and ultimately propels us toward a more empathetic and interconnected world.
                </p>

                <h1 id="scrollspyHeading2" className="display-4 invisible">About</h1>
                <h1 id="scrollspyHeading2" className="display-2 text-white p-3">Contact</h1>
                <p className="text-white p-3">
                    Storytelling, an ancient and fundamental aspect of human communication, serves as the linchpin of our collective experiences. It's not merely the transmission of events or facts but a gateway to emotions, beliefs, and shared values. Through narratives, whether passed down through generations or woven into contemporary forms, we glimpse into diverse worlds, perspectives, and cultures.

                    Stories possess an unparalleled power to transcend boundaries. They bridge gaps between individuals, cultures, and generations, fostering empathy and understanding. When we immerse ourselves in a story, whether through literature, film, or oral tradition, we inhabit the lives and emotions of characters, broadening our perspectives. We connect with their struggles, triumphs, fears, and aspirations, realizing the universality of human experiences.

                    Moreover, stories serve as repositories of wisdom, preserving cultural heritage and knowledge. Folktales, myths, and legends carry the ethos and values of societies, imparting moral lessons and shaping societal norms. They offer a window into the collective consciousness of a community, reflecting its fears, dreams, and aspirations.

                    In contemporary society, storytelling extends its influence through various mediums. Literature continues to be a profound force, shaping opinions and inspiring change. Film and television transport us to different realities, fostering empathy by portraying diverse characters and experiences. Social media platforms have become modern arenas for storytelling, allowing individuals to share personal narratives and create communities based on shared experiences.

                    The impact of storytelling transcends entertainment; it influences our perceptions, beliefs, and actions. It challenges stereotypes, dismantles prejudices, and ignites social movements by amplifying voices that need to be heard.

                    In conclusion, storytelling is a thread that weaves through the fabric of human existence, connecting us, shaping our identities, and fostering empathy. It's a potent tool that educates, inspires, and unites, reminding us of our shared humanity. Embracing the diversity of stories enriches our lives, broadens our understanding, and ultimately propels us toward a more empathetic and interconnected world.
                </p>



            </div>



            <div className="credits">

            </div>



        </main>
    )
}

export default Blank