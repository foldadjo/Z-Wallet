import React, { useEffect, useState } from "react";
import Layout from "../../component/Layout/main";
import Image from "next/image";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import axios from "../../utils/axios";

const board = {
  borderRadius: "20px",
  boxShadow: "#E5E5E5 0px 2px 10px 2px",
  padding: "5px",
};

function profile() {
  const router = useRouter();
  const id = Cookies.get("id");
  const [form, setForm] = useState({
    noTelp: "",
  });

  const handleChangeText = (event) => {
    const { name, value, files } = event.target;
    if (name === "image") {
      setForm({ ...form, [name]: files[0] });
      setData({ ...data, image: URL.createObjectURL(files[0]) });
      console.log(image);
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleChangephone = async () => {
    const changePhone = { noTelp: form.noTelp };
    try {
      const resultPhone = await axios.patch(`/user/profile/${id}`, changePhone);
      console.log(resultPhone);
      Cookies.set("noTelp", resultPhone.data.data.noTelp);
      router.push("/profile");
      alert("Success Change number phone");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout title="Manage Phone" menu="profile">
      <div>
        <div className="bg-white text-dark p-4 pb-1 mb-5" style={board}>
          <div style={{ fontSize: "15px" }}>
            <div>
              <b>Edit Phone Number</b>
            </div>
          </div>
          <br />
          <div className="text-secondary" style={{ fontSize: "10px" }}>
            Add at least one phone number for the transfer <br /> ID so you can
            start transfering your money to <br /> another user.
          </div>
          <br />
          <br />
          <div className="d-flex justify-content-center row my-3">
            <div className="col-1">
              <Image src={"/icon phone.png"} width={"30px"} height={"30px"} />
            </div>
            <input
              className="col-5 bg-white text-secondary border border-white"
              type="number"
              placeholder="Enter your phone number"
              aria-label="Phone Number"
              aria-describedby="basic-addon1"
              name="noTelp"
              onChange={handleChangeText}
            />
            <div className="input-group-addon">
              <i className="fa fa-eye-slash" aria-hidden="true"></i>
            </div>
            <hr className="col-6" />
          </div>
          <br />
          <div className="d-flex justify-content-center row my-3 ">
            <button className="authButton w-50" onClick={handleChangephone}>
              {" "}
              Edit Phone Number{" "}
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default profile;
