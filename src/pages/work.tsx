import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Work() {
  const [unmute, setUnmute] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showUnmuteMessage, setShowUnmuteMessage] = useState(false);

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
    if (!showUnmuteMessage) {
      return;
    }

    const timer = setTimeout(() => {
      setShowUnmuteMessage(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [showUnmuteMessage]);

  return (
    <div>
      <AnimatePresence>
        {/* rest of your code */}
        {showUnmuteMessage && (
          <motion.div
            className="fixed inset-0 z-50 mt-16 flex items-start justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            onAnimationComplete={() => setShowUnmuteMessage(false)}
            style={{ pointerEvents: "none" }}
          >
            <p className=" text-4xl font-bold tracking-wider text-black  ">
              Click to unmute
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
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
            onClick={() => setUnmute(!unmute)}
          />
        </div>
      </main>
    </div>
  );
}
