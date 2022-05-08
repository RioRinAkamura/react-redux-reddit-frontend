import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../../redux/postSlice";
import InputField from "../InputField";
import { v4 as uuidv4 } from "uuid";

export const tags = ["None", "NSFW", "Mood", "Quotes", "Shitpost"];

const MakePost = ({ setIsOpenPost }: any) => {
  const [title, setTitle] = useState("Add a title");
  const [desc, setDesc] = useState("Add some description");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const dispatch = useDispatch();

  const handlePost = () => {
    setIsOpenPost(false);
    const newPost = {
      id: uuidv4(),
      title: title,
      desc: desc,
      tag: selectedIndex,
    };
    console.log("newPost", newPost);
    dispatch(createPost(newPost));
  };

  return (
    <section className="makepost-container">
      <div className="makepost-navigation">
        <p className="makepost-save" onClick={handlePost}>
          Post
        </p>
      </div>
      <InputField
        label="Title"
        inputType="textarea"
        classStyle="makepost-title"
        data={title}
        setData={setTitle}
      />
      <InputField
        label="Description"
        inputType="textarea"
        classStyle="makepost-desc"
        data={desc}
        setData={setDesc}
      />
      <label>Tags</label>
      <div className="makepost-tags">
        {tags.map((tag, index) => (
          <button
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={`${
              selectedIndex === index
                ? `makepost-tags-selected`
                : `makepost-tags-${tag}`
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
    </section>
  );
};

export default MakePost;
