import Head from "next/head";

export default function reel() {
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
            autoPlay
          />
        </div>
      </main>
    </div>
  );
}
