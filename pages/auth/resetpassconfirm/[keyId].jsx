import React, { useState } from "react";
import Layout from "../../../component/Layout/auth";
import Image from "next/image";
import axios from "../../../utils/axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
// import { InferGetServerSidePropsType } from 'next'

export default function confirmPass() {
  const router = useRouter();

  const [form, setForm] = useState({
    keysChangePassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChangeText = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form);
  };

  const handleSubmit = async () => {
    const data = {
      newPassword: form.newPassword,
      confirmPassword: form.confirmPassword,
      keysChangePassword: router.query.keyId,
    };
    try {
      const result = await axios.patch("/auth/reset-password", data);
      console.log(result);
      Cookies.set("token", result.data.data.token);
      Cookies.set("id", result.data.data.id);
      router.push("/login");
      alert(result.data.msg);
    } catch (error) {
      alert(error.response.data.msg);
      console.log(error);
    }
  };

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
            name="newPassword"
            placeholder="Create new password"
            aria-label="Password"
            aria-describedby="basic-addon1"
            onChange={handleChangeText}
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
            name="confirmPassword"
            placeholder="Create new password"
            aria-label="Password"
            aria-describedby="basic-addon1"
            onChange={handleChangeText}
          />
          <div className="input-group-addon">
            <i className="fa fa-eye-slash" aria-hidden="true"></i>
          </div>
          <hr className="col-10" />
        </div>
        <button className="authButton" onClick={handleSubmit}>
          {" "}
          Reset Password{" "}
        </button>
      </div>
    </Layout>
  );
}
