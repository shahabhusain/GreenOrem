import React, { useEffect, useState } from 'react';
import { BsThreeDots } from "react-icons/bs";
import dp from '../../assets/profile.png';
import { FaEarthAfrica, FaRegComment } from "react-icons/fa6";
import { FaSave, FaLink, FaEyeSlash, FaFlag } from 'react-icons/fa';
import Post from '../../components/home/Post';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { axiosPrivateForm } from '../../store/axios';
import moment from 'moment/moment';
import Like from '../../components/home/Like';
import Comment from '../../components/home/Comment';
import Share from '../../components/home/Share';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
const Home = () => {
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [comment, setComment] = useState("");
    const [color, setColor] = useState(false)

  const queryClient = useQueryClient();

  const commentMutation = useMutation({
    mutationFn: async (postId) => {
      return axiosPrivateForm.post("/post/make-comment-on-post", {
        post_id: postId,
        comment: comment,
      });
    },
    onSuccess: () => {
      setComment(""); // Clear input after success
      queryClient.invalidateQueries(["posts"]); // Refresh posts
      toast.success("Comment added successfully")
      window.location.reload()
    },
    onError: (error) => {
      console.error("Error adding comment:", error);
    },
  });
  

  const toggleDropdown2 = (event) => {
    event.stopPropagation();
    setIsOpen2((prev) => !prev);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setIsOpen2(false);
      setIsOpen3(false);
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // Fetch posts using useQuery
  const { isLoading, error, data } = useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const res = await axiosPrivateForm.get("/post/get-all-posts?page=1&limit=10");
      return res.data.data;
    },
  });

  if (isLoading) return <div className='loader'></div>;
  if (error) return <div>Error fetching data</div>;

  return (
    <div className='flex gap-2 w-full'>
      <main className="p-4">
        <Post isOpen3={isOpen3} setIsOpen3={setIsOpen3} />

        {/* Render posts dynamically */}
        {data && data.map((post, index) => (
          <div key={index} className="mt-4 bg-white p-4 rounded-lg">
            <div className='flex justify-between'>
              <h4 className="font-bold flex items-center gap-2">
                <img className='w-[40px]' src={post.user.profileImg || dp} alt="Profile" />
                <span className='flex flex-col gap-1'>
                  {post.user.name}
                  <p className='text-[14px] font-[400] flex items-center gap-1 text-green-600'>
                    {moment(post.createdAt).format("DD MMMM YYYY")} • <FaEarthAfrica size={10} />
                  </p>
                </span>
              </h4>
              <div className="relative">
                <BsThreeDots
                  size={20}
                  className="cursor-pointer"
                  onClick={toggleDropdown2}
                />
                {isOpen2 && (
                  <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                    <div className="py-1">
                      <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        <FaSave className="mr-2" />
                        Save
                      </a>
                      <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        <FaLink className="mr-2" />
                        Copy link
                      </a>
                      <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        <FaEyeSlash className="mr-2" />
                        I don't want to see this
                      </a>
                      <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        <FaFlag className="mr-2" />
                        Report
                      </a>


                    </div>
                  </div>
                )}
              </div>
            </div>
            <p className='mt-5'>{post.post_title}</p>
            <img src={post.image_url} alt="" />
            <div className='flex items-center justify-between mt-5'>
              <h1 className='text-[16px] font-[400] text-[#00973F]'>{post?.post_likes} Likes</h1>
              <h2 className="text-[16px] font-[400] text-[#00973F]">{post.comments.length > 0 ? `${post.comments.length} Comments` : "0 Comments"}</h2>
            </div>
            <div className="flex justify-between mt-5 gap-5 w-ful">
              <div className='w-full'>
                <Like postId={post._id} />
              </div>
              <div className="w-full">
                <button
                  className="hover:bg-green-600 hover:text-black text-gray-600 flex items-center justify-center rounded-full bg-gray-100 gap-1.5 cursor-pointer py-2 w-full"
                  onClick={()=>setColor(!color)}
                >
                  <FaRegComment size={20} /> Comment
                </button>
              </div>
              <div className="w-full">
                <Share />
              </div>
            </div>
             <div>
              <Comment postId={post._id} />
             </div>
            <div className={`relative flex items-center mt-4 border  ${color ? "border-green-600 border-[2px]" : "border-black-300"} rounded-full p-2`}>
              <img className=' w-[30px] h-[30px] rounded-full' src={post.image_url} alt="" />
              <input
                type="text"
                placeholder="Write a comment..."
                className="bg-transparent text-black w-full outline-none px-2"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <button
                className="text-green-500"
                onClick={() => commentMutation.mutate(post._id)}
                disabled={!comment.trim() || commentMutation.isLoading}
              >
                ➤
              </button>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Home;