import React from "react";

const SkeletonCard = () => (
  <div className="max-w-sm rounded-2xl p-2 border-2 bg-white border-[#E9E9E9] flex flex-col items-center animate-pulse">
    <div className="border rounded-xl border-[#E9E9E9] w-full h-40 bg-gray-200" />
    <div className="p-4 w-full space-y-4">
      <div className="h-6 bg-gray-200 rounded w-3/4 mb-2" />
      <div className="h-4 bg-gray-200 rounded w-1/2 mb-2" />
      <div className="h-4 bg-gray-200 rounded w-1/3 mb-2" />
      <div className="h-4 bg-gray-200 rounded w-2/3 mb-2" />
      <div className="h-8 bg-gray-200 rounded w-1/2" />
    </div>
  </div>
);

export default SkeletonCard; 