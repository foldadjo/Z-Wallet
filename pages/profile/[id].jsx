import React, { useEffect, useState } from "react";
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

function Profile() {
  const router = useRouter();
  const id = router.query.id;
  const [userdata, setUserdata] = useState({});

  useEffect(() => {
    getUserdata();
  }, []);

  const getUserdata = async () => {
    try {
      const id = Cookies.get("id");
      const result = await axios.get(`/user/profile/${id}`);
      setUserdata(result.data.data);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout title="Profile" menu="profile">
      <div>
        <div className="bg-white text-dark p-4 pb-1 mb-5" style={board}>
          <div style={{ fontSize: "15px" }}>
            <div>
              <b>Personal Information</b>
            </div>
          </div>
          <br />
          <div className="text-secondary" style={{ fontSize: "10px" }}>
            We got your personal information from the sign <br /> up proccess.
            If you want to make changes on <br /> your information, contact our
            support.
          </div>
          <br />
          <div className="d-flex content-card justify-content-between px-4 pt-3">
            <div className="row" style={{ height: "60px", width: "420px" }}>
              <div
                style={{
                  height: "50px",
                  width: "220px",
                  padding: "0 0 0 10px",
                }}
              >
                <div className="text-secondary" style={{ fontSize: "12px" }}>
                  First Name
                </div>
                <div className="my-2" style={{ fontSize: "18px" }}>
                  <b>{userdata.firstName}</b>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="d-flex content-card justify-content-between px-4 pt-3">
            <div className="row" style={{ height: "60px", width: "420px" }}>
              <div
                style={{
                  height: "50px",
                  width: "220px",
                  padding: "0 0 0 10px",
                }}
              >
                <div className="text-secondary" style={{ fontSize: "12px" }}>
                  Last Name
                </div>
                <div className="my-2" style={{ fontSize: "18px" }}>
                  <b>{userdata.lastName}</b>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="d-flex content-card justify-content-between px-4 pt-3">
            <div className="row" style={{ height: "60px", width: "420px" }}>
              <div
                style={{
                  height: "50px",
                  width: "220px",
                  padding: "0 0 0 10px",
                }}
              >
                <div className="text-secondary" style={{ fontSize: "12px" }}>
                  Verified E-mail
                </div>
                <div className="my-2" style={{ fontSize: "18px" }}>
                  <b>{userdata.email}</b>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="d-flex content-card justify-content-between px-4 pt-3">
            <div
              className="row w-100"
              style={{ height: "60px", width: "420px" }}
            >
              <div
                style={{
                  height: "50px",
                  width: "220px",
                  padding: "0 0 0 10px",
                }}
              >
                <div className="text-secondary" style={{ fontSize: "12px" }}>
                  Phone Number
                </div>
                <div className="my-2" style={{ fontSize: "15px" }}>
                  <b>
                    {" "}
                    {userdata.noTelp === null
                      ? "phone number not added"
                      : "+" + userdata.noTelp}
                  </b>
                </div>
              </div>
            </div>
            <div className="w-25 d-flex justify-content-end">
              <br />
              <a href="/profile/managephone">manage</a>
            </div>
          </div>
          <br />
        </div>
      </div>
    </Layout>
  );
}

export default Profile;
