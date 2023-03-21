import Head from "next/head";
// import styles from "../styles/Home.module.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function reel() {
  return (
    <div>
      <Head>
        <title>Tom Crampin</title>
        <meta name="description" content="Descriptions" />
        <link rel="icon" href="/logo.svg" />
        {/* <script
					src="https://kit.fontawesome.com/7e9f3d367c.js"
					crossOrigin="anonymous"
				></script> */}
      </Head>
      <main>
        <div className="bg-video-wrap fixed inset-0 z-[-1]">
          <video
            className="h-full w-full object-cover"
            src="/tom_crampin_motion_reel_2023.mp4"
            loop
            preload="true"
            autoPlay
          ></video>
          {/* <FontAwesomeIcon icon="fa-solid fa-volume-high" /> */}
        </div>
      </main>
    </div>
  );
}
