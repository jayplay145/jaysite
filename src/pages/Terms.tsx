import React from 'react';
import Layout from '../components/common/Layout';
import { motion } from 'framer-motion';

const Terms: React.FC = () => {
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
            <h1 className="text-3xl md:text-4xl font-bold mb-4 font-orbitron">Terms of <span className="neon-text-blue">Use</span></h1>
            <p className="text-gray-400">Last updated: May 15, 2025</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card-bg rounded-lg shadow-lg p-8 md:p-10"
          >
            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-orbitron mb-4">1. Acceptance of Terms</h2>
              <p className="mb-6">
                By accessing or using the JayPlay website, services, and content (collectively, the "Services"), you agree to be bound by these Terms of Use. If you do not agree to these terms, you may not access or use the Services.
              </p>

              <h2 className="text-2xl font-orbitron mb-4">2. Content Rights</h2>
              <p className="mb-4">
                All content on the JayPlay platform, including text, graphics, logos, videos, and software, is the property of JayPlay or its content suppliers and is protected by international copyright laws.
              </p>
              <p className="mb-6">
                You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our website without the prior written consent of JayPlay.
              </p>

              <h2 className="text-2xl font-orbitron mb-4">3. User Conduct</h2>
              <p className="mb-4">
                You agree not to use the Services in any way that:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Violates any applicable law or regulation</li>
                <li>Infringes the rights of any third party</li>
                <li>Attempts to interfere with the proper functioning of the Services</li>
                <li>Makes unauthorized use of the Services for commercial purposes</li>
                <li>Engages in harassment, hate speech, or discriminatory behavior</li>
              </ul>

              <h2 className="text-2xl font-orbitron mb-4">4. User Accounts</h2>
              <p className="mb-6">
                If you create an account with JayPlay, you are responsible for maintaining the security of your account and for all activities that occur under your account. You must immediately notify JayPlay of any unauthorized use of your account.
              </p>

              <h2 className="text-2xl font-orbitron mb-4">5. Third-Party Links</h2>
              <p className="mb-6">
                The Services may contain links to third-party websites or services that are not owned or controlled by JayPlay. JayPlay has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services.
              </p>

              <h2 className="text-2xl font-orbitron mb-4">6. Disclaimer of Warranties</h2>
              <p className="mb-6">
                The Services are provided on an "as is" and "as available" basis, without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
              </p>

              <h2 className="text-2xl font-orbitron mb-4">7. Limitation of Liability</h2>
              <p className="mb-6">
                In no event shall JayPlay be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Services.
              </p>

              <h2 className="text-2xl font-orbitron mb-4">8. Changes to Terms</h2>
              <p className="mb-6">
                JayPlay reserves the right, at its sole discretion, to modify or replace these Terms at any time. It is your responsibility to check these Terms periodically for changes. Your continued use of the Services following the posting of any changes constitutes acceptance of those changes.
              </p>

              <h2 className="text-2xl font-orbitron mb-4">9. Governing Law</h2>
              <p className="mb-6">
                These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
              </p>

              <h2 className="text-2xl font-orbitron mb-4">10. Contact Information</h2>
              <p className="mb-6">
                If you have any questions about these Terms, please contact us at legal@jayplay.com.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default Terms;