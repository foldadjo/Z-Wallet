import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Cookies from "js-cookie";
import { Dropdown } from "react-bootstrap";

const navbar = {
  borderRadius: "0 0 25px 25px",
  border: "white solid",
  boxShadow: "#E5E5E5 0px 2px 10px 2px",
  position: "fixed",
  zIndex: "2",
  top: 0,
  width: "100%",
};

export default function Navbar(props) {
  const router = useRouter();
  const name = Cookies.get("name");
  const noTelp = Cookies.get("noTelp");
  const image = Cookies.get("image");
  const dataHistory = Cookies.get("history")
    ? JSON.parse(Cookies.get("history"))
    : [];
  const [data, setData] = useState({});

  const [datahistory, setDatahistory] = useState([]);

  useEffect(() => {
    setData({
      name: name,
      noTelp: noTelp,
      image: image,
    });
    setDatahistory(dataHistory);
  }, [name, image]);

  const handleProfile = () => {
    router.push("/profile");
  };

  return (
    <div
      className="d-flex justify-content-beetween bg-white pt-4 px-4"
      style={navbar}
    >
      <div className="container-fluid w-25 logoDashboard">
        <a className="navbar-brand m-3 mx-5 px-3" href="/dashboard">
          <Image src="/Zwallet-blue.png" width={"82px"} height={"20px"} />
        </a>
      </div>
      <div className="d-flex userDashboard">
        <div className="d-flex mx-3" style={{ widht: "120px" }}>
          <div className="m-1 mx-2 pointer" onClick={handleProfile}>
            {data.image === "null" ? (
              <Image
                src={"/profile default.png"}
                width={"50px"}
                height={"45px"}
                style={{ borderRadius: "15px" }}
              />
            ) : (
              <img
                src={process.env.URL_CLOUDINARY + data.image}
                width={"50px"}
                height={"45px"}
                style={{ borderRadius: "15px" }}
              />
            )}
          </div>
          <div className="m-1">
            <strong>{data.name ? data.name : ""}</strong>
            <p className="mt-1" style={{ fontSize: "10px" }}>
              {data.noTelp === "null" ? "phone number not add" : data.noTelp}
            </p>
          </div>
        </div>
      </div>
      <Dropdown>
        <Dropdown.Toggle variant="transparant" id="dropdown-basic">
          <Image src="/icon bell.png" width={"30px"} height={"30px"} />
        </Dropdown.Toggle>
        <Dropdown.Menu className="notification">
          {datahistory.map((item) => (
            <Dropdown.Item key={item.id}>
              <div className="m-2 mb-4 mx-3 content-card" key={item.id}>
                <div className="container row">
                  <div className="col-2 w-25">
                    {item.type === "send" ? (
                      <Image
                        src={"/arrow-up.png"}
                        width={"40px"}
                        height={"40px"}
                      />
                    ) : (
                      <Image
                        src={"/arrow-down.png"}
                        width={"40px"}
                        height={"40px"}
                      />
                    )}
                  </div>
                  <div className="col-6">
                    <div className="text-muted">
                      {item.type} to{" "}
                      {item.fullName.length >= 11
                        ? item.fullName.substring(0, 8) + "..."
                        : item.fullName}
                    </div>
                    <div>
                      <b> Rp. {item.amount} </b>
                    </div>
                  </div>
                </div>
              </div>
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
