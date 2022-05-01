import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import commentService from './commentService';

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
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: any;
}

const initialState: CommentState = {
  comments: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
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
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getComments.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getComments.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.comments = action.payload;
      })
      .addCase(getComments.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(createComment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createComment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.comments.push(action.payload);
      })
      .addCase(createComment.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteComment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteComment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.comments = state.comments.filter(
          (comment) => comment._id !== action.payload._id
        );
      })
      .addCase(deleteComment.rejected, (state, action: any) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = commentSlice.actions;
export default commentSlice.reducer;
