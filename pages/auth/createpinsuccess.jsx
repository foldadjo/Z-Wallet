import React from "react";
import Layout from "../../component/Layout/auth";
import Image from "next/image";

export default function CreatePinSucces() {
  return (
    <Layout title="Create Pin Success">
      <div className="container">
        <Image src={"/success.png"} width={"50px"} height={"50px"} />
        <h5 className="pb-3" style={{ lineHeight: "160%" }}>
          <strong>Your PIN Was Successfully Created</strong>
        </h5>
        <div
          className="text-muted"
          style={{ fontSize: "12px", lineHeight: "160%" }}
        >
          Your PIN was successfully created and you can now access <br /> all
          the features in Zwallet. Login to your new account and <br /> start
          exploring!
        </div>
        <button className="authButton"> Login now </button>
      </div>
    </Layout>
  );
}
