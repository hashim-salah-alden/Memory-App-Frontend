import React from "react";
// import loading skeleton
// import lottie animation

const Loading = ({ status, error, children }) => {
  if (status === "pending") {
    return <div>Loading....</div>;
  }

  if (status === "failed") {
    return <div> {error}</div>;
  }

  return <div>{children}</div>;
};

export default Loading;
