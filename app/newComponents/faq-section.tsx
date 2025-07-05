"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import { useState } from "react";

export function FAQSection() {
  const [openItem, setOpenItem] = useState<number | null>(null); // All items closed by default

  const faqs = [
    {
      question: "What makes Zicket unique?",
      answer:
        "Zicket is a privacy-first event platform built for fans. It lets you discover and attend events anonymously, while keeping your personal data secure. You only share what you choose.",
    },
    {
      question: "Do I need an account to get tickets?",
      answer:
        "No account required! You can browse and purchase tickets anonymously. We only collect the minimum information needed to deliver your tickets securely.",
    },
    {
      question: "Is my identity hidden when I attend events?",
      answer:
        "Yes, your personal identity remains private. Event organizers only receive the necessary information to verify your ticket, not your personal details.",
    },
    {
      question: "What kind of events are on Zicket?",
      answer:
        "Zicket hosts a wide variety of events including concerts, festivals, sports events, comedy shows, theater performances, and exclusive fan meetups.",
    },
  ];

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">FAQs</h2>
          <p className="text-gray-600">
            Find all you need to know about Zicket – how it works, what makes it
            unique, and how you can get the most out of your events.
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className="p-6 transition-all duration-200 hover:shadow-md"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full flex justify-between items-center text-left"
              >
                <h3 className="font-semibold">{faq.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-purple-600 transition-transform duration-200 ${
                    openItem === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openItem === index && (
                <div className="mt-4 overflow-hidden">
                  <p className="text-gray-600 animate-in slide-in-from-top-2 duration-200">
                    {faq.answer}
                  </p>
                </div>
              )}
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="mt-16 mx-auto flex border border-[#2C0A4A] rounded-full py-2 px-3 text-[#2C0A4a] cursor-pointer">
            View More <ArrowUpRight w-5 h-5 />
          </button>
        </div>
      </div>
    </section>
  );
}
