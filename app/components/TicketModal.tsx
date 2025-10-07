import React, { useState } from 'react';
import TicketInfo from './TicketInfo';
import TicketSummary from './TicketSummary';
import { X } from 'lucide-react';

interface TicketModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TicketModal = ({ isOpen, onClose }: TicketModalProps) => {
  if (!isOpen) return null;
  return (
    <section className='flex m-4 animate-fade-in flex-col gap-8 md:flex-row absolute inset-0 md:inset-10 z-50 bg-white p-4 py-10 md:p-10  overflow-y-auto shadow-lg rounded-xl'>
      <TicketInfo />
      <TicketSummary />

      <div className='absolute top-2 right-2 cursor-pointer hover:scale-115 transition-all duration-300'>
        <X onClick={onClose} />
      </div>
    </section>
  );
};

export default TicketModal;
