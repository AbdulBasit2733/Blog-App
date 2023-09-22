const EditBlog = ({blogId }) => {
  console.log(blogId);
  return (
    <div>
      <h1>{`/blogs/${blogId}/editblog`}</h1>
      <h4>EditBlog</h4>
    </div>
  );
};
export default EditBlog