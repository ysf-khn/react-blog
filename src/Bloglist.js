import { useState } from "react";
import { Link } from "react-router-dom";

const Bloglist = () => {
  const [blog, setBlog] = useState([
    {
      title: "New website",
      body: "sdjf pwoeuth sdvsj",
      author: "mario",
      id: 1,
    },
    {
      title: "Bloggg",
      body: "sdjf per ew woeuth sdvsj",
      author: "yusuf",
      id: 2,
    },
  ]);

  return (
    <div className="home">
      {blog.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Bloglist;
