import { type NextPage } from "next";
import Head from "next/head";
import { useState } from "react";

const Home: NextPage = () => {
  const [loading, setLoading] = useState(false);

  const handleLoad = () => {
    setLoading(false);
  };

  return (
    <>
      <Head>
        <title>Tom Crampin</title>
        <meta name="description" content="" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <main className="absolute inset-0 z-[-1]">
        {loading && (
          <div className="loading-spinner align-center absolute flex justify-center">
            <p>Loading...</p>
          </div>
        )}
        <video
          className="h-full w-full bg-white object-cover"
          src="/toms_desk.mp4"
          loop
          preload="eager"
          autoPlay
          onLoadedData={handleLoad}
        />
      </main>
    </>
  );
};

export default Home;
