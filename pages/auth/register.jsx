import React from "react";
import Layout from "../../component/Layout/auth";
import Image from "next/image";
import Script from "next/script";

export default function register() {
  return (
    <Layout title="Register Page">
      <div className="container">
        <h5 className="pb-3" style={{ lineHeight: "160%" }}>
          <strong>
            Start Accessing Banking Needs <br /> With All Devices and All
            Platforms <br /> With 30.000+ Users
          </strong>
        </h5>
        <div
          className="text-muted"
          style={{ fontSize: "12px", lineHeight: "160%" }}
        >
          Transfering money is eassier than ever, you can access <br /> Zwallet
          wherever you are. Desktop, laptop, mobile phone? <br /> we cover all
          of that for you!
        </div>
        <div className="mt-5 mb-3 row">
          <div className="col-2">
            <Image src={"/icon user.png"} width={"30px"} height={"30px"} />
          </div>
          <input
            className="col-8 bg-light border border-light"
            type="text"
            placeholder="Enter your firstname"
            aria-label="firstname"
            aria-describedby="basic-addon1"
          />
          <hr className="col-10" />
        </div>
        <div className="mb-3 row">
          <div className="col-2">
            <Image src={"/icon user.png"} width={"30px"} height={"30px"} />
          </div>
          <input
            className="col-8 bg-light border border-light"
            type="text"
            placeholder="Enter your lastname"
            aria-label="lastname"
            aria-describedby="basic-addon1"
          />
          <hr className="col-10" />
        </div>
        <div className="mb-3 row">
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
        <div className="mb-3 row">
          <div className="col-2">
            <Image src={"/icon lock.png"} width={"30px"} height={"30px"} />
          </div>
          <input
            className="col-8 bg-light border border-light"
            type="password"
            placeholder="Enter your password"
            aria-label="Password"
            aria-describedby="basic-addon1"
          />
          <div className="input-group-addon">
            <i className="fa fa-eye-slash" aria-hidden="true"></i>
          </div>
          <hr className="col-10" />
          <dev className="col-7"></dev>
          <dev
            className="col-4 text-dark"
            style={{ fontSize: "10px", cursor: "pointer" }}
          >
            <a href="auth/resetpass">
              <strong> Forgot password?</strong>
            </a>
          </dev>
        </div>
        <button className="authButton"> Sign Up </button>
        <div className="col-10 text-center">
          Already have an account? Let’s{" "}
          <a href="login" style={{ cursor: "pointer" }}>
            Login
          </a>
        </div>
      </div>
      <Script
        src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"
      ></Script>
      <Script src="/path/to/bootstrap-show-password.js"></Script>
    </Layout>
  );
}
