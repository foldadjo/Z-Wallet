import React, { useState } from "react";
import Layout from "../../component/Layout/auth";
import axios from "../../utils/axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

export default function CreatePin() {
  const router = useRouter();
  const [form, setForm] = useState({
    pin: "",
  });

  const handleChangeText = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const id = Cookies.get("id");
      const result = await axios.patch(`/user/pin/${id}`, form);
      console.log(result);
      Cookies.set("pin", result.data.data.pin);
      router.post("/dashboard");
    } catch (error) {
      alert(error.response.data.msg);
      console.log(error);
    }
  };
  return (
    <Layout title="Create Pin Page">
      <div className="container">
        <h5 className="pb-3" style={{ lineHeight: "160%" }}>
          <strong>
            Secure Your Account, Your Wallet, <br />
            and Your Data With 6 Digits PIN <br />
            That You Created Yourself.
          </strong>
        </h5>
        <div
          className="text-muted"
          style={{ fontSize: "12px", lineHeight: "160%" }}
        >
          Create 6 digits pin to secure all your money and your data <br /> in
          Zwallet app. Keep it secret and don’t tell anyone about your <br />{" "}
          Zwallet account password and the PIN.
        </div>
        <div className="mt-5 mb-3 row justify-content-md-center">
          <div className="d-flex justify-content-center my-3">
            <div className="pinBox">
              <input
                onClick={handleChangeText}
                name="pin"
                className="pinEntry"
                type="number"
                maxlength="6"
              />
            </div>
          </div>
        </div>
        <button className="authButton" onClick={handleSubmit}>
          {" "}
          Confirm{" "}
        </button>
      </div>
    </Layout>
  );
}
