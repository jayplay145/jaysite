import React from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, MonitorPlay, Users, Zap } from 'lucide-react';

const features = [
  {
    icon: <Gamepad2 className="text-neon-purple" size={32} />,
    title: 'Gaming Reviews',
    description: 'In-depth analysis of the latest games across all platforms.'
  },
  {
    icon: <MonitorPlay className="text-neon-blue" size={32} />,
    title: 'Tech Breakdowns',
    description: 'Detailed exploration of cutting-edge gaming hardware and technology.'
  },
  {
    icon: <Users className="text-neon-red" size={32} />,
    title: 'Community Events',
    description: 'Regular tournaments, live streams, and meetups for our growing community.'
  },
  {
    icon: <Zap className="text-yellow-400" size={32} />,
    title: 'Insider Access',
    description: 'Early previews and exclusive interviews with industry professionals.'
  }
];

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-darker-bg">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-orbitron">What We <span className="neon-text-blue">Offer</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            JayPlay is more than just a YouTube channel - we're a gaming community dedicated to bringing you the best content across all platforms.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card-bg p-6 rounded-lg shadow-lg"
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 font-orbitron">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 bg-gradient-to-r from-neon-purple/20 to-neon-blue/20 p-8 rounded-lg"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-10">
              <h3 className="text-2xl font-bold mb-2 font-orbitron">Join Our Gaming Community</h3>
              <p className="text-gray-300">
                Connect with fellow gamers, participate in events, and stay updated with the latest in gaming and tech.
              </p>
            </div>
            <div className="flex gap-4">
              <a 
                href="https://discord.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md font-orbitron transition-colors"
              >
                Join Discord
              </a>
              <a 
                href="https://youtube.com/channel/UCPQMYVAO4AIgif4NwgLuIlQ" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-orbitron transition-colors"
              >
                Subscribe
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;