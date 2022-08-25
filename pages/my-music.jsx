import { motion } from "framer-motion";

export default function MyMusic() {
  return (
    <div className="pt-5 px-5 overflow-y-scroll h-full">
      <div className="text-xl font-bold mb-2">Solo</div>
      <div className="card-container flex  overflow-x-scroll gap-3 rounded-xl snap-x">
        {["videos/video-1.mp4", "videos/video-2.mp4"].map((video, index) => (
          <motion.div
            key={video + index}
            className="card bg-red-500 h-[10em] snap-center min-w-[17.85em] overflow-hidden rounded-xl"
          >
            <video controls className="bg-black w-full h-full">
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
        ))}
      </div>
      <div className="text-xl font-bold mb-2 mt-10">Duo</div>
      <div className="card-container flex  overflow-x-scroll gap-3 rounded-xl snap-x">
        {["videos/video-2.mp4", "videos/video-1.mp4"].map((video, index) => (
          <motion.div
            key={index + video}
            className="card bg-red-500 h-[10em] snap-center min-w-[17.85em] overflow-hidden rounded-xl"
          >
            <video controls className="bg-black w-full h-full">
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
