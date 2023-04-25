import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Nav from "~/components/Nav";

export default function Work() {
  const [unmute, setUnmute] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showUnmuteMessage, setShowUnmuteMessage] = useState(false);
  const [showMuteMessage, setShowMuteMessage] = useState(false);

  const handleLoad = () => {
    setLoading(false);
  };

  useEffect(() => {
    setShowUnmuteMessage(true);
    const timer = setTimeout(() => {
      setShowUnmuteMessage(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showMuteMessage) {
      const timer = setTimeout(() => {
        setShowMuteMessage(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [showMuteMessage]);

  return (
    <>
      <div>
        <AnimatePresence>
          {showUnmuteMessage && !showMuteMessage && (
            <motion.div
              className="fixed inset-0 z-50 mt-14 mr-36 flex items-end justify-end sm:items-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, x: 12 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2 }}
              onAnimationComplete={() => setShowUnmuteMessage(false)}
              style={{ pointerEvents: "none" }}
            >
              <p className="sm:text-md text-sm font-bold tracking-wider text-black">
                click to unmute
              </p>
            </motion.div>
          )}
          {showMuteMessage && (
            <motion.div
              className="fixed inset-0 z-50 mt-14 mr-32 flex items-end justify-end sm:items-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              onAnimationComplete={() => setShowMuteMessage(false)}
              style={{ pointerEvents: "none" }}
            >
              <p className="sm:text-md text-sm font-bold tracking-wider text-black">
                {unmute ? "unmuted" : "muted"}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <main>
          <Nav />
          {loading && (
            <div className="loading-spinner align-center absolute flex justify-center bg-white">
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
              onClick={() => {
                setUnmute(!unmute);
                setShowMuteMessage(true);
              }}
            />
          </div>
        </main>
      </div>
    </>
  );
}
