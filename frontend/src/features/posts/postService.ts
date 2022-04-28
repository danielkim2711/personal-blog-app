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

const postService = {
  getPosts,
  getPost,
};

export default postService;
