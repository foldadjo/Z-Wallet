import React, { useState } from "react";
import Navbar from "../navbar";
import Head from "next/head";
import Footer from "../footer";
import Tooltip from "../tooltip";
import NextNProgress from "nextjs-progressbar";

export default function MainLayout(props) {
  const [form, setForm] = useState({
    amount: "",
  });

  const handleChangeText = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleTopup = async () => {
    try {
      const topUp = await axios.post("/transaction/top-up", form);
      console.log(topUp);
      window.open(topUp.data.data.redirectUrl);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <NextNProgress
        color="#29D"
        startPosition={0.7}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <Head>
        <title>{props.title}</title>
      </Head>
      <div className="bg-light">
        <Navbar />
        <div className="d-flex justify-content-md-center">
          <div className="cardDashboard">
            <div className="row justify-content-md-center mx-4">
              <div className="tooltipMain m6 mx-2">
                <Tooltip tooltip={props.menu} />
              </div>
              <div className="childern m6">
                <main>{props.children}</main>
              </div>
            </div>
          </div>
        </div>
        <Footer />
        <div
          className="modal fade justify-content-center align-item-center"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Topup
                </h5>
                <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-dismiss="modal"
                >
                  X
                </button>
              </div>
              <div className="modal-body">
                Enter the amount of monry, and click <br /> submit
              </div>
              <br />
              <div className="form-group d-flex justify-content-center">
                Rp.
                <input
                  type="number"
                  className="form-control w-75 my-3"
                  id="recipient-name"
                  name="amount"
                  onChange={handleChangeText}
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  // data-bs-dismiss="modal"
                  onClick={handleTopup}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
