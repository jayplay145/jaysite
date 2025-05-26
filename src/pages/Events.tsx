import React from 'react';
import Layout from '../components/common/Layout';
import EventsList from '../components/events/EventsList';

const Events: React.FC = () => {
  return (
    <Layout>
      <div className="pt-24">
        <EventsList />
      </div>
    </Layout>
  );
};

export default Events;