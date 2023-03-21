import { type NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Tom Crampin</title>
        <meta name="description" content="" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <main className="fixed inset-0 z-[-1]">
        <video
          className="h-full w-full object-cover"
          src="/toms_desk.mp4"
          loop
          muted
          preload="true"
          autoPlay
        />
      </main>
    </>
  );
};

export default Home;
