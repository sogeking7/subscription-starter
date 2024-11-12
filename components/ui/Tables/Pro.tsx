import React from 'react';

const ProPlanTable = () => {
  // Data for Pro Plan features
  const proPlanData = [
    { feature: "Everything in Premium Plan", description: "All Premium Plan features included." },
    { feature: "24/7 Virtual Coach Support", description: "Access to a virtual coach for guidance anytime." },
    { feature: "Exclusive Member Features", description: "Special programs and advanced tracking tools." },
    { feature: "Access to Special Events", description: "Exclusive events and webinars for Pro members." },
  ];

  return (
    <div className="flex justify-center py-8">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg overflow-hidden">
        <h2 className="text-2xl font-bold text-center text-gray-800 p-6 bg-gray-100">Pro Plan - $99.99/month</h2>
        <table className="min-w-full text-left bg-white">
          <thead>
            <tr>
              <th className="px-6 py-3 text-sm font-semibold text-gray-700 bg-gray-200 border-b">Feature</th>
              <th className="px-6 py-3 text-sm font-semibold text-gray-700 bg-gray-200 border-b">Description</th>
            </tr>
          </thead>
          <tbody>
            {proPlanData.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-gray-800 border-b">{item.feature}</td>
                <td className="px-6 py-4 text-gray-600 border-b">{item.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProPlanTable;