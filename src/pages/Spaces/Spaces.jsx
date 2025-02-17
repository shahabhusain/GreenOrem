import React, { useState } from 'react';
import { Clock } from 'lucide-react';
import gar from '../../assets/gar.png'
import dp from '../../assets/DP.png'
// Filter tag component
const FilterTag = ({ label, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1 rounded-full text-sm mr-2 mb-2 transition-colors ${
        isActive
          ? 'bg-green-600 text-white'
          : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
      }`}
    >
      {label}
    </button>
  );
};

// Article card component
const ArticleCard = ({ image, title, username, views, hours, duration }) => {
  return (
    <div className="mb-6">
      {/* Card image with duration badge */}
      <div className="relative rounded-lg overflow-hidden mb-3">
        <img
          src={gar || '/api/placeholder/400/250?text=Thumbnail'}
          alt={title}
          className="w-full aspect-video object-cover"
        />
        <span className="absolute bottom-2 right-2 bg-black/75 text-white text-xs px-1.5 py-0.5 rounded">
          {duration}
        </span>
      </div>

      {/* User avatar and article info */}
      <div className="flex items-start">
        {/* Avatar */}
        <div className="flex-shrink-0 mr-3">
          <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
            <img
              src={dp}
              alt={username}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content info */}
        <div className="flex-1">
          <h3 className="text-sm font-medium mb-1 line-clamp-2">{title}</h3>
          <div className="flex items-center text-xs text-gray-600">
            <span>{username}</span>
            {username.includes('Pixelgrade') && (
              <span className="ml-1 inline-block w-3 h-3">
                <svg viewBox="0 0 24 24" fill="currentColor" className="text-blue-500">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
            )}
          </div>
          <div className="flex items-center text-xs text-gray-500 mt-0.5">
            <span>{views} views</span>
            <span className="mx-1">•</span>
            <span>{hours} hours ago</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main component
const Spaces = () => {
  const [activeTag, setActiveTag] = useState('All');

  // Filter tags
  const tags = [
    'All',
    'Top Rated',
    'Global events',
    'Apple',
    'Sports leagues',
    'User interface design',
    'Music',
    'Mixes',
    'Live',
    'Football'
  ];

  // Sample articles data
  const articles = [
    {
      id: 1,
      image: '/api/placeholder/400/250?text=WordPress',
      title: 'How to optimize images in WordPress for faster loading',
      username: 'YC Gainsbury',
      isVerified: false,
      views: '445K',
      hours: '21',
      duration: '8:26'
    },
    {
      id: 2,
      image: '/api/placeholder/400/250?text=Pixelgrade',
      title: 'Lessons and insights from 8 years of Pixelgrade',
      username: 'FC Reference',
      isVerified: true,
      views: '445K',
      hours: '22',
      duration: '8:36'
    },
    {
      id: 3,
      image: '/api/placeholder/400/250?text=GraphicDesign',
      title: 'How a visual artist redefines success in graphic design',
      username: 'FC Reference',
      isVerified: true,
      views: '445K',
      hours: '22',
      duration: '8:26'
    },
    {
      id: 4,
      image: '/api/placeholder/400/250?text=Theme',
      title: 'Why choose a theme that looks good with testimonials',
      username: 'YC Gainsbury',
      isVerified: false,
      views: '445K',
      hours: '22',
      duration: '8:46'
    },
    {
      id: 5,
      image: '/api/placeholder/400/250?text=Content',
      title: 'How to write content about your photographs',
      username: 'FC Reference',
      isVerified: true,
      views: '445K',
      hours: '22',
      duration: '8:36'
    },
    {
      id: 6,
      image: '/api/placeholder/400/250?text=Pixelgrade2',
      title: 'The unseen of spending three years at Pixelgrade',
      username: 'FC Reference',
      isVerified: true,
      views: '445K',
      hours: '22',
      duration: '8:26'
    },
    {
      id: 7,
      image: '/api/placeholder/400/250?text=Mountain',
      title: 'Why choose a theme that looks good with mountain photos',
      username: 'YC Gainsbury',
      isVerified: false,
      views: '445K',
      hours: '21',
      duration: '8:26'
    },
    {
      id: 8,
      image: '/api/placeholder/400/250?text=Norway',
      title: 'The unseen of spending three years at Pixelgrade',
      username: 'FC Reference',
      isVerified: true,
      views: '445K',
      hours: '22',
      duration: '8:36'
    },
    {
      id: 9,
      image: '/api/placeholder/400/250?text=Photography',
      title: 'How to choose the right customer for your photography business',
      username: 'FC Reference',
      isVerified: true,
      views: '445K',
      hours: '22',
      duration: '8:26'
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen p-4 md:p-6 mx-auto w-full ml-[26rem] mt-16">
      {/* Filter tags */}
      <div className="mb-6 overflow-x-auto whitespace-nowrap pb-2">
        {tags.map((tag) => (
          <FilterTag
            key={tag}
            label={tag}
            isActive={activeTag === tag}
            onClick={() => setActiveTag(tag)}
          />
        ))}
      </div>

      {/* Content grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-1">
        {articles.map((article) => (
          <ArticleCard
            key={article.id}
            image={article.image}
            title={article.title}
            username={article.username}
            views={article.views}
            hours={article.hours}
            duration={article.duration}
          />
        ))}
      </div>
    </div>
  );
};

export default Spaces;