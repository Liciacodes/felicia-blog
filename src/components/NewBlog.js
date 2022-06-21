import React, { useState} from "react";

const NewBlog = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("choose");

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    localStorage.setItem("blog", JSON.stringify(blog));
    console.log(blog);
  };

  // useEffect(() => {
  //   const blog = localStorage.setItem("blog", JSON.stringify(blog));
  // }, [blog]);

  //   fetch(blogpost, {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(blog),
  //   }).then(() => {
  //     console.log("new blog added");
  //   });
  // };

  return (
    <div className="create">
      <h2 className="blog-create-text"> Add a New Blog</h2>
      <form>
        <label>Blog title:</label>
        <input
          type="text"
          className="input-text"
          required
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />

        <label>Blog Body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>

        <label>Blog Author</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="choose">Choose author</option>
          <option value="Felicia">Felicia</option>
          <option value="Michael">Michael</option>
          <option value="Caleb">Caleb</option>
        </select>
      </form>

      <button className="create-button" onClick={handleSubmit}>
        Add Blog
      </button>
    </div>
  );
};

export default NewBlog;
