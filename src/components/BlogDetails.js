import { useParams } from "react-router";
import blogpost from "../blogpost";
import { useState, useEffect } from "react";

const BlogDetails = () => {
  const [data, setData] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    blogpost.find((blog) => blog.id === parseInt(id) && setData(blog));
  }, [id]);

  return (
    data && (
      <div className="blog-details">
        <h2>{data.title}</h2>
        <p>{data.body}</p>
      </div>
    )
  );
};

export default BlogDetails;
