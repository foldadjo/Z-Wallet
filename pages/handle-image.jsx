import React from "react";
import Image from "next/image";

const imageProfile = {
  width: "150px",
  backgrounColor: "red",
};

export default function handleImage() {
  return (
    <div className="container text-center">
      <h1>Handle Image</h1>
      <hr />
      <h4>withoout image</h4>
      <img src="../vercel.svg" alt="img image" style={imageProfile} />
      <hr />
      <h4>with next image</h4>
      <div style={imageProfile}>
        <Image src="/vercel.svg" alt="img image" width={100} height={200} />
      </div>
      <Image src="/vercel.svg" alt="img image" width={100} height={200} />
    </div>
  );
}
