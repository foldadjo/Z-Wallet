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
          <div style={{ fontSize: "15px" }}>
            <div>
              <b>Personal Information</b>
            </div>
          </div>
          <br />
          <div className="text-secondary" style={{ fontSize: "10px" }}>
            We got your personal information from the sign <br /> up proccess.
            If you want to make changes on <br /> your information, contact our
            support.
          </div>
          <br />
          <div className="d-flex content-card justify-content-between px-4 pt-3">
            <div className="row" style={{ height: "60px", width: "420px" }}>
              <div
                style={{
                  height: "50px",
                  width: "220px",
                  padding: "0 0 0 10px",
                }}
              >
                <div className="text-secondary" style={{ fontSize: "12px" }}>
                  First Name
                </div>
                <div className="my-2" style={{ fontSize: "18px" }}>
                  <b>Robert</b>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="d-flex content-card justify-content-between px-4 pt-3">
            <div className="row" style={{ height: "60px", width: "420px" }}>
              <div
                style={{
                  height: "50px",
                  width: "220px",
                  padding: "0 0 0 10px",
                }}
              >
                <div className="text-secondary" style={{ fontSize: "12px" }}>
                  Last Name
                </div>
                <div className="my-2" style={{ fontSize: "18px" }}>
                  <b>Chandler</b>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="d-flex content-card justify-content-between px-4 pt-3">
            <div className="row" style={{ height: "60px", width: "420px" }}>
              <div
                style={{
                  height: "50px",
                  width: "220px",
                  padding: "0 0 0 10px",
                }}
              >
                <div className="text-secondary" style={{ fontSize: "12px" }}>
                  Verified E-mail
                </div>
                <div className="my-2" style={{ fontSize: "18px" }}>
                  <b>pewdiepie1@gmail.com</b>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="d-flex content-card justify-content-between px-4 pt-3">
            <div className="row" style={{ height: "60px", width: "420px" }}>
              <div
                style={{
                  height: "50px",
                  width: "220px",
                  padding: "0 0 0 10px",
                }}
              >
                <div className="text-secondary" style={{ fontSize: "12px" }}>
                  Phone Number
                </div>
                <div className="my-2" style={{ fontSize: "18px" }}>
                  <b>+62 813-9387-7946</b>
                </div>
              </div>
            </div>
            <div>
              <br />
              <a href="/profile/managephone">manage</a>
            </div>
          </div>
          <br />
        </div>
      </div>
    </Layout>
  );
}

export default profile;
