import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const TicketSummary = () => {
  return (
    <section className='border-1 md:w-2/5 border-[#E9E9E9] rounded-xl p-4'>
      <h1 className='text-2xl mb-8 font-semibold text-[#1F1F1F] pb-4 border-b-1 border-[#E9E9E9]'>
        Ticket Summary
      </h1>

      {/* ticet details */}
      <div className='flex flex-col md:flex-row gap-5'>
        <div>
          <Image
            src='/images/demo_ticket.png'
            alt='ticket suammry'
            height={100}
            width={100}
          />
        </div>

        <div className='flex flex-col flex-1 justify-between space-y-5 md:space-y-3 '>
          <h1 className='text-lg sm:text-2xl font-semibold text-[#1F1F1F]'>
            Indie Fim Night -Under the starts
          </h1>

          {/* date and time */}
          <div className='flex items-center justify-between  text-sm sm:text-base text-[#5C6170]'>
            <p>Jun. 04 2025</p>
            <p className='w-[1px] h-4 bg-[#5C6170]'></p>
            <p>4:00 pm (UTC +01:00)</p>
          </div>

          {/* bottom buttons */}
          <div className='flex md:px-2 justify-between items-center'>
            <div className='flex items-center gap-2 p-2 rounded-lg border-1 border-[#E9E9E9]'>
              <Image src='/gaurd.svg' alt='secured' height={18} width={18} />
              <p className='text-xs'>Anonymous</p>
            </div>
            <div className='flex items-center gap-2 p-2 rounded-lg border-1 border-[#E9E9E9]'>
              <Image src='/lock.svg' alt='secured' height={18} width={18} />
              <p className='text-xs'>Verified Access</p>
            </div>
          </div>
        </div>
      </div>

      {/* ticket stats */}
      <section className='space-y-4 sm:space-y-8 mt-6 p-4'>
        <div className='flex items-center justify-between'>
          <h2 className='font-semibold'>Tickets:</h2>
          <Link
            href=''
            className='font-semibold underline border-l-1 pl-1 text-[#6917AF] border-[#6917AF]'
          >
            Edit
          </Link>
        </div>
        <div className='flex items-center justify-between'>
          <p className='text-[#5C6170]'>General</p>
          <p className='text-[#5C6170]'>$0.00</p>
        </div>
        <div className='flex items-center py-4 border-y-1 border-[#E9E9E9] justify-between'>
          <p className='text-[#5C6170]'>SUBTOTAL</p>
          <p className='text-[#5C6170]'>$0.00</p>
        </div>
        <div className='flex items-center py-2 justify-between'>
          <p className='text-[#5C6170]'>TOTAL</p>
          <p className='font-semibold'>$0.00</p>
        </div>
      </section>
    </section>
  );
};

export default TicketSummary;
