import { useDispatch, useSelector } from "react-redux";
import { addBlog } from "../redux/slice/blogSlice";
import { useState } from "react";
import Blogs from "./Blogs";

const AddBlog = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const currentBlogs = useSelector((state) => state.blogs.data);

  const handleAddBlog = (e) => {
    e.preventDefault();
    dispatch(addBlog({ title, body }));
    console.log(title, body);
    setTitle("");
    setBody("");

    const updatedBlogs = [...currentBlogs, { title, body }];

    saveBlogsToLocalStorage(updatedBlogs);
  };
  function saveBlogsToLocalStorage(blogs) {
    const blogJson = JSON.stringify(blogs);
    localStorage.setItem("blogs", blogJson);
  }
  return (
    <>
      <form onSubmit={handleAddBlog}>
        <div className=" max-w-lg mx-auto grid sm:grid-cols-1 mt-20">
          <div className=" shadow-xl rounded mb-10">
            <h1 className=" text-2xl font-bold p-2 text-center">
              Add New Blog
            </h1>
            <div className=" flex flex-col px-6 py-4">
              <div className=" justify-center items-center">
                <label className=" text-md font-bold" htmlFor="title">
                  Title:{" "}
                </label>
                <input
                  className=" border border-black ml-4 my-2"
                  placeholder="Enter Title"
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>
              <div className=" justify-center items-center">
                <label className="text-md font-bold" htmlFor="body">
                  Body:{" "}
                </label>
                <input
                  className=" border border-black ml-4 my-2"
                  placeholder="Enter Body"
                  type="text"
                  id="body"
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-purple-800 text-white py-2 px-2 rounded-md font-bold"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </form>
      <div className="">
        <Blogs />
      </div>
    </>
  );
};

export default AddBlog;
