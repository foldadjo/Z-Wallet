import React, { useState } from "react";
import Layout from "../../../component/Layout/main";
import Image from "next/image";
import axios from "../../../utils/axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const board = {
  borderRadius: "20px",
  boxShadow: "#E5E5E5 0px 2px 10px 2px",
  padding: "5px",
};

const input = {
  borderRadius: "5px",
  padding: "10px 20px",
  border: "0",
  width: "60%",
  height: "40px",
  fontSize: "30px",
  textAlign: "center",
};

function transferId() {
  const router = useRouter();
  const transferName = Cookies.get("transferName");
  const transferImage = Cookies.get("transferImage");
  const transferNoTelp = Cookies.get("transferNoTelp");
  const balance = Cookies.get("balance");

  const [form, setForm] = useState({
    receiverId: "",
    amount: "",
    notes: "",
  });

  const handleChangeText = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const data = {
      amount: form.amount,
      notes: form.notes,
      receiverId: router.query.id,
    };
    try {
      const date = new Date().toISOString().split("T")[0];
      Cookies.set("dataTransfer", JSON.stringify(data));
      Cookies.set("dateTransfer", date);
      router.push(`/transfer/${data.receiverId}/confirmation`);
    } catch (error) {
      console.log(error);
    }
  };

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
            <div className="d-flex" style={{ height: "50px", width: "420px" }}>
              <div>
                <div style={{ height: "50px", width: "40px" }}>
                  <>
                    <img
                      src={
                        transferImage === undefined || transferImage === "null"
                          ? "/profile default.png"
                          : process.env.URL_CLOUDINARY + transferImage
                      }
                      width={"50px"}
                      height={"45px"}
                      style={{ borderRadius: "15px" }}
                    />
                  </>
                </div>
              </div>
              <div
                className="profileTransfer"
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
              name="amount"
              onChange={handleChangeText}
            />
          </div>
          <br />
          <div className="d-flex justify-content-center">
            <b> Rp. {!balance ? "0" : balance} Available </b>
          </div>
          <br />
          <br />
          <div>
            <div className="d-flex noteForTransfer">
              <div className="imageTransfer">
                <Image src={"/icon pen.png"} width={"30px"} height={"30px"} />
              </div>
              <div className="noteTransfer">
                <input
                  className="bg-white border border-white"
                  type="text"
                  placeholder="Add some notes"
                  name="notes"
                  onChange={handleChangeText}
                />
              </div>
            </div>
            <div className="row d-flex justify-content-center mt-1">
              <hr className="col-5" />
            </div>
          </div>
          <div className="d-flex buttonPosition">
            <button className="mainButton" onClick={handleSubmit}>
              Continue
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default transferId;
