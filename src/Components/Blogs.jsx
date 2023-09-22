import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs, removeBlog } from "../redux/slice/blogSlice";
import { useEffect } from "react";
import { store } from "../redux/store";

import { useNavigate } from "react-router-dom"; // Import the useNavigate hook

const Blogs = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.blogs);
  const navigate = useNavigate(); // Use the useNavigate hook to get the navigation function

  useEffect(() => {
    // Automatically fetch blogs when the component mounts
    dispatch(fetchBlogs());
  }, [dispatch]);

  const addBlogButton = () => {
    navigate("/addblog"); // Use the navigate function to navigate to '/addblog'
  };

  const editBlogButton = (blogId) => {
    navigate(`/blogs/${blogId}/editblog`);
    console.log(blogId); // Use the navigate function to navigate to '/editblog'
  };
  const removeBlogButton = (blogId) => {
    dispatch(removeBlog(blogId));
  };

  if (state.isLoading) {
    return <h1 className="text-4xl text-center">Loading...</h1>;
  }

  if (state.isError) {
    return <div>Error: Unable to fetch blogs</div>;
  }

  return (
    <div className="max-w-full mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 px-[100px] mt-20 mb-10">
      {state.data.map((blog) => (
        <div className=" shadow-xl rounded mb-10" key={blog.id}>
          <h1 className=" text-center font-bold">Blog : {blog.id}</h1>
          <div className=" px-6 py-4 justify-center items-center" key={blog.id}>
            <h1 className=" py-2 text-xl font-semibold">{blog.title}</h1>
            <p className=" text-base font-medium pb-10 pt-5">{blog.body}</p>
            <div className=" flex justify-between items-center content-center">
              <button
                onClick={()=>editBlogButton(blog.id)}
                className=" bg-purple-800 text-white py-2 px-2 rounded-md font-bold "
              >
                Edit
              </button>
              <button
                onClick={()=>addBlogButton}
                className=" bg-purple-800 text-white py-2 px-2 rounded-md font-bold "
              >
                Add
              </button>
              <button
                onClick={() => removeBlogButton(blog.id)}
                className=" bg-purple-800 text-white py-2 px-2 rounded-md font-bold "
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
function loadBlogsFromLocalStorage() {
  const blogsJson = localStorage.getItem("blogs");
  if (blogsJson) {
    const blogs = JSON.parse(blogsJson);
    store.dispatch(fetchBlogs(blogs));
  }
}
loadBlogsFromLocalStorage();
export default Blogs;