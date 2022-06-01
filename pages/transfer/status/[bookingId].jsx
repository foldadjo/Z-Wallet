import React from "react";
import Layout from "../../../component/Layout/main";
import Image from "next/image";
import axios from "../../../utils/axios";
import Cookies from "js-cookie";
import Router, { useRouter } from "next/router";

const board = {
  borderRadius: "20px",
  boxShadow: "#E5E5E5 0px 2px 10px 2px",
  padding: "5px",
};

const button = {
  boxShadow: "#E5E5E5 0px 2px 10px 2px",
  padding: "5px",
  width: "200px",
};

function status() {
  const router = useRouter();
  const transferName = Cookies.get("transferName");
  const transferImage = Cookies.get("transferImage");
  const transferNoTelp = Cookies.get("transferNoTelp");
  const dateTransfer = Cookies.get("dateTransfer");
  const balance = Cookies.get("balance");
  const statusTf = Cookies.get("statusTf");
  const dataTransfer = Cookies.get("dataTransfer")
    ? JSON.parse(Cookies.get("dataTransfer"))
    : { amount: "", notes: "", receiverId: router.query.id };
  const transferId = router.query.bookingId;

  const handlePDF = async () => {
    try {
      const getPDF = await axios.get(`/export/transaction/${transferId}`);
      window.open(getPDF.data.data.url);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFinish = () => {
    router.push("/dashboard");
  };

  return (
    <Layout title="Transfer" menu="transfer">
      <div>
        <div className="bg-white text-dark p-4 pb-1 mb-5" style={board}>
          <div className="d-flex justify-content-center">
            {statusTf === "Success transfer" ? (
              <Image src={"/success.png"} width={"80px"} height={"80px"} />
            ) : (
              <Image src={"/failed.png"} width={"80px"} height={"80px"} />
            )}
          </div>
          <div
            className="d-flex justify-content-center m-4"
            style={{ fontSize: "15px" }}
          >
            {statusTf === "Success transfer" ? (
              <b>Transfer Success</b>
            ) : (
              <b>Transfer Failed</b>
            )}
          </div>
          <div
            className="d-flex text-center justify-content-center m-4"
            style={{ fontSize: "15px" }}
          >
            We can’t transfer your money at the moment, we recommend you to
            check your <br /> internet connection and try again.
          </div>
          <div className="text-muted d-flex content-card justify-content-between px-4 pt-1 mt-4">
            <div className="row">
              <div style={{ fontSize: "10px" }}>Ammont</div>
              <div className="text-secondary my-2" style={{ fontSize: "12px" }}>
                <b> Rp. {dataTransfer.amount} </b>
              </div>
            </div>
          </div>
          <div className="d-flex content-card justify-content-between px-4 pt-1 mt-4">
            <div className="row">
              <div style={{ fontSize: "10px" }}>Balance Left</div>
              <div className="text-secondary my-2" style={{ fontSize: "12px" }}>
                <b> Rp.{balance - dataTransfer.amount} </b>
              </div>
            </div>
          </div>
          <div className="d-flex content-card justify-content-between px-4 pt-1 mt-4">
            <div className="row">
              <div style={{ fontSize: "10px" }}>Date & Time</div>
              <div className="text-secondary my-2" style={{ fontSize: "12px" }}>
                <b> {dateTransfer} </b>
              </div>
            </div>
          </div>
          <div className="d-flex content-card justify-content-between px-4 pt-1 mt-4">
            <div className="row">
              <div style={{ fontSize: "10px" }}>Notes</div>
              <div className="text-secondary my-2" style={{ fontSize: "12px" }}>
                <b> {dataTransfer.notes} </b>
              </div>
            </div>
          </div>
          <br />
          <div style={{ fontSize: "12px" }}>
            <div>
              <b>Transfer to</b>
            </div>
          </div>
          <br />
          <div className="d-flex justify-content-between px-4 pt-3 content-card">
            <div className="row " style={{ height: "50px", width: "420px" }}>
              <div className="col-1">
                <div style={{ height: "50px", width: "40px" }}>
                  {transferImage === "null" ? (
                    <Image
                      src={"/profile default.png"}
                      width={"50px"}
                      height={"45px"}
                      style={{ borderRadius: "15px" }}
                    />
                  ) : (
                    <img
                      src={process.env.URL_CLOUDINARY + transferImage}
                      width={"50px"}
                      height={"45px"}
                      style={{ borderRadius: "15px" }}
                    />
                  )}
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
                  <b>{transferName}</b>
                </div>
                <div
                  className="text-secondary my-2"
                  style={{ fontSize: "8px" }}
                >
                  {transferNoTelp !== "null"
                    ? transferNoTelp
                    : "number phond haven't added"}
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="d-flex justify-content-end">
            {statusTf === "Success transfer" ? (
              <button
                className="flex-row mainButton bg-light text-primary"
                style={button}
                onClick={handlePDF}
              >
                <object>
                  <Image src={"/download.png"} width={"28px"} height={"30px"} />
                </object>
                {"  "}
                <object> Download PDF </object>
              </button>
            ) : (
              ""
            )}
            ''
            <button
              className="mainButton"
              style={button}
              onClick={() => handleFinish()}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default status;
