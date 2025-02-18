import React, { useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, Maximize, ThumbsUp, ThumbsDown, Share, Download, Scissors, Bookmark, MoreHorizontal, Search, ChevronRight } from 'lucide-react';
import video from '../../assets/video.mp4'
import dp from '../../assets/DP.png'
import gar from '../../assets/gar.png'
const SpacesDetail = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  
  const recommendedVideos = Array(8).fill(null).map((_, index) => ({
    id: index + 1,
    title: '🔥 BARÇA 5-1 VIKTORIA PLZEN, LEWY STUNS WITH HAT-TRICK!',
    channel: 'FC Barcelona',
    verified: true,
    views: '449K',
    time: '22 hours ago',
    thumbnail: gar
  }));

  return (
    <div className="flex flex-col md:flex-row bg-white min-h-screen py-24 ">
      {/* Main content */}
      <div className="flex-1 p-4">
        {/* Video player */}
        <div className=" w-full" >
          <div className=" flex items-center justify-center">
            <video controls loop className="w-full h-full object-cover" src={video}></video>
          </div>
        </div>
        
        {/* Video info */}
        <div className="mt-3">
          <h1 className="text-xl font-bold">
            🔥 BARÇA 5-1 VIKTORIA PLZEN, LEWY STUNS WITH FIRST HAT-TRICK | UN DÍA DE PARTIT (EPISODE 2) 🔥
          </h1>
          <div className="flex items-center justify-between mt-2 text-sm text-gray-600">
            <span>132,757 views • 22 hours ago</span>
            <div className="flex space-x-4">
              <button className="flex items-center space-x-1">
                <ThumbsUp className="w-5 h-5" />
                <span>21K</span>
              </button>
              <button className="flex items-center space-x-1">
                <ThumbsDown className="w-5 h-5" />
                <span>DISLIKE</span>
              </button>
              <button className="flex items-center space-x-1">
                <Share className="w-5 h-5" />
                <span>SHARE</span>
              </button>
              <button className="flex items-center space-x-1">
                <Download className="w-5 h-5" />
                <span>DOWNLOAD</span>
              </button>
              <button className="flex items-center space-x-1">
                <Scissors className="w-5 h-5" />
                <span>CLIP</span>
              </button>
              <button className="flex items-center space-x-1">
                <Bookmark className="w-5 h-5" />
                <span>SAVE</span>
              </button>
              <button>
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Channel info */}
        <div className="flex items-start justify-between mt-4 pb-4 border-b border-gray-200">
          <div className="flex items-start space-x-3">
            <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white overflow-hidden">
              <img src={dp} alt="Channel avatar" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="flex items-center">
                <h3 className="font-bold">FC Barcelona</h3>
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 ml-1 text-gray-500">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-sm text-gray-600">14.1M subscribers</p>
            </div>
          </div>
          <button 
            className={`px-4 py-2 rounded-sm font-medium ${isSubscribed ? 'bg-gray-200 text-gray-800' : 'bg-green-600 text-white'}`}
            onClick={() => setIsSubscribed(!isSubscribed)}
          >
            {isSubscribed ? 'SUBSCRIBED' : 'SUBSCRIBE'}
          </button>
        </div>
        
        {/* Description */}
        <div className="mt-4 text-sm">
          <p>Three from Lewandowski and one each for Franck Kessie and Ferran Torres get the Champions League off to the perfect start</p>
          <button className="mt-2 text-gray-600 font-medium">SHOW MORE</button>
        </div>
        
        {/* Comments section */}
        <div className="mt-6">
          <div className="flex items-center justify-between mb-4">
            <span className="font-medium">604 Comments</span>
            <button className="flex items-center text-gray-600">
              <span className="mr-1">SORT BY</span>
            </button>
          </div>
          
          {/* Comment input */}
          <div className="flex space-x-3 mb-6">
            <img src={dp} alt="" />
            <input 
              type="text" 
              placeholder="Add a comment..." 
              className="flex-1 border-b border-gray-300 outline-none focus:border-gray-500 pb-1"
            />
          </div>
          
          {/* Sample comment */}
          <div className="flex space-x-3">
            <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden">
              <img src={dp} alt="Jenny Wilson" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="flex items-center">
                <span className="font-medium text-sm">Jenny Wilson</span>
                <span className="text-xs text-gray-500 ml-2">3 days ago (edited)</span>
              </div>
              <p className="mt-1 text-sm">
                Lewandowski once again shows his high level. He is really a level above the rest of the attackers.
                I'm really happy for Dembele, he is doing his best for the team. His assist to Lewandowski was beautiful.🔥
              </p>
              <div className="flex items-center mt-2 space-x-4 text-sm text-gray-600">
                <button className="flex items-center"><ThumbsUp className="w-4 h-4 mr-1" /> 582</button>
                <button><ThumbsDown className="w-4 h-4" /></button>
                <button>REPLY</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Sidebar with recommended videos */}
      <div className="w-full md:w-80 lg:w-96 p-4 border-t md:border-t-0 md:border-l border-gray-200">
        {/* Filter tags */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-3 whitespace-nowrap mb-4">
          <button className="px-3 py-1 bg-black text-white text-sm rounded-full">All</button>
          <button className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">Gaming</button>
          <button className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">FC Barcelona</button>
          <button className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">Apple</button>
          <button className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">Sports</button>
          <button className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full">
            <ChevronRight size={16} />
          </button>
        </div>
        
        {/* Recommended videos */}
        <div className="space-y-3">
          {recommendedVideos.map(video => (
            <div key={video.id} className="flex space-x-2">
              <div className="w-40 h-20 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-medium line-clamp-2">{video.title}</h3>
                <div className="flex items-center mt-1 text-xs text-gray-600">
                  <span>{video.channel}</span>
                  {video.verified && (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 ml-1 text-gray-500">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                </div>
                <div className="text-xs text-gray-600 mt-0.5">
                  <span>{video.views} views</span>
                  <span className="mx-1">•</span>
                  <span>{video.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpacesDetail;