import React, { useEffect, useState } from "react";
import { axiosPrivateForm } from "../../store/axios";

const Comment = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!postId) return;

    const fetchComments = async () => {
      setLoading(true);
      try {
        const response = await axiosPrivateForm.post("/post/get-comments-of-a-post?page=1&limit=10", {
          post_id: postId,
        });

        if (response.status === 200) {
          setComments(response.data.data); // Assuming API returns comments in `data`
        }
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
      setLoading(false);
    };

    fetchComments();
  }, [postId]);

  return (
    <div className="mt-4">
      {loading ? (
        <p>Loading comments...</p>
      ) : comments.length > 0 ? (
        <ul className="mt-2 space-y-2">
          {comments.map((comment) => (
            <li key={comment._id} className="p-2 ">
              <p>
                {comment.post_comment}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No comments yet.</p>
      )}
    </div>
  );
};

export default Comment;
