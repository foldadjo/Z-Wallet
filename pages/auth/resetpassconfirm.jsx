import React from "react";
import Layout from "../../component/Layout/auth";
import Image from "next/image";
import Script from "next/script";

export default function confirmPass() {
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
            <Image src={"/icon lock.png"} width={"30px"} height={"30px"} />
          </div>
          <input
            className="col-8 bg-light border border-light"
            type="password"
            placeholder="Create new password"
            aria-label="Password"
            aria-describedby="basic-addon1"
          />
          <div className="input-group-addon">
            <i className="fa fa-eye-slash" aria-hidden="true"></i>
          </div>
          <hr className="col-10" />
        </div>
        <div className="mt-4 mb-3 row">
          <div className="col-2">
            <Image src={"/icon lock.png"} width={"30px"} height={"30px"} />
          </div>
          <input
            className="col-8 bg-light border border-light"
            type="password"
            placeholder="Create new password"
            aria-label="Password"
            aria-describedby="basic-addon1"
          />
          <div className="input-group-addon">
            <i className="fa fa-eye-slash" aria-hidden="true"></i>
          </div>
          <hr className="col-10" />
        </div>
        <button className="authButton"> Reset Password </button>
        <Script
          src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
          integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
          crossorigin="anonymous"
        ></Script>
        <Script src="/path/to/bootstrap-show-password.js"></Script>
      </div>
    </Layout>
  );
}
