import React from 'react';
import { motion } from 'framer-motion';
import { Play, Eye } from 'lucide-react';
import { Video } from '../../types';

interface VideoCardProps {
  video: Video;
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-card-bg rounded-lg overflow-hidden shadow-lg video-card"
    >
      <div className="relative">
        <img 
          src={video.thumbnail} 
          alt={video.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 video-card-overlay transition-opacity duration-300 flex items-center justify-center">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-12 h-12 rounded-full bg-neon-red flex items-center justify-center"
          >
            <Play fill="white" size={20} />
          </motion.div>
        </div>
        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
          <Eye size={12} />
          <span>{video.views}</span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-white mb-2 line-clamp-2">{video.title}</h3>
        <div className="flex justify-between text-gray-400 text-sm">
          <span>JayPlay</span>
          <span>{video.publishedAt}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default VideoCard;