import { useState } from "react";
import Nav from "~/components/Nav";

export default function Work() {
  const [unmute, setUnmute] = useState(false);
  const [showUnmuteMessage, setShowUnmuteMessage] = useState(false);
  const [showMuteMessage, setShowMuteMessage] = useState(false);

  return (
    <>
      <div>
        {showUnmuteMessage && !showMuteMessage && (
          <div
            className="fixed inset-0 z-50 mt-14 mr-36 flex items-end justify-end sm:items-start"
            style={{ pointerEvents: "none" }}
          >
            <p className="sm:text-md text-sm font-bold tracking-wider text-black">
              click to unmute
            </p>
          </div>
        )}
        {showMuteMessage && (
          <div
            className="fixed inset-0 z-50 mt-14 mr-32 flex items-end justify-end sm:items-start"
            style={{ pointerEvents: "none" }}
          >
            <p className="sm:text-md text-sm font-bold tracking-wider text-black">
              {unmute ? "unmuted" : "muted"}
            </p>
          </div>
        )}

        <main>
          <div className="absolute z-10">
            <Nav />
          </div>

          <iframe
            src="https://player.vimeo.com/video/792070929?h=52e59801c3&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            title="Tom Crampin Motion Reel 2023"
          ></iframe>
        </main>
      </div>
    </>
  );
}
