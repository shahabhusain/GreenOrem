import React, { useState } from 'react';
import { axiosPrivateForm } from '../../store/axios';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
const CreateEvent = () => {
  const [eventName, setEventName] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [eventType, setEventType] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventTime, setEventTime] = useState('');
  const [location, setLocation] = useState('');
  const [eventLink, setEventLink] = useState('');
  const [eventPrivacy, setEventPrivacy] = useState('public');
  const [bannerImage, setBannerImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const eventTypes = ['online', 'offline'];
  const privacyOptions = ['public', 'private'];

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setBannerImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handlePublish = async () => {
    if (!eventName || !eventDescription || !eventType || !eventDate || !eventTime || 
        (eventType === "offline" && !location) || (eventType === "online" && !eventLink) || 
        !bannerImage) {
      alert('Please fill in all required fields');
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append('event_name', eventName);
    formData.append('event_description', eventDescription);
    formData.append('event_type', eventType);
    formData.append('event_date', eventDate);
    formData.append('event_time', eventTime);
    formData.append('location', eventType === "offline" ? location : ""); 
    formData.append('event_link', eventType === "online" ? eventLink : "");
    formData.append('event_privacy', eventPrivacy);
    formData.append('banner_image', bannerImage);

    try {
      const response = await axiosPrivateForm.post('/event/create-event', formData);
      toast.success('Event Published Successfully!');
      console.log(response.data);
    } catch (error) {
      console.error('Error creating event:', error);
      toast.error('Failed to publish event.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center mt-20">
      <div className="w-full bg-white rounded-2xl p-8 shadow-sm">
        <ToastContainer />
        {/* Image Upload and Preview */}
        <div className="border-2 border-dashed border-green-200 rounded-lg p-10 mb-8 flex flex-col items-center justify-center">
          {imagePreview ? (
            <img src={imagePreview} alt="Preview" className="mb-4 max-w-full h-48 object-cover rounded-lg" />
          ) : (
            <span className="text-gray-500">No image selected</span>
          )}
          <input type="file" onChange={handleImageChange} accept="image/*" className="hidden" id="imageUpload" />
          <label htmlFor="imageUpload" className="cursor-pointer bg-white text-green-500 border border-green-500 px-4 py-1 rounded-full text-sm mt-4">
            {bannerImage ? 'Change Image' : 'Browse files'}
          </label>
        </div>

        {/* Event Name Input */}
        <div className="mb-4">
          <label className="block text-gray-800 font-medium mb-2">Event Name</label>
          <input
            type="text"
            className="w-full p-3 border border-gray-200 rounded-lg"
            placeholder="Enter event name..."
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
          />
        </div>

        {/* Event Description */}
        <div className="mb-4">
          <label className="block text-gray-800 font-medium mb-3">Event Description</label>
          <textarea className="w-full border border-gray-200 rounded-lg p-4 min-h-40" rows={8} placeholder="Type your event description here..." value={eventDescription} onChange={(e) => setEventDescription(e.target.value)}></textarea>
        </div>

        {/* Event Type Dropdown */}
        <div className="mb-4">
          <label className="block text-gray-800 font-medium mb-3">Event Type</label>
          <select
            className="w-full p-3 border border-gray-200 rounded-lg"
            value={eventType}
            onChange={(e) => setEventType(e.target.value)}
          >
            <option value="">Select Event Type</option>
            {eventTypes.map((type, index) => (
              <option key={index} value={type}>{type}</option>
            ))}
          </select>
        </div>

        {/* Event Date and Time */}
        <div className="mb-4">
          <label className="block text-gray-800 font-medium mb-2">Event Date</label>
          <input
            type="date"
            className="w-full p-3 border border-gray-200 rounded-lg"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-800 font-medium mb-2">Event Time</label>
          <input
            type="time"
            className="w-full p-3 border border-gray-200 rounded-lg"
            value={eventTime}
            onChange={(e) => setEventTime(e.target.value)}
          />
        </div>

        {/* Location (only for offline events) */}
        {eventType === 'offline' && (
          <div className="mb-4">
            <label className="block text-gray-800 font-medium mb-2">Location</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-200 rounded-lg"
              placeholder="Enter event location..."
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
        )}

        {/* Event Link (only for online events) */}
        {eventType === 'online' && (
          <div className="mb-4">
            <label className="block text-gray-800 font-medium mb-2">Event Link</label>
            <input
              type="url"
              className="w-full p-3 border border-gray-200 rounded-lg"
              placeholder="Enter event link..."
              value={eventLink}
              onChange={(e) => setEventLink(e.target.value)}
            />
          </div>
        )}

        {/* Event Privacy */}
        <div className="mb-4">
          <label className="block text-gray-800 font-medium mb-3">Event Privacy</label>
          <select
            className="w-full p-3 border border-gray-200 rounded-lg"
            value={eventPrivacy}
            onChange={(e) => setEventPrivacy(e.target.value)}
          >
            {privacyOptions.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-4">
          <button className="bg-gray-500 text-white px-5 py-2 rounded-lg">Save as Draft</button>
          <button className="bg-green-500 text-white px-5 py-2 rounded-lg" onClick={handlePublish} disabled={loading}>
            {loading ? 'Publishing...' : 'Publish Event'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;
