"use client";

import { useState, useEffect } from "react";
import Card from "./card";
import { EmptyStateIcon, ArrowRightIcon } from "@/public/svg/svg";
import CustomDropdown from "./CustomDropdown";
import { dummyEvents } from "@/lib/dummyEvents/events";
import SkeletonCard from "./SkeletonCard";


function MainContent() {
  const [events] = useState(dummyEvents);
  const [selectedPrivacy, setSelectedPrivacy] = useState<string | null>(null);
  const [selectedPrice, setSelectedPrice] = useState<string | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedEventType, setSelectedEventType] = useState<string | null>(null);
  const [showCount, setShowCount] = useState(8);
  const [loading, setLoading] = useState(false);

  const privacyOptions = [
    "Anonymous",
    "Verified Access",
    "Wallet Required"
  ];
  const priceOptions = [
    "Free Events Only",
    "Paid Events Only",
  ];
  const locationOptions = [
    { content: "All", onClick: () => setSelectedLocation(null) },
    ...Array.from(new Set(events.map((event) => event.location))).map((location) => ({
      content: location,
      onClick: () => setSelectedLocation(location),
    })),
  ];
  const dateOptions = [
    "Today",
    "This Week",
    "This Month"
  ];
  const eventTypeOptions = [
    "Music",
    "Tech & Web3",
    "Art & Culture",
    "Business",
    "Health & Wellness",
    "Education",
    "Community"
  ];

  const filterConfigs = [
    {
      key: 'privacy',
      label: 'Privacy Levels',
      options: privacyOptions,
      value: selectedPrivacy,
      showAllLabel: 'Show All',
      setValue: setSelectedPrivacy,
    },
    {
      key: 'price',
      label: 'Pricing',
      options: priceOptions,
      value: selectedPrice,
      showAllLabel: 'All Events',
      setValue: setSelectedPrice,
    },
    {
      key: 'location',
      label: 'Location',
      options: locationOptions.slice(1).map(opt => opt.content),
      value: selectedLocation,  
      setValue: setSelectedLocation,
    },
    {
      key: 'date',
      label: 'Date Range',
      options: dateOptions,
      value: selectedDate,
      setValue: setSelectedDate,
    },
    {
      key: 'eventType',
      label: 'Category',
      options: eventTypeOptions,
      value: selectedEventType,
      showAllLabel: 'All Category',
      setValue: setSelectedEventType,
    },
  ];

  const filteredEvents = events.filter((event) => {
    const matchLocation = !selectedLocation || event.location === selectedLocation;
    const matchPrice = !selectedPrice || event.price.toString() === selectedPrice;
    const matchDate = !selectedDate || event.date === selectedDate;
    const matchType = !selectedEventType || event.type === selectedEventType;
    const matchPrivacy = !selectedPrivacy || event.type === selectedPrivacy;
    return (
      matchLocation && matchPrice && matchDate && matchType && matchPrivacy
    );
  });

  const handleShowMore = () => {
    setShowCount((prev) => prev + 8);
  };
  const handleShowLess = () => {
    setShowCount(8);
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, [selectedPrivacy, selectedPrice, selectedLocation, selectedDate, selectedEventType, showCount]);

  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2 border-t border-b border-t-[#F0F2F5] border-b-[#F0F2F5] py-2">
        <div className="flex flex-wrap items-center gap-2 text-sm w-full md:w-auto">
          <span className="font-medium text-[#7C3AED] mr-1">Filters:</span>
          {filterConfigs.map(f => (
            <CustomDropdown
              key={f.key}
              label={f.label}
              options={f.options}
              value={f.value}
              onChange={f.setValue}
              showAllLabel={f.showAllLabel}
            />
          ))}
        </div>
        <div className="flex items-center gap-2 mt-2 md:mt-0">
          <span className="text-sm text-[#6B7280]">Sort by:</span>
          <CustomDropdown
            label="Trending Now"
            options={["Trending Now"]}
            value={"Trending Now"}
            onChange={() => {}}
          />
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4 mt-1 w-full min-h-[32px]">
        <div className="flex flex-wrap gap-2 min-h-[28px]">
          {filterConfigs.map(f => f.value && (
            <span key={f.key} className="gap-2 justify-between align-center px-2 rounded-[8px] border border-[#7C3AED] text-[#6B7280] bg-white flex items-center text-base font-semibold h-7">
              {f.value}
              <button
                className="text-[#6B7280] text-2xl flex items-center justify-center w-2 h-7 mb-1 rounded-full cursor-pointer"
                style={{ lineHeight: 1 }}
                onClick={() => f.setValue(null)}
                aria-label="Remove filter"
              >
                ×
              </button>
            </span>
          ))}
          {filterConfigs.every(f => !f.value) && (
            <span className="invisible h-7 px-3">placeholder</span>
          )}
        </div>
        <div className="text-xs text-[#6B7280] ml-auto">
          Showing 1 - {Math.min(showCount, filteredEvents.length)} of {filteredEvents.length} results
        </div>
      </div>
      {loading ? (
        <div className="space-y-10">
          <div className="grid-cols-1 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
            {Array.from({ length: Math.min(showCount, filteredEvents.length || 8) }).map((_, idx) => (
              <SkeletonCard key={idx} />
            ))}
          </div>
        </div>
      ) : filteredEvents.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24">
          <EmptyStateIcon />
          <p className="text-lg font-semibold text-gray-700 mb-2">No events found</p>
          <p className="text-gray-500 text-sm text-center max-w-xs">Try adjusting your filters or check back later for new events.</p>
        </div>
      ) : (
        <div className="space-y-10">
          <div className="grid-cols-1 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
            {filteredEvents.slice(0, showCount).map((event, index) => (
              <Card
                key={index}
                date={event.date}
                location={event.location}
                price={"$" + event.price.toLocaleString()}
                time={event.time}
                title={event.title}
              />
            ))}
          </div>
          <div className="flex items-center justify-center relative mt-8">
            <button
              onClick={
                filteredEvents.length > showCount
                  ? handleShowMore
                  : handleShowLess
              }
              className="text-xs py-2 pl-4 pr-3 space-x-2 text-[#1E1E1E] bg-[#F6F6F6] hover:bg-[#F6F6F6]/10 rounded-full font-bold flex items-center cursor-pointer"
            >
              <span>
                {filteredEvents.length > showCount ? "Show more" : "Show less"}
              </span>
              <div
                className={`$ {
                  filteredEvents.length > showCount ? "-rotate-90" : "-rotate-270"
                } transform`}
              >
                <ArrowRightIcon isActive={false} />
              </div>
            </button>
            <button
              onClick={scrollToTop}
              className="absolute right-0 bg-[#F6F6F6] hover:bg-[#F6F6F6]/10 rotate-270 transform p-3 rounded-full cursor-pointer"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 15L12 10L7 5" stroke="#1E1E1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MainContent;
