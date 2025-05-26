import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import { Event } from '../../types';

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-card-bg rounded-lg overflow-hidden shadow-lg border border-neon-purple/20 event-card"
    >
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {event.tags.map((tag, index) => (
            <span key={index} className="event-tag">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-bold mb-3 font-orbitron">{event.title}</h3>
        <div className="flex items-center text-gray-400 mb-2">
          <Calendar size={16} className="mr-2" />
          <span>{event.date}</span>
        </div>
        <div className="flex items-center text-gray-400 mb-4">
          <MapPin size={16} className="mr-2" />
          <span>{event.location}</span>
        </div>
        <p className="text-gray-300 mb-6">{event.description}</p>
        {event.registrationLink && (
          <a
            href={event.registrationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-neon-purple hover:bg-purple-700 text-white px-4 py-2 rounded font-orbitron text-sm transition-colors"
          >
            Register Now
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default EventCard;