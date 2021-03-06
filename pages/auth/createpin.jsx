import React, { useState } from "react";
import Layout from "../../component/Layout/auth";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { updatePin } from "../../store/action/user";

export default function CreatePin() {
  const router = useRouter();
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    pin: "",
  });

  const handleChangeText = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const id = Cookies.get("id");
      const result = await dispatch(updatePin(id, form));
      router.push("/auth/createpinsuccess");
    } catch (error) {
      // alert(error.response.data.msg);
      console.log(error);
    }
  };
  return (
    <Layout title="Create Pin Page">
      <div className="container">
        <h5 className="pb-3" style={{ lineHeight: "160%", marginRight: "12%" }}>
          <strong>
            Secure Your Account, Your Wallet, <br />
            and Your Data With 6 Digits PIN <br />
            That You Created Yourself.
          </strong>
        </h5>
        <div
          className="text-muted"
          style={{ fontSize: "12px", lineHeight: "160%", marginRight: "12%" }}
        >
          Create 6 digits pin to secure all your money and your data in Zwallet
          app. Keep it secret and don’t tell anyone about your Zwallet account
          password and the PIN.
        </div>
        <div className="mt-5 mb-3 row justify-content-md-center">
          <div className="d-flex justify-content-center my-3">
            <div className="pinBox">
              <input
                name="pin"
                className="pinEntry"
                type="text"
                maxLength="6"
                onChange={handleChangeText}
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
