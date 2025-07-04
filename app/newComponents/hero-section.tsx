import React from "react";
import { Button } from "@/components/ui/button";
import { Search, User, ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Navigation Bar */}
      

      {/* Hero Content */}
      <div className="flex flex-col items-center justify-center text-center px-6 py-20 md:py-32">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Public or Private Events.
          <br />
          <span className="bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
            Host Freely. Attend Silently.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-white/70 mb-12 max-w-2xl">
          Empowering hosts. Shielding guests. Reinventing event privacy.
        </p>

        <Button
          size="lg"
          className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white border-none px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          <span>Explore Events Anonymously</span>
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </div>

      {/* Trust Markers */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/5 backdrop-blur-lg border-t border-white/10">
        <div className="flex items-center justify-center space-x-8 py-6">
          <div className="flex items-center space-x-2">
            <span className="text-white/60 text-sm">Trust markers</span>
          </div>

          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">S</span>
            </div>
            <span className="text-white/80 text-sm font-medium">STARKNET</span>
          </div>

          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">A</span>
            </div>
            <span className="text-white/80 text-sm font-medium">Aztec</span>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20 pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
    </div>
  );
}
