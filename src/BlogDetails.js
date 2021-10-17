import { useParams } from "react-router-dom";
import { useState } from "react";

const BlogDetails = () => {
  const { id } = useParams();

  const [blog, setBlog] = useState([
    {
      title: "New website",
      body: "sdjf pwoeuth sdvsj sdjf pwoeuth sdvsj lorem ipsum ierjb peu paweo poer nv mkew oeirh gojans o4ir uh fdkngb awoeir",
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
    <div className="blog-details">
      <article>
        {console.log(blog)}
        <h2>{blog[id - 1].title}</h2>
        <p>Written by {blog[id - 1].author}</p>
        <div>{blog[id - 1].body}</div>
      </article>
    </div>
  );
};

export default BlogDetails;
