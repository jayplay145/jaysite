import React from 'react';
import Layout from '../components/common/Layout';
import ContactForm from '../components/contact/ContactForm';

const Contact: React.FC = () => {
  return (
    <Layout>
      <div className="pt-24">
        <ContactForm />
      </div>
    </Layout>
  );
};

export default Contact;