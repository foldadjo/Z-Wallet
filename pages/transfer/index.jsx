import React, { useState, useEffect } from "react";
import Layout from "../../component/Layout/main";
import Image from "next/image";
import axios from "../../utils/axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const board = {
  borderRadius: "20px",
  boxShadow: "#E5E5E5 0px 2px 10px 2px",
  padding: "5px",
};

const input = {
  borderRadius: "5px",
  padding: "10px 20px",
  border: "0",
  width: "100%",
  height: "40px",
  fontSize: "10px",
};

function transfer() {
  const router = useRouter();
  const [userdata, setUserdata] = useState([]);
  const [search, setSearch] = useState("");

  const handleFilter = (e) => {
    e.key === "Enter" ? setSearch(e.target.value) : null;
    getUserdata();
  };

  // console.log(userdata.map((item) => item.id));

  useEffect(() => {
    getUserdata();
  }, [search]);

  const getUserdata = async () => {
    try {
      const result = await axios.get(
        `/user?page=1&limit=10&search=${search}&sort=firstName ASC`
      );
      setUserdata(result.data.data);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const handleTransfer = (id, firstName, lastName, image, noTelp) => {
    Cookies.set(`transferName`, firstName + " " + lastName);
    Cookies.set("transferImage", image);
    Cookies.set("transferNoTelp", noTelp);
    router.push(`/transfer/${id}`);
  };

  return (
    <Layout title="Transfer" menu="transfer">
      <div>
        <div className="bg-white text-dark p-4 pb-1 mb-5" style={board}>
          <div style={{ fontSize: "15px" }}>
            <div>
              <b>Search Receiver</b>
            </div>
          </div>
          <br />
          <input
            className="text-secondary bg-light"
            style={input}
            type="text"
            placeholder="Search receiver here"
            onKeyPress={(e) => handleFilter(e)}
          />
          <br />
          <br />
          {userdata.map((item) => (
            <div
              key={item.id}
              onClick={() =>
                handleTransfer(
                  item.id,
                  item.firstName,
                  item.lastName,
                  item.image,
                  item.noTelp
                )
              }
            >
              <div className="d-flex justify-content-between px-4 pt-3 content-card">
                <div className="row" style={{ height: "50px", width: "420px" }}>
                  <div className="col-1">
                    <div style={{ height: "50px", width: "40px" }}>
                      {item.image === null ? (
                        <Image
                          src={"/profile default.png"}
                          width={"50px"}
                          height={"45px"}
                          style={{ borderRadius: "15px" }}
                        />
                      ) : (
                        <img
                          src={process.env.URL_CLOUDINARY + item.image}
                          width={"50px"}
                          height={"45px"}
                          style={{ borderRadius: "15px" }}
                        />
                      )}
                    </div>
                  </div>
                  <div
                    className="col-8"
                    style={{
                      height: "50px",
                      width: "220px",
                      padding: "0 0 0 45px",
                    }}
                  >
                    <div style={{ fontSize: "12px" }}>
                      <b>{item.firstName + " " + item.lastName}</b>
                    </div>
                    <div
                      className="text-secondary my-2"
                      style={{ fontSize: "8px" }}
                    >
                      {item.noTelp === null
                        ? "phone number not add"
                        : "+" + item.noTelp}
                    </div>
                  </div>
                </div>
              </div>
              <br />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default transfer;
