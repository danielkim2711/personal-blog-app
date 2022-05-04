import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import commentService from './commentService';
import { toast } from 'react-toastify';

interface CommentState {
  comments: {
    _id: string;
    post: string;
    name: string;
    password: string;
    body: string;
    createdAt: Date;
    updatedAt: Date;
  }[];
  isLoading: boolean;
}

const initialState: CommentState = {
  comments: [],
  isLoading: false,
};

export const getComments = createAsyncThunk(
  'comments/getAll',
  async (postId: string, thunkAPI) => {
    try {
      return await commentService.getComments(postId);
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const createComment = createAsyncThunk(
  'comments/create',
  async (
    {
      commentData,
      postId,
    }: { commentData: object; postId: string | undefined },
    thunkAPI
  ) => {
    try {
      return await commentService.createComment(commentData, postId);
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const deleteComment = createAsyncThunk(
  'comments/delete',
  async (
    {
      _id,
      password,
      postId,
      commentId,
    }: {
      _id: string;
      password: string;
      postId: string | undefined;
      commentId: string;
    },
    thunkAPI
  ) => {
    try {
      return await commentService.deleteComment(
        _id,
        password,
        postId,
        commentId
      );
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const commentSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getComments.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getComments.fulfilled, (state, action) => {
        state.isLoading = false;
        state.comments = action.payload;
      })
      .addCase(getComments.rejected, (state) => {
        state.isLoading = true;
        toast.error('Error, failed to load the comments');
      })
      .addCase(createComment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createComment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.comments.push(action.payload);
        toast.success('Comment created successfully');
      })
      .addCase(createComment.rejected, (state) => {
        state.isLoading = false;
        toast.error('Error, failed to create the comment');
      })
      .addCase(deleteComment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteComment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.comments = state.comments.filter(
          (comment) => comment._id !== action.payload._id
        );
        toast.success('Comment deleted successfully');
      })
      .addCase(deleteComment.rejected, (state, action: any) => {
        state.isLoading = false;
        toast.error(action.payload);
      });
  },
});

export default commentSlice.reducer;
