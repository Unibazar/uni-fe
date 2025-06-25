import React from "react";

export default function Amazon() {
  return (
    <div className="flex flex-col items-center space-y-6 p-6 bg-gray-100 min-h-screen">
      {/* Title Section */}
      <h2 className="text-2xl font-bold text-gray-800">How to Link Your Platform: Amazon</h2>
      
      {/* Video Player */}
      <div className="w-full max-w-2xl bg-white p-4 rounded-lg shadow-md">
        <div className="relative w-full aspect-video bg-black flex items-center justify-center">
        <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/Ec7zLUi16JU?si=-WCMlrIgEj6qEk3p" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen></iframe>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="w-full max-w-lg p-4 space-y-4 bg-white rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-900">Follow These Steps</h3>
        <p className="text-gray-700">
          1. Go to Amazon Seller Central and log in to your account.
        </p>
        <p className="text-gray-700">
          2. Navigate to 'Account Settings' and locate the API section.
        </p>
        <p className="text-gray-700">
          3. Copy the API key and paste it into your platform’s integration settings.
        </p>
        <p className="text-gray-700">
          4. Click 'Save' and test the connection to ensure everything works smoothly.
        </p>
      </div>
    </div>
  );
}
