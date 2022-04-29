import axios from 'axios';

const API_URL = '/api/posts/';

const getPosts = async () => {
  const response = await axios.get(API_URL);

  return response.data;
};

const getPost = async (postId: string) => {
  const response = await axios.get(`${API_URL}${postId}`);

  return response.data;
};

const deletePost = async (postId: string, token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(`${API_URL}${postId}`, config);

  return response.data;
};

const postService = {
  getPosts,
  getPost,
  deletePost,
};

export default postService;
