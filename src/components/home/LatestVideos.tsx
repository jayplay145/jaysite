import React from 'react';
import { motion } from 'framer-motion';
import VideoCard from './VideoCard';
import { videos } from '../../data/videos';
import Button from '../common/Button';

const LatestVideos: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="latest-videos" className="py-20 px-6 bg-dark-bg">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-orbitron">Latest <span className="neon-text-red">Videos</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Check out our most recent gaming content, reviews, and tech discussions</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {videos.map((video) => (
            <motion.div key={video.id} variants={item}>
              <VideoCard video={video} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <a 
            href="https://www.youtube.com/channel/UCPQMYVAO4AIgif4NwgLuIlQ" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button color="red">View All Videos</Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default LatestVideos;