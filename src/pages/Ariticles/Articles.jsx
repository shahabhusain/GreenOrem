import React, { useEffect, useState } from 'react';
import dp from '../../assets/profile.png';
import gar from '../../assets/gar.png';
import { Link } from 'react-router-dom';
import { axiosPrivateForm } from '../../store/axios';
import { MdOutlineMessage } from "react-icons/md";
import { PiCalendarStarDuotone } from "react-icons/pi";
const Articles = () => {
  const [data, setData] = useState([]);

  console.log("data", data)

   useEffect(() => {   
       const fetchArticles = async () => {
         try {
           const response = await axiosPrivateForm.get("/article/get-all-articles");
   
           if (response.status === 200) {
             setData(response.data.data); 
           }
         } catch (error) {
           console.error("Error fetching comments:", error);
         }
       };
   
       fetchArticles();
     }, []);
   
  // Sample data for the article cards
  const articles = Array(9).fill({
    title: "Lorem ipsum dolor sit amet consectetur",
    description: "Lorem ipsum dolor sit amet consectetur. Faucibus sed nibh massa ornare at gravida a morbi. Eget facilisis fermentum quisque amet vitae praesent auctor.",
    image: gar,
    author: "Daryll Green",
    authorAvatar: dp
  });

  const totalPages = 6;
  const currentPage = 2;

  if (data.length === 0) return <div className='loader1'></div>;

  return (
    <div className="bg-gray-50 min-h-screen p-6 mt-24">
      {/* Header with publish button */}
      <Link to="/group/createArticle" className="flex justify-end mb-6">
        <button className="bg-green-500 text-white px-4 py-2 rounded-full font-medium">
          Publish Article
        </button>
      </Link>

      {/* Article grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((article, index) => (
          <div key={index} className="bg-white rounded-xl p-4 shadow-sm">
            {/* Article image */}
            <Link to={`/group/articleDetail/${article._id}`} className="mb-3">
              <img 
                src={article.image_url} 
                alt="Article preview" 
                className="w-full h-40 object-cover rounded-lg"
              />
            </Link>
            
            {/* Article title */}
            <h3 className="text-green-500 text-lg font-medium mb-2">
              {article.article_title.slice(0, 20)}...
            </h3>
            
            {/* Article description */}
            <p className="text-gray-500 text-sm mb-4">
              {article.article_description.slice(0, 30)}...
            </p>
            
            {/* Author info and action buttons */}
            <div className="flex items-center justify-between">
              {/* Author */}
              <div className="flex items-center gap-2">
                <img 
                  src={article.user.profileImg || dp } 
                  alt="Author avatar" 
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-sm text-gray-700">{article.user.name}</span>
              </div>
              
              {/* Action buttons */}
              <div className="flex gap-2">
                <button className="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center">
                  <span className="text-green-500 text-xs"><MdOutlineMessage size={20} /></span>
                </button>
                <button className="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center">
                  <span className="text-orange-500 text-xs"><PiCalendarStarDuotone size={20} /></span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced Pagination */}
      <div className="flex justify-center mt-8 items-center gap-2">
        {/* Previous page button */}
        <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </button>
        
        {/* Page numbers
        {[1, 2, 3, 4, 5, 6].map((pageNum) => (
          <button 
            key={pageNum}
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
              pageNum === currentPage 
                ? 'bg-green-500 text-white' 
                : 'text-gray-500 hover:bg-gray-100'
            }`}
          >
            {pageNum}
          </button>
        ))} */}
        
        {/* Next page button
        <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </button> */}
      </div>
    </div>
  );
};

export default Articles;