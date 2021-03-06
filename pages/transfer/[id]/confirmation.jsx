import React, { useState, useEffect } from "react";
import Layout from "../../../component/Layout/main";
import Image from "next/image";
import Cookies from "js-cookie";
import Router, { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { checkPin } from "../../../store/action/user";
import { transferBalance } from "../../../store/action/dashboard";

const board = {
  borderRadius: "20px",
  boxShadow: "#E5E5E5 0px 2px 10px 2px",
  padding: "5px",
};

const myLoader = ({ src, width, quality }) => {
  return `${process.env.URL_CLOUDINARY + src}`;
};

function Confirmation() {
  const router = useRouter();
  const dispatch = useDispatch();

  const [transferName, setTransferName] = useState();
  const [transferImage, setTransferImage] = useState();
  const [transferNoTelp, setTransferNoTelp] = useState();
  const [dateTransfer, setDateTransfer] = useState();
  const [balance, setBalance] = useState();
  const [dataTransfer, setDataTransfer] = useState({
    amount: "",
    notes: "",
    receiverId: router.query.id,
  });

  useEffect(() => {
    setTransferName(Cookies.get("transferName"));
    setTransferImage(Cookies.get("transferImage"));
    setTransferNoTelp(Cookies.get("transferNoTelp"));
    setBalance(Cookies.get("balance"));
    setDateTransfer(Cookies.get("dateTransfer"));
    setDataTransfer(JSON.parse(Cookies.get("dataTransfer")));
  }, []);

  const [form, setForm] = useState({
    pin: "",
  });

  const handleChangeText = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form);
  };

  const handleSubmit = async () => {
    const data = {
      amount: dataTransfer.amount,
      notes: dataTransfer.notes,
      receiverId: dataTransfer.receiverId,
    };
    try {
      const result1 = await dispatch(checkPin(form.pin));
      console.log(result1);
      if (result1.value.data.msg === "Correct pin") {
        const transaction = await dispatch(transferBalance(data));
        Router.push(`/transfer/status/${transaction.value.data.data.id}`);
        Cookies.set(`statusTf`, transaction.value.data.msg);
        alert("transfer success");
      } else {
        alert("wrong pin");
      }
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
              <b>Transfer to</b>
            </div>
          </div>
          <br />
          <div className="d-flex justify-content-between px-4 pt-3 content-card">
            <div className="d-flex" style={{ height: "50px", width: "420px" }}>
              <div>
                <div style={{ height: "50px", width: "40px" }}>
                  {transferImage === "null" || transferImage === undefined ? (
                    <Image
                      src={"/profile default.png"}
                      width={"50px"}
                      height={"45px"}
                      style={{ borderRadius: "15px" }}
                    />
                  ) : (
                    <Image
                      loader={myLoader}
                      src={transferImage}
                      width={"50px"}
                      height={"45px"}
                      style={{ borderRadius: "15px" }}
                    />
                  )}
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
          <div style={{ fontSize: "15px" }}>
            <div>
              <b>Detail</b>
            </div>
          </div>
          <div className="d-flex content-card justify-content-between px-4 pt-1 mt-4">
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
          <div className="d-flex justify-content-end">
            <button
              className="mainButton"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal2"
              type="button"
            >
              Continue
            </button>
            <div
              className="modal fade"
              id="exampleModal2"
              tabIndex="-1"
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
                      data-bs-dismiss="modal"
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
                    <div className="container">
                      <div className="pinBox">
                        <input
                          className="pinEntry"
                          type="text"
                          maxLength="6"
                          name="pin"
                          onChange={handleChangeText}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-dismiss="modal"
                      onClick={handleSubmit}
                    >
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

export default Confirmation;
