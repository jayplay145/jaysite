import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Youtube, ChevronDown } from 'lucide-react';
import Button from '../common/Button';

const Hero: React.FC = () => {
  const scrollToVideos = () => {
    const videosSection = document.getElementById('latest-videos');
    if (videosSection) {
      videosSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="hero-gradient min-h-screen flex items-center relative px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-4 font-orbitron"
          >
            Welcome to <span className="neon-text-purple">Jay</span><span className="neon-text-blue">Play</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl mb-8 text-gray-300"
          >
            Your source for cutting-edge gaming content, tech reviews, and community events.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <a 
              href="https://www.youtube.com/channel/UCPQMYVAO4AIgif4NwgLuIlQ" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button color="red" icon={<Youtube size={18} />}>
                Subscribe to JayPlay
              </Button>
            </a>
            <Link to="/events">
              <Button color="blue" variant="outline">
                Upcoming Events
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center"
      >
        <button 
          onClick={scrollToVideos}
          className="text-white flex flex-col items-center opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
        >
          <span className="text-sm mb-2">Latest Videos</span>
          <ChevronDown size={24} className="animate-bounce" />
        </button>
      </motion.div>
    </div>
  );
};

export default Hero;