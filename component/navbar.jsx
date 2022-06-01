import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Cookies from "js-cookie";
import axios from "../utils/axios";

const navbar = {
  borderRadius: "0 0 25px 25px",
  border: "white solid",
  boxShadow: "#E5E5E5 0px 2px 10px 2px",
};

export default function Navbar(props) {
  const router = useRouter();
  const name = Cookies.get("name");
  const noTelp = Cookies.get("noTelp");
  const dataHistory = Cookies.get("history")
    ? JSON.parse(Cookies.get("history"))
    : [];

  return (
    <div>
      <div
        className="d-flex justify-content-beetween bg-white pt-4"
        style={navbar}
      >
        <div className="container-fluid w-25">
          <a className="navbar-brand m-3 mx-5 px-3">
            <Image src="/Zwallet-blue.png" width={"82px"} height={"20px"} />
          </a>
        </div>
        <div className="dropdown d-flex justify-content-end w-75">
          <div className="d-flex mx-3" style={{ widht: "120px" }}>
            <div className="m-1 mx-2">
              <Image
                src={"/profile default.png"}
                width={"50px"}
                height={"45px"}
                style={{ borderRadius: "15px" }}
              />
            </div>
            <div className="m-1">
              <strong>{name}</strong>
              <p className="mt-1" style={{ fontSize: "10px" }}>
                {noTelp === "null" ? "phone number not add" : noTelp}
              </p>
            </div>
          </div>
          <a
            className="btn dropdown-toggle"
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <Image src="/icon bell.png" width={"30px"} height={"30px"} />
          </a>

          <ul className="dropdown-menu w-50" aria-labelledby="dropdownMenuLink">
            {/* {dataHistory.map((item) => item.id)} */}
            {dataHistory.map((item) => (
              <li key={item.id}>
                <div className="m-2 mb-4 mx-3 content-card" key={item.id}>
                  <div className="container row">
                    <div className="col-2 w-25">
                      {item.type === "topup" ? (
                        <Image
                          src={"/arrow-down.png"}
                          width={"40px"}
                          height={"40px"}
                        />
                      ) : (
                        <Image
                          src={"/arrow-up.png"}
                          width={"40px"}
                          height={"40px"}
                        />
                      )}
                    </div>
                    <div className="col-6">
                      <div className="text-muted">{item.type}</div>
                      <div>
                        <b> Rp. {item.amount} </b>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
