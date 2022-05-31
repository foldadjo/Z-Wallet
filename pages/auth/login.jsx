import React, { useState } from "react";
import Layout from "../../component/Layout/auth";
import Image from "next/image";
import axios from "../../utils/axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

export default function login() {
  const router = useRouter();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChangeText = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const result = await axios.post("/auth/login", form);
      console.log(result);
      Cookies.set("token", result.data.data.token);
      Cookies.set("id", result.data.data.id);
      Cookies.set("pin", result.data.data.pin);
      if (result.data.data.pin === null) {
        router.push("/auth/createpin");
      } else {
        router.push("/dashboard");
        alert("login success");
      }
    } catch (error) {
      alert(error.response.data.msg);
      console.log(error);
    }
  };
  return (
    <Layout title="Login Page">
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
            <Image src={"/icon mail.png"} width={"30px"} height={"30px"} />
          </div>
          <input
            className="col-8 bg-light border border-light"
            type="email"
            name="email"
            placeholder="Enter your e-mail"
            aria-label="Email"
            aria-describedby="basic-addon1"
            onChange={handleChangeText}
          />
          <hr className="col-10" />
        </div>
        <div className="mt-5 mb-3 row">
          <div className="col-2">
            <Image src={"/icon lock.png"} width={"30px"} height={"30px"} />
          </div>
          <input
            className="col-8 bg-light border border-light"
            type="password"
            name="password"
            placeholder="Enter your password"
            aria-label="Password"
            aria-describedby="basic-addon1"
            onChange={handleChangeText}
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
        {/* <div className="text-danger text-center col-10">
          {!message ? null : (
            <div className="alert alert-primary" role="alert">
              {message}
            </div>
          )}
        </div> */}
        <button type="submit" className="authButton" onClick={handleSubmit}>
          Login
        </button>
        <div className="col-10 text-center">
          Don’t have an account? Let’s{" "}
          <a href="register" style={{ cursor: "pointer" }}>
            Sign Up
          </a>
        </div>
      </div>
    </Layout>
  );
}
