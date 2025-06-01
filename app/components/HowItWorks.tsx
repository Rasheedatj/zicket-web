"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import EventSlider from "./EventSlider";

const steps = [
  {
    label: "Discover Private Events",
    title: "Explore Private Events",
    description: "We show you events based on your real interests, not algorithms. Whether it's rooftop parties, creative circles, or lowkey linkups, Zicket helps you find your scene.",
    bullets: [
      "Browse anonymously — no tracking",
      "Discover niche communities effortlessly",
      "No spam, no ads, no algorithm traps",
    ],
  },
  {
    label: "Buy Tickets Privately",
    title: "Buy Tickets Without Sharing Your Identity",
    description: "Skip the long forms and surveillance. With Zicket, your identity stays yours. Purchase access anonymously with crypto or traditional payment — no data trail.",
    bullets: [
      "No signups required",
      "Pay using crypto or fiat",
      "Get an encrypted Zicket receipt",
    ],
  },
  {
    label: "Receive Your Zicket",
    title: "Receive Your Zicket",
    description: "Once you pay, your Zicket (digital ticket) is delivered to your private wallet or inbox. Encrypted, verifiable, and uniquely yours.",
    bullets: [
      "Receive instantly to wallet or email",
      "Protected by blockchain tech",
      "Easily transferable (if allowed by host)",
    ],
  },
  {
    label: "Attend Seamlessly",
    title: "Show Up. Scan In. No Drama.",
    description: "All you need is your Zicket to enter. Hosts scan it with a QR code — no ID, no fuss. Smooth check-in that respects your privacy.",
    bullets: [
      "QR code or NFC tap entry",
      "No names or IDs needed",
      "Fast, secure event access",
    ],
  },
  {
    label: "Host With Ease",
    title: "Host Private or Public Events in Minutes",
    description: "Create, customize, and share your event page with ease. Choose your audience — private or public — and control every detail.",
    bullets: [
      "Build your event page fast",
      "Choose who sees your event",
      "Set ticket rules: free, paid, or invite-only",
    ],
  },
];

export default function HowItWorks() {
  const [selected, setSelected] = useState(0);

  return (
    <section>
      <div
        aria-label="How Zicket works"
        className="w-full flex flex-col md:flex-row gap-10 max-w-6xl mx-auto my-8"
      >
        <aside className="md:w-1/3 w-full flex flex-col gap-6">
          <h3 className="text-[20px] font-semibold [color:var(--color-text-main)] leading-tight mb-2">
            Here's how Zicket makes discovering and attending private events simple, safe, and social:
          </h3>
          <nav aria-label="Steps navigation">
            <ul className="flex md:flex-col flex-row md:gap-2 gap-1 overflow-x-auto md:overflow-visible relative">
              <div className="hidden md:block absolute left-0 top-0 h-full w-2 border-l-3 border-dotted [border-color:var(--color-divider)] z-0" />
              {steps.map((step, idx) => (
                <li key={step.label} className="relative z-10 flex items-center min-h-[56px]">
                  {selected === idx && (
                    <span
                      className="hidden md:block absolute -left-[0.20rem] top-1/2 -translate-y-1/2 w-2 h-10 rounded-full [background-color:var(--color-primary)] z-10"
                      style={{ width: 8, height: 40 }}
                    ></span>
                  )}
                  <button
                    className={`w-full text-left px-6 py-4 ml-8 transition-colors focus:outline-none text-[17px] relative flex items-center cursor-pointer text-black font-medium rounded-[8px] ${
                      selected === idx
                        ? "[background-color:var(--color-tab-selected)]"
                        : "hover:[background-color:var(--color-background-light)]"
                    }`}
                    aria-current={selected === idx ? "step" : undefined}
                    onClick={() => setSelected(idx)}
                    style={{ border: "none", minHeight: 56 }}
                  >
                    {step.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <AnimatePresence mode="wait">
          <motion.div
            key={selected}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="md:w-2/3 w-full [background-color:var(--color-background-light)] [border-color:var(--color-divider)] border rounded-lg p-8 shadow-sm transition-all duration-300 flex flex-col"
          >
            <h2 className="text-[20px] font-bold [color:var(--color-primary)] mb-2">{steps[selected].title}</h2>
            <hr className="border-t [border-color:var(--color-divider)] mb-4" />
            <p className="text-[15px] [color:var(--color-text-detail)] mb-6">{steps[selected].description}</p>
            <ul className="space-y-4">
              {steps[selected].bullets.map((b, i) => (
                <li key={i} className="flex items-center gap-3 [color:var(--color-text-main)] text-[15px]">
                  <Image src="/assets/icons/checkIcon.svg" alt="check" width={20} height={20} />
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="w-full flex flex-col items-center justify-center py-16">
        <EventSlider />
      </div>

      <div className="w-full flex flex-col items-center justify-center mt-6 mb-8 max-w-3xl mx-auto">
        <h2 className="text-center font-bold text-[4rem] sm:text-[3rem] md:text-[3.5rem] leading-tight [color:var(--color-text-detail)] flex flex-col">
          <span>Host in Peace. No</span>
          <span>Spreadsheets or Stalkers.</span>
        </h2>
        <p className="mt-4 text-center text-[1rem] max-w-2xl [color:var(--color-text-description)] flex flex-col">
          <span>Zicket gives creators and organizers tools to launch, ticket, and manage</span>
          <span>events without compromising guest privacy.</span>
        </p>
        <button className="mt-8 px-6 py-3 border-2 border-[color:var(--color-text-detail)] rounded-full flex items-center gap-2 text-[1rem] [color:var(--color-text-main)] hover:bg-[color:var(--color-tab-selected)] transition-colors font-bold cursor-pointer">
          Host An Event
          <span className="inline-block">
            <Image src="/assets/icons/arrowUpRightIcon.svg" alt="arrow up right" width={22} height={22} />
          </span>
        </button>
      </div>
    </section>
  );
} 