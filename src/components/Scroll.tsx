import React from "react";

const Scroll = ({ children }: { children: JSX.Element }) => {
  return (
    <div
      style={{ overflow: "scroll", border: "5px solid black", height: "800px" }}
    >
      {children}
    </div>
  );
};

export default Scroll;
