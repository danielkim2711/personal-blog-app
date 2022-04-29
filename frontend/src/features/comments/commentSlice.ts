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
  isError: Boolean;
  isSuccess: Boolean;
  isLoading: Boolean;
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

export const commentSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    reset: () => initialState,
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
      });
  },
});

export const { reset } = commentSlice.actions;
export default commentSlice.reducer;
