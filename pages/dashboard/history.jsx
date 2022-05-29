import React from "react";
import Layout from "../../component/Layout/main";
import Image from "next/image";

const board = {
  borderRadius: "20px",
  boxShadow: "#E5E5E5 0px 2px 10px 2px",
  padding: "5px",
};

const button = {
  borderRadius: "10px",
  backgroundColor: "light",
  border: "white solid 1px",
  padding: "5px 5px 5px 0",
  width: "120px",
  height: "30px",
  cursor: "pointer,",
};

function dashboard() {
  return (
    <Layout title="Dashboard">
      <div>
        <div className="bg-white text-dark p-4" style={board}>
          <div
            className="d-flex justify-content-between"
            style={{ fontSize: "12px" }}
          >
            <div>
              <b>Transaction History</b>
            </div>
            <div>
              <button style={button}> --Select Filter--</button>
            </div>
          </div>
          <br />
          <br />
          <div className="d-flex justify-content-between">
            <div className="row" style={{ height: "50px", width: "420px" }}>
              <div className="col-1">
                <div style={{ height: "50px", width: "40px" }}>
                  {" "}
                  <Image
                    src={"/profile default.png"}
                    width={"50px"}
                    height={"45px"}
                    style={{ borderRadius: "15px" }}
                  />
                </div>
              </div>
              <div
                className="col-8"
                style={{
                  height: "50px",
                  width: "220px",
                  padding: "0 0 0 45px",
                }}
              >
                <div style={{ fontSize: "12px" }}>
                  <b>Default People</b>
                </div>
                <div
                  className="text-secondary my-2"
                  style={{ fontSize: "8px" }}
                >
                  Accepted
                </div>
              </div>
            </div>
            <div className="text-teal" style={{ fontSize: "10px" }}>
              <b> +Rp50.000</b>
            </div>
          </div>
          <br />
          <div className="d-flex justify-content-between">
            <div className="row " style={{ height: "50px", width: "420px" }}>
              <div className="col-1">
                <div style={{ height: "50px", width: "40px" }}>
                  <Image
                    src={"/profile default.png"}
                    width={"50px"}
                    height={"45px"}
                    style={{ borderRadius: "15px" }}
                  />
                </div>
              </div>
              <div
                className="col-8"
                style={{
                  height: "50px",
                  width: "220px",
                  padding: "0 0 0 45px",
                }}
              >
                <div style={{ fontSize: "12px" }}>
                  <b>Netflix</b>
                </div>
                <div
                  className="text-secondary my-2"
                  style={{ fontSize: "8px" }}
                >
                  Transfer
                </div>
              </div>
            </div>
            <div className="text-danger" style={{ fontSize: "10px" }}>
              <b> -Rp149.000</b>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default dashboard;
