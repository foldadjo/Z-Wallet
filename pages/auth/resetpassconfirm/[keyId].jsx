import React, { useState } from "react";
import Layout from "../../../component/Layout/auth";
import Image from "next/image";
import axios from "../../../utils/axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { BsEyeSlash, BsEye } from "react-icons/bs";
// import { InferGetServerSidePropsType } from 'next'

export default function confirmPass() {
  const router = useRouter();
  const [passHide1, setPassHide1] = useState(true);
  const [passHide2, setPassHide2] = useState(true);

  const [form, setForm] = useState({
    keysChangePassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChangeText = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const data = {
      newPassword: form.newPassword,
      confirmPassword: form.confirmPassword,
      keysChangePassword: router.query.keyId,
    };
    try {
      if (data.newPassword.length < 8) {
        alert("Your password must be at least 8 characters");
      } else if (data.newPassword.toLowerCase() === data.newPassword) {
        alert("Your password must contain at least one uppercase.");
      } else if (data.newPassword.search(/[0-9]/) < 0) {
        alert("Your password must contain at least one digit number.");
      } else if (data.newPassword !== data.confirmPassword) {
        alert("password not match");
      } else {
        const result = await axios.patch("/auth/reset-password", data);
        console.log(result);
        Cookies.set("token", result.data.data.token);
        Cookies.set("id", result.data.data.id);
        router.push("/login");
        alert(result.data.msg);
      }
    } catch (error) {
      alert(error.response.data.msg);
      console.log(error);
    }
  };

  return (
    <Layout title="Reset Password Page">
      <div className="container">
        <h5 className="pb-3" style={{ lineHeight: "160%", marginRight: "12%" }}>
          <strong>
            Did You Forgot Your Password? <br />
            Don’t Worry, You Can Reset Your <br />
            Password In a Minutes.
          </strong>
        </h5>
        <div
          className="text-muted"
          style={{ fontSize: "12px", lineHeight: "160%", marginRight: "12%" }}
        >
          To reset your password, you must type your e-mail and we will send a
          link to your email and you will be directed to the reset password
          screens.
        </div>
        <div className="mt-5 mb-3 row">
          <div className="col-2">
            <Image src={"/icon lock.png"} width={"30px"} height={"30px"} />
          </div>
          <input
            className="col-7 bg-light border border-light"
            type={passHide1 === true ? "password" : "text"}
            name="newPassword"
            placeholder="Create new password"
            aria-label="Password"
            aria-describedby="basic-addon1"
            onChange={handleChangeText}
          />
          <div
            className="col-1 input-group-addon"
            onClick={
              passHide1 === true
                ? () => setPassHide1(false)
                : () => setPassHide1(true)
            }
          >
            {passHide1 === true ? (
              <BsEye size={20} />
            ) : (
              <BsEyeSlash size={20} />
            )}
          </div>
          <hr className="col-10" />
        </div>
        <div className="mt-4 mb-3 row">
          <div className="col-2">
            <Image src={"/icon lock.png"} width={"30px"} height={"30px"} />
          </div>
          <input
            className="col-7 bg-light border border-light"
            type={passHide2 === true ? "password" : "text"}
            name="confirmPassword"
            placeholder="Create new password"
            aria-label="Password"
            aria-describedby="basic-addon1"
            onChange={handleChangeText}
          />
          <div
            className="col-1 input-group-addon"
            onClick={
              passHide2 === true
                ? () => setPassHide2(false)
                : () => setPassHide2(true)
            }
          >
            {passHide2 === true ? (
              <BsEye size={20} />
            ) : (
              <BsEyeSlash size={20} />
            )}
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
