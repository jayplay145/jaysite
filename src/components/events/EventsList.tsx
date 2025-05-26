import React, { useState } from 'react';
import { motion } from 'framer-motion';
import EventCard from './EventCard';
import { events } from '../../data/events';

const EventsList: React.FC = () => {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  // Get unique tags from all events
  const uniqueTags = Array.from(
    new Set(events.flatMap(event => event.tags))
  );

  // Filter events based on active tag
  const filteredEvents = activeTag
    ? events.filter(event => event.tags.includes(activeTag))
    : events;

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
    <section className="py-20 px-6 bg-dark-bg">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-orbitron">Upcoming <span className="neon-text-blue">Events</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join us for exclusive gaming tournaments, industry panels, and community meetups
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          <button
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeTag === null
                ? 'bg-neon-purple text-white'
                : 'bg-card-bg text-gray-300 hover:bg-neon-purple/20'
            }`}
            onClick={() => setActiveTag(null)}
          >
            All Events
          </button>
          {uniqueTags.map(tag => (
            <button
              key={tag}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeTag === tag
                  ? 'bg-neon-purple text-white'
                  : 'bg-card-bg text-gray-300 hover:bg-neon-purple/20'
              }`}
              onClick={() => setActiveTag(tag)}
            >
              {tag}
            </button>
          ))}
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {filteredEvents.map(event => (
            <motion.div key={event.id} variants={item}>
              <EventCard event={event} />
            </motion.div>
          ))}
        </motion.div>

        {filteredEvents.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-10"
          >
            <p className="text-gray-400">No events found with the selected filter.</p>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 p-8 rounded-lg"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-3 font-orbitron">Want to Collaborate?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              If you're a gaming organization, developer, or content creator interested in partnering with JayPlay for an event, reach out to us!
            </p>
            <a
              href="/contact"
              className="inline-block bg-neon-blue hover:bg-blue-700 text-white px-6 py-3 rounded-md font-orbitron transition-colors"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsList;