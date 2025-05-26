import React from 'react';
import { Link } from 'react-router-dom';
import { Gamepad2, Youtube, Twitter, Instagram, Twitch, Disc as Discord } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-darker-bg py-12 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo and Tagline */}
          <div className="flex flex-col items-start">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Gamepad2 size={28} className="text-neon-purple" />
              <span className="font-orbitron text-xl font-bold neon-text-purple">JayPlay</span>
            </Link>
            <p className="text-gray-400 mb-6">Where Gamers Level Up</p>
            <div className="flex gap-4">
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-red transition-colors">
                <Youtube size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-blue transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-purple transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://twitch.tv" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-500 transition-colors">
                <Twitch size={20} />
              </a>
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-500 transition-colors">
                <Discord size={20} />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="font-orbitron text-white text-lg mb-4">Site</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-neon-purple transition-colors">Home</Link></li>
                <li><Link to="/events" className="text-gray-400 hover:text-neon-purple transition-colors">Events</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-neon-purple transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-orbitron text-white text-lg mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link to="/terms" className="text-gray-400 hover:text-neon-purple transition-colors">Terms of Use</Link></li>
                <li><Link to="/privacy" className="text-gray-400 hover:text-neon-purple transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-orbitron text-white text-lg mb-4">Join the Community</h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest gaming news and updates.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-card-bg text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-neon-purple w-full"
              />
              <button className="bg-neon-purple hover:bg-purple-700 text-white px-4 py-2 rounded-r-md transition-colors font-orbitron">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} JayPlay. All rights reserved.</p>
          <p className="text-gray-500 text-sm mt-2 md:mt-0">
            Designed for gamers, by gamers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;