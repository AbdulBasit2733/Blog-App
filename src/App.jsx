import Navbar from "./Components/Navbar";
import Blogs from "./Components/Blogs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import AddBlog from "./Components/AddBlog";
import EditBlog from "./Components/EditBlog";

const App = () => {
  // Assume you have a variable named 'blogId' with the desired value// Replace with the actual blogId value

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/addblog" element={<AddBlog />} />
          {/* Pass the 'blogId' prop to the 'EditBlog' component */}
          <Route path="/blogs/:blogId/editblog" element={<EditBlog />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
