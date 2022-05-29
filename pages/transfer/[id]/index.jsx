import React from "react";
import Layout from "../../../component/Layout/main";
import Image from "next/image";

const board = {
  borderRadius: "20px",
  boxShadow: "#E5E5E5 0px 2px 10px 2px",
  padding: "5px",
};

const input = {
  borderRadius: "5px",
  padding: "10px 20px",
  border: "0",
  width: "30%",
  height: "40px",
  fontSize: "30px",
  textAlign: "center",
};

function transfer() {
  return (
    <Layout title="Transfer" menu="transfer">
      <div>
        <div className="bg-white text-dark p-4 pb-1 mb-5" style={board}>
          <div style={{ fontSize: "15px" }}>
            <div>
              <b>Transfer Money</b>
            </div>
          </div>
          <br />
          <div className="d-flex content-card justify-content-between px-4 pt-3">
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
          <div className="text-secondary" style={{ fontSize: "10px" }}>
            Type the amount you want to transfer and then <br />
            press continue to the next steps.
          </div>
          <br />
          <br />
          <div className="d-flex justify-content-center">
            <input
              className="text-bluesky bg-white"
              style={input}
              type="number"
              placeholder="0.00"
            />
          </div>
          <br />
          <div className="d-flex justify-content-center">
            <b> Rp120.000 Available </b>
          </div>
          <br />
          <br />
          <div className="row d-flex justify-content-center">
            <div className="col-1">
              <Image src={"/icon pen.png"} width={"30px"} height={"30px"} />
            </div>
            <input
              className="col-4 bg-white border border-white"
              type="text"
              placeholder="Add some notes"
            />
            <div className="row d-flex justify-content-center mt-1">
              <hr className="col-5" />
            </div>
          </div>
          <div className="d-flex justify-content-end">
            <button className="mainButton">Continue</button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default transfer;
