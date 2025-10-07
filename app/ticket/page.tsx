'use client';
import React, { useState } from 'react';
import TicketSummary from '../components/TicketSummary';
import TicketModal from '../components/TicketModal';
import { Button } from '@/components/ui/button';

const Page = () => {
  const [openTicketModal, setOpenTicketModal] = useState(true);
  const handleClose = () => setOpenTicketModal(false);

  return (
    <>
      <Button onClick={() => setOpenTicketModal(true)}>Open modal</Button>
      <TicketModal isOpen={openTicketModal} onClose={handleClose} />
    </>
  );
};

export default Page;
