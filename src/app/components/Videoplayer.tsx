// Import necessary dependencies
import React from 'react';

// Define your video player component
const VideoPlayer = () => {
  return (
    <div className="flex grid justify-center items-center  h-screen ">    
          <div className="relative">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/ABqqVBZh9tw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <div className="absolute flex  px-3 py-1 ">
                <button className="bg-red-800 px-3 py-1 rounded">←</button>
                <button className="bg-red-800 px-3 py-1 rounded">→</button>
            </div>
        </div>
    </div>
  );
};

export default VideoPlayer;
