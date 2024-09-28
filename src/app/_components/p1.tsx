import React from 'react';

const AthleteAI = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center">
      {/* Navbar */}
      <nav className="w-full bg-gray-900 flex justify-between items-center px-8 py-4">
        <div className="text-xl font-bold text-indigo-300">AthleteAI</div>
        <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
          Try Now
        </button>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between w-full lg:w-3/4 mx-auto mt-16 px-8 lg:px-0">
        <div className="lg:w-1/2 space-y-6">
          <h1 className="text-4xl lg:text-6xl font-extrabold text-white">
            Unlock Your <span className="text-purple-400">Potential</span> with
            <span className="text-indigo-400"> AthleteAI</span>
          </h1>

          <p className="text-gray-400 text-lg">
            AthleteAI is an intelligent coach that leverages AI to give you feedback on your sports performance. Upload a video and give it a try!
          </p>
          <div className="space-x-4">
            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
              Get Started
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
              How it Works
            </button>
          </div>
        </div>
        
        <div className="lg:w-1/2 mt-10 lg:mt-0">
          <iframe
            className="w-full h-64 lg:h-80"
            src="https://www.youtube.com/embed/VIDEO_ID"
            title="AthleteAI Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default AthleteAI;
