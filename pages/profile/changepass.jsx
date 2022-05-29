import React from "react";
import Layout from "../../component/Layout/main";
import Image from "next/image";

const board = {
  borderRadius: "20px",
  boxShadow: "#E5E5E5 0px 2px 10px 2px",
  padding: "5px",
};

function profile() {
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
            />
            <div className="input-group-addon">
              <i className="fa fa-eye-slash" aria-hidden="true"></i>
            </div>
            <hr className="col-6" />
          </div>
          <br />
          <div className="d-flex justify-content-center row my-3 ">
            <button className="authButton w-50"> Change Password </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default profile;
