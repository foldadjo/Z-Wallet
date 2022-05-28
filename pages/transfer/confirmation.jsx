import React from "react";
import Layout from "../../component/Layout/main";
import Image from "next/image";

const board = {
  borderRadius: "20px",
  boxShadow: "#E5E5E5 0px 2px 10px 2px",
  padding: "5px",
};

const card = {
  borderRadius: "10px",
  boxShadow: "#E5E5E5 0px 1px 5px 1px",
  padding: "5px",
};

const input = {
  borderRadius: "5px",
  padding: "10px 20px",
  border: "0",
  width: "100%",
  height: "40px",
  fontSize: "10px",
};

function dashboard() {
  return (
    <Layout title="Dashboard">
      <div>
        <div className="bg-white text-dark p-4" style={board}>
          <div style={{ fontSize: "12px" }}>
            <div>
              <b>Search Receiver</b>
            </div>
          </div>
          <br />
          <input
            className="text-secondary bg-light"
            style={input}
            type="text"
            placeholder="Search receiver here"
          />
          <br />
          <br />
          <div
            className="d-flex justify-content-between px-4 pt-3"
            style={card}
          >
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
                  <b>Momo Taro</b>
                </div>
                <div
                  className="text-secondary my-2"
                  style={{ fontSize: "8px" }}
                >
                  +62 812-4343-6731
                </div>
              </div>
            </div>
          </div>
          <br />
          <div
            className="d-flex justify-content-between px-4 pt-3"
            style={card}
          >
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
                  <b>Samuel Suhi</b>
                </div>
                <div
                  className="text-secondary my-2"
                  style={{ fontSize: "8px" }}
                >
                  +62 813-8492-9994
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default dashboard;
