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

export default function index() {
  const router = useRouter();
  const name = Cookies.get("name");
  const noTelp = Cookies.get("noTelp");
  const [data, setData] = useState([]);

  useEffect(() => {
    getNotivication;
  }, []);
  // const pathname = router.pathname;
  const getNotivication = async () => {
    try {
      const id = Cookies.get("id");
      const result = await axios.get(
        `transaction/history?page=1&limit=5&filter=MONTH`
      );
      setData(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <nav className="navbar navbar-light bg-white" style={navbar}>
        <div className="container-fluid">
          <a className="navbar-brand m-3 mx-5 px-3">
            <Image src="/Zwallet-blue.png" width={"82px"} height={"20px"} />
          </a>
          <form className="d-flex mx-3">
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
                {noTelp === undefined ? "phone number not add" : noTelp}
              </p>
            </div>
            <div className="m-1 my-3 dropdown">
              <div
                className="dropbtn"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <Image src="/icon bell.png" width={"30px"} height={"30px"} />{" "}
              </div>
              <div className="p-2 m-3 dropdown-content">
                {data.map((item) => (
                  <div className="m-2 mb-4 content-card" key={item.id}>
                    <div className="container row">
                      <div className="col-2 w-25">
                        <Image
                          src={"/arrow-down.png"}
                          width={"40px"}
                          height={"40px"}
                        />
                      </div>
                      <div className="col-6">
                        <div className="text-muted">{item.notes}</div>
                        <div>
                          <b> Rp. {item.amount} </b>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </form>
        </div>
      </nav>
    </div>
  );
}
