import React from 'react';
import Layout from '../components/common/Layout';
import Hero from '../components/home/Hero';
import LatestVideos from '../components/home/LatestVideos';
import AboutSection from '../components/home/AboutSection';

const Home: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <LatestVideos />
      <AboutSection />
    </Layout>
  );
};

export default Home;