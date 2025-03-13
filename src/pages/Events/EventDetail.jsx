import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import dp from '../../assets/profile.png';
import gar from '../../assets/gar.png';
import { axiosPrivateForm } from '../../store/axios';

const EventDetail = () => {
  const { event_id } = useParams(); // Extract article_id from the URL
  const [articleData, setArticleData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log("articleData", articleData)
  console.log("articleDasdcsdta", event_id)
  // Fetch article data from the API
  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axiosPrivateForm.get(`/event/get-event-by-id?id=${event_id}`);
        setArticleData(response.data.data); 
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchArticle();
  }, [event_id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!articleData) return <div>No article found</div>;
  return (
    <div className="bg-gray-50 min-h-screen p-6 mt-24">
      <div className="max-w-6xl mx-auto">
        {/* Main article card */}
        <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left side - Main image */}
            <div className="lg:w-2/3">
              <img 
                src={articleData?.banner_image} // Use the image URL from the API
                alt="Article main image" 
                className="w-full h-64 object-cover rounded-xl"
              />
            </div>
            
            {/* Right side - Details */}
            <div className="lg:w-1/3 bg-gray-100 rounded-xl p-5">
              <h3 className="text-gray-700 font-medium mb-4">Details</h3>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Date</span>
                  <span className="text-gray-800">{new Date(articleData.event_date).toLocaleDateString()}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Time</span>
                  <span className="text-gray-800">{articleData.event_time}</span>
                </div>
                
                <div className="flex flex-col sm:flex-row justify-between">
  <span className="text-gray-600">Location</span>
  <span className="text-gray-800 break-words w-full sm:w-auto max-w-[200px]">{articleData.location || "null"}</span>
</div>

              </div>
              
              {/* Author info */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <div className="flex items-center gap-3 mb-2">
                  <img 
                    src={articleData.organizer?.avatar || dp} // Fallback to default avatar
                    alt="Author avatar" 
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-gray-800 font-medium">{articleData.organizer?.name || "Unknown Author"}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <h1 className=' text-2xl text-md font-medium'>Description</h1>
            <h2 className="text-black text-sm font-normal mt-4 break-words">
              {articleData.event_description}
            </h2>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;