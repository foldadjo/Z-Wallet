import React from "react";
import Layout from "../../component/Layout/auth";
import Image from "next/image";

export default function CreatePin() {
  return (
    <Layout title="Create Pin Page">
      <div className="container">
        <h5 className="pb-3" style={{ lineHeight: "160%" }}>
          <strong>
            Secure Your Account, Your Wallet, <br />
            and Your Data With 6 Digits PIN <br />
            That You Created Yourself.
          </strong>
        </h5>
        <div
          className="text-muted"
          style={{ fontSize: "12px", lineHeight: "160%" }}
        >
          Create 6 digits pin to secure all your money and your data <br /> in
          Zwallet app. Keep it secret and don’t tell anyone about your <br />{" "}
          Zwallet account password and the PIN.
        </div>
        <div className="mt-5 mb-3 row justify-content-md-center">
          <div className="col-1 card mx-2">
            <input type="number" min="0" max="9" />
          </div>
          <div className="col-1 card mx-2">
            <input type="number" min="0" max="9" />
          </div>
          <div className="col-1 card mx-2">
            <input type="number" min="0" max="9" />
          </div>
          <div className="col-1 card mx-2">
            <input type="number" min="0" max="9" />
          </div>
          <div className="col-1 card mx-2">
            <input type="number" min="0" max="9" />
          </div>
          <div className="col-1 card mx-2">
            <input type="number" min="0" max="9" />
          </div>
          <div className="col-2"></div>
        </div>
        <button className="authButton"> Confirm </button>
      </div>
    </Layout>
  );
}
