import React, { useState } from "react";
import Image from "next/image";
// import { useState } from "react";
// import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import axios from "../utils/axios";

const card = {
  borderRadius: "25px",
  border: "white solid",
  boxShadow: "#E5E5E5 0px 2px 10px 2px",
};
const context = {
  cursor: "pointer",
};

function tooltip(props) {
  const router = useRouter();
  const [form, setForm] = useState({
    amount: "",
  });
  console.log(form);

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

  const handleLogout = async () => {
    Cookies.remove("id");
    Cookies.remove("token");
    Cookies.remove("noTelp");
    Cookies.remove("image");
    localStorage.clear();
    router.post("/login");
  };

  return (
    <div className="card p-4" style={card}>
      <a
        href="/dashboard"
        className={`${
          props.tooltip === "dashboard" ? "text-primary" : "text-secondary"
        } mt-4 mb-2 mx-3 gb font-weight-bold`}
        style={context}
      >
        {props.tooltip === "dashboard" ? (
          <div>
            <div style={{ position: "absolute", left: "0px" }}>
              <Image src="/blue.png" alt="icon" width={5} height={30} />
            </div>
            <Image src="/blue grid.png" alt="icon" width={20} height={20} />{" "}
            &ensp; <b> Dashboard </b>
          </div>
        ) : (
          <div>
            <Image
              src="/icon dashboard.png"
              alt="icon"
              width={20}
              height={20}
            />
            &ensp; <b> Dashboard </b>
          </div>
        )}
      </a>
      <br />
      <a
        href="/transfer"
        className={`${
          props.tooltip === "transfer" ? "text-primary" : "text-secondary"
        } mt-4 mb-2 mx-3 gb font-weight-bold`}
        style={context}
      >
        {props.tooltip === "transfer" ? (
          <div>
            <div style={{ position: "absolute", left: "0px" }}>
              <Image src="/blue.png" alt="icon" width={5} height={30} />
            </div>
            <Image src="/blue arrow-up.png" alt="icon" width={20} height={20} />{" "}
            &ensp; <b> Transfer </b>
          </div>
        ) : (
          <div>
            <Image src="/icon transfer.png" alt="icon" width={20} height={20} />
            &ensp; <b> Transfer </b>
          </div>
        )}
      </a>
      <br />
      <div>
        <button
          // href="/topup"
          className={`${
            props.tooltip === "topup" ? "text-primary" : "text-secondary"
          } mt-4 mb-2 mx-3 gb font-weight-bold bg-white border border-white`}
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          type="button"
        >
          <Image src="/icon topup.png" alt="icon" width={20} height={20} />
          &ensp; <b> Top Up </b>
        </button>
        <div
          className="modal fade"
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
                  className="close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
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
                  className="form-control w-75"
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
      <br />
      <a
        href="/profile"
        className={`${
          props.tooltip === "profile" ? "text-primary" : "text-secondary"
        } mt-4 mb-2 mx-3 gb font-weight-bold`}
        style={context}
      >
        {props.tooltip === "profile" ? (
          <div>
            <div style={{ position: "absolute", left: "0px" }}>
              <Image src="/blue.png" alt="icon" width={5} height={30} />
            </div>
            <Image src="/blue user.png" alt="icon" width={20} height={20} />{" "}
            &ensp; <b> Profile </b>
          </div>
        ) : (
          <div>
            <Image src="/icon user.png" alt="icon" width={20} height={20} />
            &ensp; <b> Profile </b>
          </div>
        )}
      </a>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div>
        <a
          onClick={handleLogout}
          href="/login"
          className={`${
            props.tooltip === "logout" ? "text-primary" : "text-secondary"
          } mt-4 mb-2 mx-3 gb font-weight-bold`}
          style={context}
        >
          <Image src="/icon logout.png" alt="icon" width={20} height={20} />
          &ensp; <b> Logout </b>
        </a>
      </div>
    </div>
  );
}

export default tooltip;
