import { type NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Tom Crampin</title>
        <meta name="description" content="Tom Crampin Website" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <main className="absolute inset-0 z-[-1]">
        <video
          className="h-full w-full bg-white object-cover"
          src="/toms_desk.mp4"
          loop
          muted
          autoPlay
          preload="true"
        />
      </main>
    </>
  );
};

export default Home;
