import React from "react";

const Background = ({ children }) => {
  return (
    <div
      style={{
        backgroundImage: "url(/images/bg.jpg)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {children}
    </div>
  );
};

export default Background;
