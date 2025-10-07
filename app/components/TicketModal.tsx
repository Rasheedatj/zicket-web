import React from 'react';
import TicketInfo from './TicketInfo';
import TicketSummary from './TicketSummary';

const TicketModal = () => {
  return (
    <section className='flex m-4 flex-col gap-8 md:flex-row'>
      <TicketInfo />
      <TicketSummary />
    </section>
  );
};

export default TicketModal;
