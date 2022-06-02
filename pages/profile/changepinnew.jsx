import React, { useState } from "react";
import Layout from "../../component/Layout/main";
import axios from "../../utils/axios";
import Cookies from "js-cookie";
import Router, { useRouter } from "next/router";

const board = {
  borderRadius: "20px",
  boxShadow: "#E5E5E5 0px 2px 10px 2px",
  padding: "5px",
};

function changePinNew() {
  const router = useRouter();
  const id = Cookies.get("id");
  const [form, setForm] = useState({
    pin: "",
  });

  const handleChangeText = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const result = await axios.patch(`/user/pin/${id}`, form);
      console.log(result);
      alert(result.data.msg);
      router.push("/profile");
    } catch (error) {
      alert(error.response.data.msg);
      console.log(error);
    }
  };

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
              <input
                className="pinEntry"
                type="text"
                maxLength="6"
                onChange={handleChangeText}
                name="pin"
              />
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <div className="w-50">
              <button className="authButton w-100" onClick={handleSubmit}>
                {" "}
                Continue{" "}
              </button>
            </div>
          </div>
          <br />
        </div>
      </div>
    </Layout>
  );
}

export default changePinNew;
