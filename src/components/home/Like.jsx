import React from 'react';
import { AiFillLike } from "react-icons/ai";
import { axiosPrivateForm } from '../../store/axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
const Like = ({ postId }) => {
  const queryClient = useQueryClient();

  const likePostMutation = useMutation({
    mutationFn: async () => {
      return axiosPrivateForm.post('/post/like-a-post', { post_id: postId }); // Send postId
    },
    onSuccess: () => {
      toast.success('Post Liked successfully!');
      window.location.reload()
      queryClient.invalidateQueries(['posts']); // Refresh posts
    },
    onError: (error) => {
      console.error('Error Liking post:', error);
      toast.error('Failed to Like post');
    },
  });

  return (
    <div>
      <ToastContainer />
      <button 
        onClick={() => likePostMutation.mutate()} // Ensure mutation is triggered
        className="hover:bg-green-600 hover:text-black text-gray-600 flex items-center justify-center rounded-full bg-gray-100 gap-1.5 cursor-pointer py-2 w-full"
      >
        <AiFillLike size={20} /> {likePostMutation.isLoading ? 'Liking...' : 'Like'}
      </button>
    </div>
  );
}

export default Like;
