import React, { useEffect, useState } from "react";
import dp from "../../assets/profile.png";
import { Link } from "react-router-dom";
import { axiosPrivateForm } from "../../store/axios";
import { MdOutlineMessage } from "react-icons/md";
import { PiCalendarStarDuotone } from "react-icons/pi";

const Articles = () => {
  const [data, setData] = useState([]);

  console.log("data", data);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axiosPrivateForm.get("/event/get-all-events");
        if (response.status === 200) {
          setData(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchArticles();
  }, []);

  if (data.length === 0) return <div className="loader1"></div>;

  return (
    <div className="bg-gray-50 min-h-screen p-6 mt-24">
      {/* Header with publish button */}
      <Link to="/group/create_events" className="flex justify-end mb-6">
        <button className="bg-green-500 text-white px-4 py-2 rounded-full font-medium">
          Create Event
        </button>
      </Link>

      {/* Event grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((event, index) => (
          <div key={index} className="bg-white rounded-xl p-4 shadow-sm">
            {/* Event image */}
            <Link to={`/group/eventDetail/${event._id}`} className="mb-3">
              <img
                src={event.banner_image}
                alt="Event preview"
                className="w-full h-40 object-cover rounded-lg"
              />
            </Link>

            {/* Event title */}
            <h3 className="text-green-500 text-lg font-medium mb-2">
              {event.event_name.slice(0, 20)}...
            </h3>

            {/* Event description */}
            <p className="text-gray-500 text-sm mb-2">{event.event_description.slice(0, 29)}...</p>

            {/* Event details */}
            <div className="text-sm text-gray-700 mb-3">
               <div className=" flex items-center justify-between">
               <p>
                Date: {new Date(event.event_date).toLocaleDateString()}
              </p>
              <p> Time: {event.event_time}</p>
               </div>
            </div>

            {/* Organizer info */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img
                  src={event?.organizer?.profileImg || dp}
                  alt="Organizer avatar"
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-sm text-gray-700">{event?.organizer?.name}</span>
              </div>

              {/* Action buttons */}
              <div className="flex gap-2">
                <p> Location: {event.location?.slice(0, 13) || "Online"}...</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
