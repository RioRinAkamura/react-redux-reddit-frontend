import React from "react";

const InputField = ({ label, data, setData, inputType, classStyle }: any) => {
  return (
    <>
      <label>{label}</label>
      {inputType === "textarea" ? (
        <textarea
          className={classStyle}
          placeholder={data}
          onChange={(e) => setData(e.target.value)}
        />
      ) : (
        <input
          type="text"
          placeholder={data}
          onChange={(e) => setData(e.target.value)}
        />
      )}
    </>
  );
};

export default InputField;
