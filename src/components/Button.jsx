import React from "react";

export default function Button(props) {
  const { text } = props;
  return (
    <button className="px-8 mx-auto py-4 rounded-medium border-[2px] border-blue-400 border-solid bg-slate-950 blueShadow duration-200">
      <p>{text}</p>
    </button>
  );
}
