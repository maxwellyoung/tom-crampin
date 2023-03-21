import Head from "next/head";
import { useState } from "react";

export default function Work() {
  const [unmute, setUnmute] = useState(false);

  return (
    <div>
      <Head>
        <title>Tom Crampin</title>
        <meta name="description" content="Descriptions" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <main>
        <div className="bg-video-wrap fixed inset-0 z-[-1]">
          <video
            className="h-full w-full object-cover"
            src="/tom_crampin_motion_reel_2023.mp4"
            loop
            preload="true"
            muted={unmute ? false : true}
            autoPlay
            onClick={() => setUnmute(!unmute)}
          />
        </div>
      </main>
    </div>
  );
}
