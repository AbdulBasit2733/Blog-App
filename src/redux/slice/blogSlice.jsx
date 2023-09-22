import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
export const fetchBlogs = createAsyncThunk("fetchBlogs", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/");
  return res?.json();
});


const blogSlice = createSlice({
  name: "blogs",
  initialState: {
    isLoading: false,
    data: [],
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBlogs.pending, (state, action) => {
      state.isLoading = true;
    })
    builder.addCase(fetchBlogs.fulfilled, (state, action) =>{
        state.isLoading = false;
        state.data = action.payload;
    })
    builder.addCase(fetchBlogs.rejected, (state, action) => {
        state.isError = true;
    })
  },
  reducers:{
    addBlog: (state, action) => {
      const {title, body} = action.payload;
      const newBlog = {
        id:nanoid(),
        title, 
        body
      }
      state.data.push(newBlog); // Update the 'data' property
    },
    removeBlog:(state, action) =>{
      state.data = state.data.filter((blog)=>
        blog.id !== action.payload
      )
    }
  }
});

export const {addBlog, removeBlog} = blogSlice.actions;

export default blogSlice.reducer;
