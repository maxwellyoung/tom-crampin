import Head from "next/head";
import { useState } from "react";

export default function Work() {
  const [unmute, setUnmute] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLoad = () => {
    setLoading(false);
  };

  return (
    <div>
      <Head>
        <title>Tom Crampin</title>
        <meta name="description" content="Descriptions" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <main>
        {loading && (
          <div className="loading-spinner align-center absolute flex justify-center">
            <p>Loading...</p>
          </div>
        )}
        <div className="bg-video-wrap absolute inset-0 z-[-1]">
          <video
            className="h-full w-full object-cover"
            src="/tom_crampin_motion_reel_2023.mp4"
            loop
            preload="eager"
            muted={unmute ? false : true}
            autoPlay
            onLoadedData={handleLoad}
            onClick={() => setUnmute(!unmute)}
          />
        </div>
      </main>
    </div>
  );
}
