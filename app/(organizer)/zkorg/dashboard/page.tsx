import React from 'react';
import NavBar from '@/app/components/organizer/NavBar';

export default function OrgBoard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      
      {/* Dashboard Content */}
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Organizer Dashboard
            </h1>
            <p className="text-gray-600">
              Welcome to your event management dashboard. Monitor your events, orders, and more.
            </p>
          </div>

          {/* Quick Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100 text-sm font-medium">Total Events</p>
                  <p className="text-2xl font-bold">12</p>
                </div>
                <div className="bg-purple-400/20 rounded-full p-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 text-sm font-medium">Total Orders</p>
                  <p className="text-2xl font-bold">248</p>
                </div>
                <div className="bg-blue-400/20 rounded-full p-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100 text-sm font-medium">Revenue</p>
                  <p className="text-2xl font-bold">$12,450</p>
                </div>
                <div className="bg-green-400/20 rounded-full p-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-100 text-sm font-medium">Active Events</p>
                  <p className="text-2xl font-bold">8</p>
                </div>
                <div className="bg-orange-400/20 rounded-full p-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity Section */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h2>
            <div className="space-y-4">
              {[
                { action: "New order received", event: "Tech Conference 2024", time: "2 minutes ago", type: "order" },
                { action: "Event published", event: "Music Festival", time: "1 hour ago", type: "event" },
                { action: "Payment received", event: "Workshop Series", time: "3 hours ago", type: "payment" },
                { action: "New registration", event: "Business Summit", time: "5 hours ago", type: "registration" }
              ].map((activity, index) => (
                <div key={index} className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                  <div className={`w-3 h-3 rounded-full ${
                    activity.type === 'order' ? 'bg-blue-500' :
                    activity.type === 'event' ? 'bg-purple-500' :
                    activity.type === 'payment' ? 'bg-green-500' :
                    'bg-orange-500'
                  }`}></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                    <p className="text-sm text-gray-500">{activity.event}</p>
                  </div>
                  <div className="text-sm text-gray-400">
                    {activity.time}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Test Content for Navbar Scrolling */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Additional Dashboard Content (Test Scrolling)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <h4 className="font-medium text-gray-900">Content Block {i + 1}</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    This content helps test the navbar's sticky behavior when scrolling through the page.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}