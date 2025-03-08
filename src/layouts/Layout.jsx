import React from "react";
import Header from "./Header";

function layout({ children }) {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>{children}</div>
    </div>
  );
}

export default layout;
