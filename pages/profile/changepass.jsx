import React, { useState } from "react";
import Layout from "../../component/Layout/main";
import Image from "next/image";
import axios from "../../utils/axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const board = {
  borderRadius: "20px",
  boxShadow: "#E5E5E5 0px 2px 10px 2px",
  padding: "5px",
};

function changePass() {
  const router = useRouter();
  const id = Cookies.get("id");
  const [form, setForm] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChangeText = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const data = {
      oldPassword: form.oldPassword,
      newPassword: form.newPassword,
      confirmPassword: form.confirmPassword,
    };
    try {
      const result = await axios.patch(`/user/password/${id}`, data);
      console.log(result);
      alert(result.data.msg);
      router.push("/profile");
    } catch (error) {
      alert(error.response.data.msg);
      console.log(error);
    }
  };

  return (
    <Layout title="Change Password" menu="profile">
      <div>
        <div className="bg-white text-dark p-4 pb-1 mb-5" style={board}>
          <div style={{ fontSize: "15px" }}>
            <div>
              <b>Change Password</b>
            </div>
          </div>
          <br />
          <div className="text-secondary" style={{ fontSize: "10px" }}>
            You must enter your current password and then <br /> type your new
            password twice.
          </div>
          <br />
          <br />
          <div className="d-flex justify-content-center row my-3">
            <div className="col-1">
              <Image src={"/icon lock.png"} width={"30px"} height={"30px"} />
            </div>
            <input
              className="col-5 bg-white text-secondary border border-white"
              type="password"
              placeholder="Current password"
              aria-label="Password"
              aria-describedby="basic-addon1"
              onChange={handleChangeText}
              name="oldPassword"
            />
            <div className="input-group-addon">
              <i className="fa fa-eye-slash" aria-hidden="true"></i>
            </div>
            <hr className="col-6" />
          </div>
          <div className="d-flex justify-content-center row my-3">
            <div className="col-1">
              <Image src={"/icon lock.png"} width={"30px"} height={"30px"} />
            </div>
            <input
              className="col-5 bg-white text-secondary border border-white"
              type="password"
              placeholder="New password"
              aria-label="Password"
              aria-describedby="basic-addon1"
              onChange={handleChangeText}
              name="newPassword"
            />
            <div className="input-group-addon">
              <i className="fa fa-eye-slash" aria-hidden="true"></i>
            </div>
            <hr className="col-6" />
          </div>
          <div className="d-flex justify-content-center row my-3">
            <div className="col-1">
              <Image src={"/icon lock.png"} width={"30px"} height={"30px"} />
            </div>
            <input
              className="col-5 bg-white text-secondary border border-white"
              type="password"
              placeholder="Repeat new password"
              aria-label="Password"
              aria-describedby="basic-addon1"
              onChange={handleChangeText}
              name="confirmPassword"
            />
            <div className="input-group-addon">
              <i className="fa fa-eye-slash" aria-hidden="true"></i>
            </div>
            <hr className="col-6" />
          </div>
          <br />
          <div className="d-flex justify-content-center row my-3 ">
            <button className="authButton w-50" onClick={handleSubmit}>
              {" "}
              Change Password{" "}
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default changePass;
