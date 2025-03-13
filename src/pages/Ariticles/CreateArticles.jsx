import React, { useState } from 'react';
import { axiosPrivateForm } from '../../store/axios';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
const CreateArticles = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null); // State for image preview URL
  const [loading, setLoading] = useState(false);

  const categories = ['Climate Change', 'Sustainability', 'Renewable Energy', 'Wildlife & Conservation'];

  // Handle image selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file)); // Generate and set the preview URL
    }
  };

  // Handle API Submission
  const handlePublish = async () => {
    if (!title || !description || !selectedCategory || !image) {
      alert('Please fill in all fields');
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append('article_title', title);
    formData.append('article_category', selectedCategory);
    formData.append('article_description', description);
    formData.append('image_url', image);

    try {
      const response = await axiosPrivateForm.post('/article/create-article', formData);

      toast.success('Article Published Successfully!');
      console.log(response.data);
    } catch (error) {
      console.error('Error publishing article:', error);
      toast.error('Failed to publish article.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center mt-20">
      <ToastContainer />
      <div className="w-full bg-white rounded-2xl p-8 shadow-sm">
        {/* Image Upload and Preview */}
        <div className="border-2 border-dashed border-green-200 rounded-lg p-10 mb-8 flex flex-col items-center justify-center">
          {imagePreview ? (
            <img src={imagePreview} alt="Preview" className="mb-4 max-w-full h-48 object-cover rounded-lg" />
          ) : (
            <span className="text-gray-500">No image selected</span>
          )}
          <input type="file" onChange={handleImageChange} accept="image/*" className="hidden" id="imageUpload" />
          <label htmlFor="imageUpload" className="cursor-pointer bg-white text-green-500 border border-green-500 px-4 py-1 rounded-full text-sm mt-4">
            {image ? 'Change Image' : 'Browse files'}
          </label>
        </div>

        {/* Title Input */}
        <div className="mb-4">
          <label className="block text-gray-800 font-medium mb-2">Title</label>
          <input
            type="text"
            className="w-full p-3 border border-gray-200 rounded-lg"
            placeholder="Enter article title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* Category Dropdown */}
        <div className="mb-4">
          <label className="block text-gray-800 font-medium mb-3">Category</label>
          <div className="relative">
            <button className="w-full p-3 border border-gray-200 rounded-lg text-left text-gray-500 flex justify-between items-center" onClick={() => setDropdownOpen(!dropdownOpen)}>
              {selectedCategory || 'Select Category'}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
              </svg>
            </button>
            {dropdownOpen && (
              <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg">
                {categories.map((category, index) => (
                  <li key={index} className="px-4 py-2 hover:bg-gray-50 cursor-pointer" onClick={() => { setSelectedCategory(category); setDropdownOpen(false); }}>
                    {category}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block text-gray-800 font-medium mb-3">Description</label>
          <textarea className="w-full border border-gray-200 rounded-lg p-4 min-h-40" rows={8} placeholder="Type your description here..." value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-4">
          <button className="bg-gray-500 text-white px-5 py-2 rounded-lg">Save as Draft</button>
          <button className="bg-green-500 text-white px-5 py-2 rounded-lg" onClick={handlePublish} disabled={loading}>
            {loading ? 'Publishing...' : 'Publish Article'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateArticles;