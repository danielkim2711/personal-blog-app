import axios from 'axios';

const API_URL = '/api/posts/';

const getComments = async (postId: string) => {
  const response = await axios.get(`${API_URL}${postId}/comments`);

  return response.data;
};

const commentService = {
  getComments,
};

export default commentService;
