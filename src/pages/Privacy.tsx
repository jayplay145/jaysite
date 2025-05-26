import React from 'react';
import Layout from '../components/common/Layout';
import { motion } from 'framer-motion';

const Privacy: React.FC = () => {
  return (
    <Layout>
      <div className="pt-24 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4 font-orbitron">Privacy <span className="neon-text-purple">Policy</span></h1>
            <p className="text-gray-400">Last updated: May 15, 2025</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card-bg rounded-lg shadow-lg p-8 md:p-10"
          >
            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-orbitron mb-4">1. Information We Collect</h2>
              <p className="mb-4">
                We collect information you provide directly to us when you:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Create an account or subscribe to our newsletter</li>
                <li>Participate in events, contests, or surveys</li>
                <li>Contact us or communicate with other users</li>
                <li>Post comments or content on our platforms</li>
              </ul>
              <p className="mb-6">
                The types of information we may collect include your name, email address, postal address, phone number, and any other information you choose to provide.
              </p>

              <h2 className="text-2xl font-orbitron mb-4">2. Information We Collect Automatically</h2>
              <p className="mb-4">
                When you access or use our Services, we automatically collect:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Log Information: Including your IP address, browser type, access times, pages viewed, and actions taken on our Services.</li>
                <li>Device Information: Including the type of device you use, operating system, and unique device identifiers.</li>
                <li>Usage Information: How you interact with our Services, including clicked links and viewed content.</li>
                <li>Location Information: We may collect information about your approximate location derived from your IP address.</li>
              </ul>

              <h2 className="text-2xl font-orbitron mb-4">3. Cookies and Similar Technologies</h2>
              <p className="mb-6">
                We use cookies, web beacons, and similar technologies to collect information about your browsing behavior and improve your experience on our site. You can set your browser to refuse all or some browser cookies, but this may limit your ability to use some features of our Services.
              </p>

              <h2 className="text-2xl font-orbitron mb-4">4. How We Use Your Information</h2>
              <p className="mb-4">
                We may use the information we collect to:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Provide, maintain, and improve our Services</li>
                <li>Process transactions and send related information</li>
                <li>Send technical notices, updates, security alerts, and support messages</li>
                <li>Respond to your comments and questions</li>
                <li>Provide customer service and support</li>
                <li>Send you promotional communications about products, services, offers, and events</li>
                <li>Monitor and analyze trends, usage, and activities in connection with our Services</li>
                <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
                <li>Personalize your experience on our Services</li>
              </ul>

              <h2 className="text-2xl font-orbitron mb-4">5. Sharing of Information</h2>
              <p className="mb-6">
                We may share your information with:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Service providers who perform services on our behalf</li>
                <li>Business partners with whom we jointly offer products or services</li>
                <li>Third parties in connection with a merger, sale, or acquisition</li>
                <li>When required by law or to protect our rights and the safety of our users</li>
              </ul>

              <h2 className="text-2xl font-orbitron mb-4">6. Your Choices and Rights</h2>
              <p className="mb-6">
                You have several choices regarding the information we collect and how it's used:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Account Information: You can update your account information at any time by logging into your account</li>
                <li>Cookies: Most web browsers accept cookies by default. You can set your browser to reject cookies</li>
                <li>Promotional Communications: You can opt out of receiving promotional emails by following the instructions in those emails</li>
                <li>Data Access and Portability: You may request a copy of your personal information that we hold</li>
                <li>Data Deletion: You may request that we delete your personal information</li>
              </ul>

              <h2 className="text-2xl font-orbitron mb-4">7. Children's Privacy</h2>
              <p className="mb-6">
                Our Services are not directed to children under 13. We do not knowingly collect personal information from children under 13. If we learn we have collected personal information from a child under 13, we will delete that information.
              </p>

              <h2 className="text-2xl font-orbitron mb-4">8. Changes to this Privacy Policy</h2>
              <p className="mb-6">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this page.
              </p>

              <h2 className="text-2xl font-orbitron mb-4">9. Contact Us</h2>
              <p className="mb-6">
                If you have any questions about this Privacy Policy, please contact us at privacy@jayplay.com.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default Privacy;