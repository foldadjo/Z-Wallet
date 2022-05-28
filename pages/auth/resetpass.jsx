import React from "react";
import Layout from "../../component/Layout/auth";
import Image from "next/image";

export default function resetPass() {
  return (
    <Layout title="Reset Password Page">
      <div className="container">
        <h5 className="pb-3" style={{ lineHeight: "160%" }}>
          <strong>
            Did You Forgot Your Password? <br />
            Don’t Worry, You Can Reset Your <br />
            Password In a Minutes.
          </strong>
        </h5>
        <div
          className="text-muted"
          style={{ fontSize: "12px", lineHeight: "160%" }}
        >
          To reset your password, you must type your e-mail and we <br /> will
          send a link to your email and you will be directed to the <br /> reset
          password screens.
        </div>
        <div className="mt-5 mb-3 row">
          <div className="col-2">
            <Image src={"/icon mail.png"} width={"30px"} height={"30px"} />
          </div>
          <input
            className="col-8 bg-light border border-light"
            type="email"
            placeholder="Enter your e-mail"
            aria-label="Email"
            aria-describedby="basic-addon1"
          />
          <hr className="col-10" />
        </div>

        <button className="authButton"> Confirm </button>
      </div>
    </Layout>
  );
}
