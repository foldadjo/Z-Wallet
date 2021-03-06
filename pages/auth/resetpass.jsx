import React, { useState } from "react";
import Layout from "../../component/Layout/auth";
import Image from "next/image";
import axios from "../../utils/axios";
import { useRouter } from "next/router";
import { forgotPasswordRedux } from "../../store/action/auth";
import { useDispatch } from "react-redux";

export default function ResetPass() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    email: "",
    linkDirect: `${process.env.URL_FRONTEND}/auth/resetpassconfirm`,
  });

  const handleChangeText = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const result = await dispatch(forgotPasswordRedux(form));
      console.log(result);
      alert(result.value.data.msg);
      router.push("https://mail.google.com/mail");
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
            Did You Forgot Your Password? Don’t Worry, You Can Reset Your
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

        <button className="authButton" onClick={handleSubmit}>
          {" "}
          Confirm{" "}
        </button>
      </div>
    </Layout>
  );
}
