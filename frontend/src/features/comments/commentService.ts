import axios from 'axios';

const API_URL = '/api/posts/';

const getComments = async (postId: string) => {
  const response = await axios.get(`${API_URL}${postId}/comments`);

  return response.data;
};

const createComment = async (
  commentData: object,
  postId: string | undefined
) => {
  const response = await axios.post(
    `${API_URL}${postId}/comments`,
    commentData
  );

  return response.data;
};

const commentService = {
  getComments,
  createComment,
};

export default commentService;
