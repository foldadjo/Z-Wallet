import React, { useState } from "react";
import Layout from "../../component/Layout/auth";
import Image from "next/image";
import axios from "../../utils/axios";
import { useRouter } from "next/router";
import { BsEyeSlash, BsEye } from "react-icons/bs";

export default function register() {
  const router = useRouter();
  const [passHide, setPassHide] = useState(true);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const handleChangeText = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async () => {
    try {
      if (form.firstName === "" || form.email || form.password) {
        alert("form is require");
      } else if (form.password.length < 8) {
        alert("Your password must be at least 8 characters");
      } else if (form.password.toLowerCase() === form.password) {
        alert("Your password must contain at least one uppercase.");
      } else if (form.password.search(/[0-9]/) < 0) {
        alert("Your password must contain at least one digit number.");
      } else {
        const result = await axios.post("/auth/register", form);
        console.log(result);
        router.push("/");
        alert("succes register");
      }
    } catch (error) {
      console.log(error);
      alert(error.response.data.msg);
    }
  };

  return (
    <Layout title="Register Page">
      <div className="container">
        <h5 className="pb-3" style={{ lineHeight: "160%", marginRight: "12%" }}>
          <strong>
            Start Accessing Banking Needs With All Devices and All Platforms
            With 30.000+ Users
          </strong>
        </h5>
        <div
          className="text-muted"
          style={{ fontSize: "12px", lineHeight: "160%", marginRight: "12%" }}
        >
          Transfering money is eassier than ever, you can access Zwallet
          wherever you are. Desktop, laptop, mobile phone? we cover all of that
          for you!
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
            onChange={handleChangeText}
            name="firstName"
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
            onChange={handleChangeText}
            name="lastName"
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
            onChange={handleChangeText}
            name="email"
          />
          <hr className="col-10" />
        </div>
        <div className="mb-3 row">
          <div className="col-2">
            <Image src={"/icon lock.png"} width={"30px"} height={"30px"} />
          </div>
          <input
            className="col-7 bg-light border border-light"
            type={passHide === true ? "password" : "text"}
            placeholder="Enter your password"
            aria-label="Password"
            aria-describedby="basic-addon1"
            onChange={handleChangeText}
            name="password"
          />
          <div
            className="col-1 input-group-addon"
            onClick={
              passHide === true
                ? () => setPassHide(false)
                : () => setPassHide(true)
            }
          >
            {passHide === true ? <BsEye size={20} /> : <BsEyeSlash size={20} />}
          </div>
          <hr className="col-10" />
          <dev className="col-7"></dev>
        </div>
        <button className="authButton" onClick={handleSubmit}>
          {" "}
          Sign Up{" "}
        </button>
        <div className="col-10 text-center">
          Already have an account? Let’s{" "}
          <a href="/login" style={{ cursor: "pointer" }}>
            Login
          </a>
        </div>
      </div>
    </Layout>
  );
}
