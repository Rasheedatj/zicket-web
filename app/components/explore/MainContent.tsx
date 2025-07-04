"use client";

import { useState } from "react";
import Card from "./card";
import { EmptyStateIcon } from "@/public/svg/svg";
import CustomDropdown from "./CustomDropdown";
import { dummyEvents } from "@/lib/dummyEvents/events";

function MainContent() {
  const [events] = useState(dummyEvents);
  const [selectedPrivacy, setSelectedPrivacy] = useState<string | null>(null);
  const [selectedPrice, setSelectedPrice] = useState<string | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedEventType, setSelectedEventType] = useState<string | null>(null);
  const [showCount, setShowCount] = useState(8);

  const privacyOptions = [
    { content: "All", onClick: () => setSelectedPrivacy(null) },
    ...Array.from(new Set(events.map((event) => event.type))).map((privacy) => ({
      content: privacy,
      onClick: () => setSelectedPrivacy(privacy),
    })),
  ];
  const priceOptions = [
    { content: "All", onClick: () => setSelectedPrice(null) },
    ...Array.from(new Set(events.map((event) => event.price.toString()))).sort(
      (a, b) => parseFloat(a.replace("$", "")) - parseFloat(b.replace("$", ""))
    ).map((price) => ({
      content: price,
      onClick: () => setSelectedPrice(price.toString()),
    })),
  ];
  const locationOptions = [
    { content: "All", onClick: () => setSelectedLocation(null) },
    ...Array.from(new Set(events.map((event) => event.location))).map((location) => ({
      content: location,
      onClick: () => setSelectedLocation(location),
    })),
  ];
  const dateOptions = [
    { content: "All", onClick: () => setSelectedDate(null) },
    ...Array.from(new Set(events.map((event) => event.date))).sort().map((date) => ({
      content: date,
      onClick: () => setSelectedDate(date),
    })),
  ];
  const eventTypeOptions = [
    { content: "All", onClick: () => setSelectedEventType(null) },
    ...Array.from(new Set(events.map((event) => event.type))).map((type) => ({
      content: type,
      onClick: () => setSelectedEventType(type),
    })),
  ];

  const filterConfigs = [
    {
      key: 'privacy',
      label: 'Privacy Level',
      options: privacyOptions.slice(1).map(opt => opt.content),
      value: selectedPrivacy,
      setValue: setSelectedPrivacy,
    },
    {
      key: 'price',
      label: 'Pricing',
      options: priceOptions.slice(1).map(opt => opt.content),
      value: selectedPrice,
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
      options: dateOptions.slice(1).map(opt => opt.content),
      value: selectedDate,
      setValue: setSelectedDate,
    },
    {
      key: 'eventType',
      label: 'Category',
      options: eventTypeOptions.slice(1).map(opt => opt.content),
      value: selectedEventType,
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

  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2 border-t border-b border-t-[#F0F2F5] border-b-[#F0F2F5] py-2">
        <div className="flex flex-wrap items-center gap-2 text-sm">
          <span className="font-medium text-[#7C3AED] mr-1">Filters:</span>
          {filterConfigs.map(f => (
            <CustomDropdown
              key={f.key}
              label={f.label}
              options={f.options}
              value={f.value}
              onChange={f.setValue}
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
      <div className="flex flex-wrap gap-2 mb-4 mt-1">
        {filterConfigs.map(f => f.value && (
          <span key={f.key} className="gap-2 justify-between align-center px-3 rounded-[8px] border border-[#7C3AED] text-[#6B7280] bg-white flex items-center text-base font-semibold">
            {f.value} <button className="text-[#6B7280] text-[25px] cursor-pointer font-semibold" onClick={() => f.setValue(null)}>×</button>
          </span>
        ))}
      </div>
      {filteredEvents.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24">
          <EmptyStateIcon />
          <p className="text-lg font-semibold text-gray-700 mb-2">No events found</p>
          <p className="text-gray-500 text-sm text-center max-w-xs">Try adjusting your filters or check back later for new events.</p>
        </div>
      ) : (
        <div className="space-y-10">
          <div className="grid-cols-1 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
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
          <div className="flex justify-center mt-8">
            {filteredEvents.length > showCount ? (
              <button
                onClick={handleShowMore}
                className="px-5 py-2 rounded-full bg-[#F6F6F6] text-[#1E1E1E] font-medium flex items-center gap-2 border border-[#E9E9E9] hover:bg-[#E9E9E9] transition"
              >
                Show more <span className="inline-block ml-1 text-lg" style={{transform: 'rotate(0deg)'}}>▼</span>
              </button>
            ) : filteredEvents.length > 8 ? (
              <button
                onClick={handleShowLess}
                className="px-5 py-2 rounded-full bg-[#F6F6F6] text-[#1E1E1E] font-medium flex items-center gap-2 border border-[#E9E9E9] hover:bg-[#E9E9E9] transition"
              >
                Show less <span className="inline-block ml-1 text-lg" style={{transform: 'rotate(180deg)'}}>▲</span>
              </button>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
}

export default MainContent;
