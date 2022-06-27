import React from "react";
import Image from "next/image";
// import { useState } from "react";
// import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import {
  BsFillGridFill,
  BsArrowUpShort,
  BsPlus,
  BsPersonFill,
} from "react-icons/bs";

const card = {
  borderRadius: "25px",
  border: "white solid",
  boxShadow: "#E5E5E5 0px 2px 10px 2px",
};
const context = {
  cursor: "pointer",
};

function Tooltip(props) {
  const router = useRouter();

  const handleLogout = () => {
    Cookies.remove("id");
    Cookies.remove("token");
    Cookies.remove("noTelp");
    Cookies.remove("image");
    Cookies.remove("balance");
    Cookies.remove("name");
    Cookies.remove("dataTransfer");
    Cookies.remove("statusTf");
    Cookies.remove("dateTransfer");
    Cookies.remove("transferImage");
    Cookies.remove("transferNoTelp");
    Cookies.remove("transferName");
    Cookies.remove("history");

    localStorage.clear();
    router.push("/");
  };

  const goToDashboard = () => {
    router.push("/dashboard");
  };
  const goToTransfer = () => {
    router.push("/transfer");
  };
  const goToProfile = () => {
    router.push("/profile");
  };

  return (
    <>
      <div className="card p-4" style={card}>
        <div
          onClick={goToDashboard}
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
              <BsFillGridFill size={20} color={"blue"} /> &ensp;
              <b> Dashboard </b>
            </div>
          ) : (
            <div>
              <BsFillGridFill size={20} color={"black"} />
              &ensp; <b> Dashboard </b>
            </div>
          )}
        </div>
        <br />
        <div
          onClick={goToTransfer}
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
              <BsArrowUpShort size={20} color={"blue"} /> &ensp;{" "}
              <b> Transfer </b>
            </div>
          ) : (
            <div>
              <BsArrowUpShort size={20} color={"black"} /> &ensp;{" "}
              <b> Transfer </b>
            </div>
          )}
        </div>
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
            <BsPlus size={20} color={"black"} />
            &ensp; <b> Top Up </b>
          </button>
        </div>
        <br />
        <div
          onClick={goToProfile}
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
              <BsPersonFill size={20} color={"blue"} /> &ensp; <b> Profile </b>
            </div>
          ) : (
            <div>
              <BsPersonFill size={20} color={"black"} />
              &ensp; <b> Profile </b>
            </div>
          )}
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div>
          <div
            onClick={handleLogout}
            className={`${
              props.tooltip === "logout" ? "text-primary" : "text-secondary"
            } mt-4 mb-2 mx-3 gb font-weight-bold`}
            style={context}
          >
            <Image src="/icon logout.png" alt="icon" width={20} height={20} />
            &ensp; <b> Logout </b>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tooltip;
