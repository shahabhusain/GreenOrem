import React, { useEffect, useState, useCallback } from 'react';
import { BsThreeDots } from "react-icons/bs";
import dp from '../../assets/DP.png';
import { FaSave, FaLink, FaEyeSlash, FaFlag } from 'react-icons/fa';
import { FaEarthAfrica } from "react-icons/fa6";
import { FaRegComment } from "react-icons/fa6";
import { useParams } from 'react-router-dom';
import { axiosPrivateForm } from '../../store/axios';
import Post from '../../components/Groups/Post';
import moment from 'moment';
import { useMutation } from '@tanstack/react-query';
import Like from '../../components/Groups/Like';
import Comment from '../../components/Groups/Comment';
import Share from '../../components/home/Share';
import { MdDelete } from 'react-icons/md';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


const GroupDetail = () => {
  const { organization_id } = useParams();
  const [isOpen3, setIsOpen3] = useState(false);
  const [groupData, setGroupData] = useState(null);
  const [groupPostData, setGroupPOstData] = useState([]);
  const [isOpen2, setIsOpen2] = useState(false);
  const [color, setColor] = useState(false);
  const [comment, setComment] = useState("");

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
        toast.error("Failed to add comment")
      },
      onError: (error) => {
        console.error("Error adding comment:", error);
        toast.success("Comment added successfully ");
        window.location.reload()
      },
    });

  const toggleDropdown2 = () => {
    setIsOpen2(!isOpen2);
  };

    const handlePostDelete = async (postId) => {
      try {
        const response = await axiosPrivateForm.post("/post/delete-post",
          { post_id: postId });
        toast.success("Post deleted successfully:", response.data);
        window.location.reload()
        queryClient.invalidateQueries(["posts"]); // Refresh posts after deletion
      } catch (err) {
        console.error("Error deleting post:", err.response?.data || err.message);
      }
    };

  useEffect(() => {
    const fetchGroup = async () => {
      try {
        const response = await axiosPrivateForm.get(`/organization/get-single-organization?organization_id=${organization_id}`);
        setGroupData(response.data.data);
      } catch (err) {
        toast.error("Group fetch failed");
      }
    };

    fetchGroup();
  }, [organization_id]);

  const fetchPostData = useCallback(async () => {
    try {
      const response = await axiosPrivateForm.get(`/organization/get-all-organization-posts?organization_id=${organization_id}`);
      setGroupPOstData(response.data?.data);
    } catch (err) {
      toast.error("post fetch failed");
    }
  }, [organization_id]);

  useEffect(() => {
    fetchPostData();
  }, [fetchPostData]);


  return (
    <>
      <div className='mt-24 relative'>
        <ToastContainer />
        <img className='w-full h-[500px] rounded-2xl object-cover' src={groupData?.cover_image} alt="image" />
        <div className='absolute bottom-10 left-5'>
          <h1 className='text-[41px] font-[700] text-white'>{groupData?.organization_name}</h1>
          <div className='flex items-center gap-5'>
            <button className='py-1.5 px-5 rounded-full bg-[#00973F] text-white'>+ Joined</button>
            <p className='text-[10px] font-[700] text-white'>{groupData?.organization_about}</p>
          </div>
        </div>
      </div>
      <div className='mt-4 flex gap-6'>
        <div className='w-[80%] mx-auto'>
          <Post isOpen3={isOpen3} setIsOpen3={setIsOpen3} groupId={groupData?._id} />
           {
            groupPostData.length === 0 ? <><h1>No Data</h1></> : <>
            
            {groupPostData && groupPostData.map((post, index) => (
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

                        <a 
  href="#" 
  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
  onClick={(event) => {
    event.preventDefault();
    handlePostDelete(post._id);
  }}
>
  <MdDelete className="mr-2" />
  Delete
</a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <p className='mt-5'>{post.post_title}</p>
              <img className='' src={post.image_url} alt="" />
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
                    onClick={() => setColor(!color)}
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
                <img className='w-[30px] h-[30px] rounded-full' src={post.image_url} alt="" />
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
            </>
           }
        </div>
      </div>
    </>
  );
};

export default GroupDetail;