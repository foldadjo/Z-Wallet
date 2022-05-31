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
    <Layout title="Profile" menu="profile">
      <div>
        <div className="bg-white text-dark p-4 pb-1 mb-5" style={board}>
          <div className="d-flex justify-content-center">
            <Image
              src={"/profile default.png"}
              width={"80px"}
              height={"75px"}
              style={{ borderRadius: "20px" }}
            />
          </div>
          <div className="d-flex justify-content-center py-2">
            <div class="custom-file">
              <input
                type="file"
                id="inputGroupFile02"
                style={{ display: "none" }}
              />
              <label class="custom-file-label" for="inputGroupFile02">
                <Image src="/icon pen.png" width={"10px"} height={"12px"} />
                &ensp; edit
              </label>
            </div>
          </div>
          <div
            className="d-flex justify-content-center mt-3"
            style={{ fontSize: "15px" }}
          >
            <b>Robert Chandler</b>
          </div>
          <div
            className="d-flex text-center justify-content-center mt-2 mb-4"
            style={{ fontSize: "15px" }}
          >
            +62 813-9387-7946
          </div>
          <a href="/profile/1" className="d-flex justify-content-center">
            <div className="w-50 d-flex content-card justify-content-between px-4 pt-1 mt-4">
              <div className="text-dark my-2" style={{ fontSize: "12px" }}>
                <b> Personal Information </b>
              </div>
              <div className="mt-1">
                <Image src="/arrow-left.png" width={"30px"} height={"25px"} />
              </div>
            </div>
          </a>
          <a
            href="/profile/changepass"
            className="d-flex justify-content-center"
          >
            <div className="d-flex w-50 content-card justify-content-between px-4 pt-1 mt-4">
              <div className="text-dark my-2" style={{ fontSize: "12px" }}>
                <b> Change Password </b>
              </div>
              <div className="mt-1">
                <Image src="/arrow-left.png" width={"30px"} height={"25px"} />
              </div>
            </div>
          </a>
          <a
            href="/profile/changepin"
            className="d-flex justify-content-center"
          >
            <div className="d-flex w-50 content-card justify-content-between px-4 pt-1 mt-4">
              <div className="text-dark my-2" style={{ fontSize: "12px" }}>
                <b> Change PIN </b>
              </div>
              <div className="mt-1">
                <Image src="/arrow-left.png" width={"30px"} height={"25px"} />
              </div>
            </div>
          </a>
          <a href="/" className="d-flex justify-content-center">
            <div className="d-flex w-50 content-card justify-content-between px-4 pt-1 mt-4">
              <div className="text-dark my-2" style={{ fontSize: "12px" }}>
                <b> Logout </b>
              </div>
            </div>
          </a>
          <br />
          <br />
        </div>
      </div>
    </Layout>
  );
}

export default profile;
