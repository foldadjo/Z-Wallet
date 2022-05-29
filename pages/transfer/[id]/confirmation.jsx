import React from "react";
import Layout from "../../../component/Layout/main";
import Image from "next/image";

const board = {
  borderRadius: "20px",
  boxShadow: "#E5E5E5 0px 2px 10px 2px",
  padding: "5px",
};

function confirmation() {
  return (
    <Layout title="Transfer" menu="transfer">
      <div>
        <div className="bg-white text-dark p-4 pb-1 mb-5" style={board}>
          <div style={{ fontSize: "15px" }}>
            <div>
              <b>Transfer to</b>
            </div>
          </div>
          <br />
          <div className="d-flex justify-content-between px-4 pt-3 content-card">
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
          <br />
          <div style={{ fontSize: "15px" }}>
            <div>
              <b>Detail</b>
            </div>
          </div>
          <div className="d-flex content-card justify-content-between px-4 pt-1 mt-4">
            <div className="row">
              <div style={{ fontSize: "10px" }}>Ammont</div>
              <div className="text-secondary my-2" style={{ fontSize: "12px" }}>
                <b> Rp100.000 </b>
              </div>
            </div>
          </div>
          <div className="d-flex content-card justify-content-between px-4 pt-1 mt-4">
            <div className="row">
              <div style={{ fontSize: "10px" }}>Balance Left</div>
              <div className="text-secondary my-2" style={{ fontSize: "12px" }}>
                <b> Rp20.000 </b>
              </div>
            </div>
          </div>
          <div className="d-flex content-card justify-content-between px-4 pt-1 mt-4">
            <div className="row">
              <div style={{ fontSize: "10px" }}>Date & Time</div>
              <div className="text-secondary my-2" style={{ fontSize: "12px" }}>
                <b> May 11, 2020 - 12.20 </b>
              </div>
            </div>
          </div>
          <div className="d-flex content-card justify-content-between px-4 pt-1 mt-4">
            <div className="row">
              <div style={{ fontSize: "10px" }}>Notes</div>
              <div className="text-secondary my-2" style={{ fontSize: "12px" }}>
                <b> For buying some socks </b>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-end">
            <button
              className="mainButton"
              data-toggle="modal"
              data-target="#exampleModal"
              type="button"
            >
              Continue
            </button>
            <div
              className="modal fade"
              id="exampleModal"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Enter PIN to Transfer
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    Enter your 6 digits PIN for confirmation to <br /> continue
                    transferring money.{" "}
                  </div>
                  <br />
                  <div className="form-group">
                    <div class="container">
                      <div class="pinBox">
                        <input class="pinEntry" type="text" maxlength="6" />
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-primary">
                      Continue
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default confirmation;
