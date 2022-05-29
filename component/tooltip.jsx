import React from "react";
import Image from "next/image";

const card = {
  borderRadius: "25px",
  border: "white solid",
  boxShadow: "#E5E5E5 0px 2px 10px 2px",
};

const context = {
  cursor: "pointer",
};

function tooltip(props) {
  return (
    <div className="card p-4" style={card}>
      <a
        className={`${
          props.tooltip === "dashboard" ? "text-primary" : "text-secondary"
        } mt-4 mb-2 mx-3 gb font-weight-bold`}
        href="/dashboard"
        style={context}
      >
        <Image src="/icon dashboard.png" alt="icon" width={20} height={20} />
        &ensp; <b> Dashboard </b>
      </a>
      <br />
      <a
        href="/transfer"
        className={`${
          props.tooltip === "transfer" ? "text-primary" : "text-secondary"
        } mt-4 mb-2 mx-3 gb font-weight-bold`}
        style={context}
      >
        <Image src="/icon transfer.png" alt="icon" width={20} height={20} />
        &ensp; <b> Transfer </b>
      </a>
      <br />
      <div>
        <button
          // href="/topup"
          className={`${
            props.tooltip === "topup" ? "text-primary" : "text-secondary"
          } mt-4 mb-2 mx-3 gb font-weight-bold bg-white border border-white`}
          data-toggle="modal"
          data-target="#exampleModal"
          type="button"
        >
          <Image src="/icon topup.png" alt="icon" width={20} height={20} />
          &ensp; <b> Top Up </b>
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
                  Topup
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
                Enter the amount of monry, and click <br /> submit
              </div>
              <br />
              <div className="form-group">
                Rp.
                <input
                  type="number"
                  className="form-control"
                  id="recipient-name"
                />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <a
        href="/profile"
        className={`${
          props.tooltip === "profile" ? "text-primary" : "text-secondary"
        } mt-4 mb-2 mx-3 gb font-weight-bold`}
        style={context}
      >
        <Image src="/icon user.png" alt="icon" width={20} height={20} />
        &ensp; <b> Profile </b>
      </a>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div
        className={`${
          props.tooltip === "dashboard" ? "text-primary" : "text-secondary"
        } mt-4 mb-2 mx-3 gb font-weight-bold`}
        style={context}
      >
        <Image src="/icon logout.png" alt="icon" width={20} height={20} />
        &ensp; <b> Logout </b>
      </div>
    </div>
  );
}

export default tooltip;
