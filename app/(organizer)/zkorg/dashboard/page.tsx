import React from 'react';
import NavBar from '@/app/components/organizer/NavBar';
import Summary from "@/app/components/organizer/analytics/Summary";

export default function OrgBoard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <Summary />
      
    </div>
  );
}
