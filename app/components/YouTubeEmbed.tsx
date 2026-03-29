"use client";
import { useState } from "react";
import { motion } from "framer-motion";

interface Props {
  videoId: string;
  title: string;
}

export default function YouTubeEmbed({ videoId, title }: Props) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="my-8 rounded-2xl overflow-hidden shadow-lg">
      {!playing ? (
        // Thumbnail with play button
        <div
          className="relative cursor-pointer group"
          onClick={() => setPlaying(true)}
        >
          <img
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt={title}
            className="w-full h-64 md:h-80 object-cover"
          />
          {/* Dark overlay */}
          <div
            className="absolute inset-0 bg-black opacity-30 
          group-hover:opacity-20 transition-opacity"
          ></div>

          {/* Play Button */}
          <div
            className="absolute inset-0 flex items-center 
          justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-600 hover:bg-red-500 text-white 
              rounded-full w-20 h-20 flex items-center justify-center 
              shadow-2xl transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-10 h-10 ml-1"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </motion.div>
          </div>

          {/* Video Title Label */}
          <div
            className="absolute bottom-0 left-0 right-0 bg-gradient-to-t 
          from-black to-transparent p-4"
          >
            <p
              className="text-white font-semibold text-sm flex 
            items-center gap-2"
            >
              <span
                className="bg-red-600 text-white text-xs font-bold 
              px-2 py-0.5 rounded"
              >
                ▶ YouTube
              </span>
              {title}
            </p>
          </div>
        </div>
      ) : (
        // Actual YouTube iframe
        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; 
            encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}
    </div>
  );
}
