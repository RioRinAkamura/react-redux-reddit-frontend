import React, { FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../redux/apiRequest";
import InputField from "../InputField";

export interface User {
  name: string;
  age: string;
  about: string;
  avaUrl: string;
  themeColor: string;
}

const EditPage = ({ setIsEdit }: any) => {
  const avaUrl = [
    "https://i.redd.it/mozfkrjpoa261.png",
    "https://i.redd.it/76zj5ihvk0261.png",
    "https://i.redd.it/ib7scrg5t7w61.png",
    "https://preview.redd.it/5es1lne1du261.png?width=640&crop=smart&auto=webp&s=e6eb0ee5710710000e4fbace119112de63324a38",
    "https://preview.redd.it/n9nnnionfu361.png?auto=webp&s=c010326282ec4b19b9b6340d7cdb1616b5c70968",
    "https://preview.redd.it/79kwjpnpjkb61.png?auto=webp&s=d626ad864649f4752bc7d158d36dde2edb0fc468",
    "https://i.redd.it/mozfkrjpoa261.png",
    "https://i.redd.it/76zj5ihvk0261.png",
    "https://preview.redd.it/cpwkbke13vv51.png?auto=webp&s=9158e49b35ad2581d840efd2a013a9ead06abbc7",
  ];

  const userInfo = useSelector((state: any) => state.user);
  const dispatch = useDispatch();

  const [name, setName] = useState(userInfo.name);
  const [age, setAge] = useState(userInfo.age);
  const [about, setAbout] = useState(userInfo.about);
  const [theme, setTheme] = useState("#ff9051");
  const [url, setUrl] = useState(userInfo.avaUrl);

  const [avaClick, setAvaClick] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsEdit(false);
    const updatedUser = {
      name: name,
      age: age,
      about: about,
      avaUrl: url,
      themeColor: theme,
    };
    updateUser(updatedUser, dispatch);
  };

  const handleAvaClick = (e: any) => {
    setUrl((e.target as HTMLImageElement).src);
    setAvaClick(!avaClick);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <section className="edit-container">
          <button className="close">SAVE</button>
          <div className="edit-profile">Edit profile</div>
          <div className="input-container">
            <InputField
              label="Display name"
              data={userInfo.name}
              setData={setName}
            />
            <InputField label="Age" data={userInfo.age} setData={setAge} />
            <InputField
              label="About"
              inputType="textarea"
              data={userInfo.about}
              setData={setAbout}
              isAbout={true}
            />

            <label>Profile Picture</label>
            <div className="input-image-container">
              {avaUrl.map((url) => (
                <img
                  style={{ border: avaClick ? "2px solid #76efff" : "" }}
                  onClick={(e) => handleAvaClick(e)}
                  className="input-image"
                  src={url}
                  alt=""
                />
              ))}
            </div>
            <div className="theme-container">
              <label>Theme</label>
              <input
                type="color"
                id="colorPicker"
                className="theme-color"
                onChange={(e) => setTheme(e.target.value)}
              />
            </div>
          </div>
        </section>
      </form>
    </>
  );
};

export default EditPage;
