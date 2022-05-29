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
  backgroundColor: "#6379F4",
  border: "white solid 1px",
  color: "white",
  padding: "5px 5px 5px 0",
  width: "150px",
  height: "50px",
  margin: "10px",
  cursor: "pointer,",
};

function dashboard() {
  return (
    <Layout title="Dashboard">
      <div>
        <div className="bg-primary text-white row p-4 pb-1 mb-5" style={board}>
          <div className="col-8 my-2">
            <div className="text-light">Balance</div>
            <div style={{ fontSize: "40px" }}>
              <strong> Rp 120.000 </strong>
            </div>
            <div className="text-light mt-2">+62 813-9387-7946</div>
          </div>
          <div className="col-3 mx-4">
            <button style={button}>
              <Image
                src="/icon transfer.png"
                alt="icon"
                width={20}
                height={20}
              />
              &ensp; Transfer
            </button>
            <button style={button}>
              <Image src="/icon topup.png" alt="icon" width={20} height={20} />
              &ensp; Top Up
            </button>
          </div>
        </div>
        <div className="row d-flex justify-content-between my-4">
          <div className="col-6 p-4 bg-white text-dark" style={board}>
            <div className="row">
              <div className="col-6">
                <Image src={"/arrow-down.png"} width={"30px"} height={"30px"} />
                <div className="text-secondary">Income</div>
                <div>
                  <b> Rp2.120.000 </b>
                </div>
              </div>
              <div className="col-1"></div>
              <div className="col-5">
                <Image src={"/arrow-up.png"} width={"30px"} height={"30px"} />
                <div className="text-secondary">Expense</div>
                <div>
                  <b> Rp1.560.000 </b>
                </div>
              </div>
            </div>
            <div className="m-2">
              <Image src={"/graphic.png"} width={"250px"} height={"200px"} />
            </div>
          </div>
          {/* <div className="col-1"></div> */}
          <div className="col-5 bg-white text-dark p-4" style={board}>
            <div
              className="d-flex justify-content-between"
              style={{ fontSize: "12px" }}
            >
              <div>
                <b>Transaction History</b>
              </div>
              <div>
                <a href="/dashboard/history">See all</a>
              </div>
            </div>
            <br />
            <br />
            <div className="d-flex justify-content-between">
              <div className="row d-flex justify-content-start">
                <div className="col-4">
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
                  style={{ height: "50px", width: "120px" }}
                >
                  <div style={{ fontSize: "12px" }}>
                    <b>Default People</b>
                  </div>
                  <div className="text-secondary" style={{ fontSize: "8px" }}>
                    Accepted
                  </div>
                </div>
              </div>
              <div className="text-success" style={{ fontSize: "10px" }}>
                <b> +Rp50.000</b>
              </div>
            </div>
            <br />
            <div className="d-flex justify-content-between">
              <div className="row">
                <div className="col-4">
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
                  style={{ height: "50px", width: "120px" }}
                >
                  <div style={{ fontSize: "12px" }}>
                    <b>Netflix</b>
                  </div>
                  <div className="text-secondary" style={{ fontSize: "8px" }}>
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
      </div>
    </Layout>
  );
}

export default dashboard;
