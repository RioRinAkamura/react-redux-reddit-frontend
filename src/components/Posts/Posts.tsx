import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { tags } from "./MakePost";

const Posts = () => {
  const posts = useSelector((state: any) => state.post.posts);
  const dispatch = useDispatch();

  const handleRemovePost = (postId: string) => {
    console.log("postId", postId);
  };

  return (
    <section className="post-container">
      {posts &&
        posts.slice(1).map((post: any, index: number) => (
          <div
            className="posts"
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <div>
              <p className="post-title">{post.title}</p>
              <p className={`posts-tags-${tags[post.tag]} posts-tags`}>
                {tags[post.tag]}
              </p>
              <p className="post-desc">{post.desc}</p>
            </div>
            <button
              style={{
                padding: 6,
                background: "none",
                borderRadius: "50px",
                color: "white",
              }}
              onClick={() => handleRemovePost(post.id)}
            >
              X
            </button>
          </div>
        ))}
    </section>
  );
};

export default Posts;
