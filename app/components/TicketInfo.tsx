import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const TicketInfo = () => {
  const eventType = 'FREE';
  return (
    <section className='border-1 md:w-3/5 border-[#E9E9E9] rounded-md p-4'>
      <h2 className='text-2xl text-[#1F1F1F] pb-2 md:w-[90%] border-b-1 border-[#E9E9E9] font-semibold mb-4'>
        Ticket Info
      </h2>

      <div className='rounded-full py-3 px-5 flex items-center gap-3 bg-[#F2FFF2]'>
        <Image src='/warning.svg' alt='warning' height={13.92} width={13.92} />
        <Image
          src='/security-password.svg'
          alt='secure password'
          height={21.24}
          width={21.24}
        />
        <p className='font-medium text-xs text-[#0ABA2A]'>
          Secure and instant payment
        </p>
      </div>

      <Button
        size='lg'
        icon={
          <Image
            src='/security-password.svg'
            alt='secure password'
            height={21.24}
            width={21.24}
          />
        }
        className='rounded-full w-full'
      >
        {eventType === 'FREE'
          ? 'Verify & Attend'
          : 'Connect wallet to purchase'}
      </Button>
    </section>
  );
};

export default TicketInfo;
