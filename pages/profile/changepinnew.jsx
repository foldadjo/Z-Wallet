import React from "react";
import Layout from "../../component/Layout/main";
import Link from "next/link";

const board = {
  borderRadius: "20px",
  boxShadow: "#E5E5E5 0px 2px 10px 2px",
  padding: "5px",
};

function profile() {
  return (
    <Layout title="Change PIN" menu="profile">
      <div>
        <div className="bg-white text-dark p-4 pb-1 mb-5" style={board}>
          <div style={{ fontSize: "15px" }}>
            <div>
              <b>Change PIN</b>
            </div>
          </div>
          <br />
          <div className="text-secondary" style={{ fontSize: "10px" }}>
            Type your new 6 digits security PIN to use in <br /> Zwallet.
          </div>
          <br />
          <br />
          <div className="d-flex justify-content-center my-3">
            <div className="pinBox">
              <input className="pinEntry" type="text" maxlength="6" />
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <div className="w-50">
              <Link href="/profile">
                <a>
                  <button className="authButton w-100"> Continue </button>
                </a>
              </Link>
            </div>
          </div>
          <br />
        </div>
      </div>
    </Layout>
  );
}

export default profile;
