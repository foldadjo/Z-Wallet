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
  const name = Cookies.get("name");
  const noTelp = Cookies.get("noTelp");
  const image = Cookies.get("image");
  const id = Cookies.get("id");

  const [imageForm, setImageForm] = useState({ image: null });
  const [uiImage, setUiImage] = useState(null);

  // const [Imagedata, setImagedata] = useState(null);
  const [data, setData] = useState({});
  const [form, setForm] = useState({
    image: "",
    firstName: "",
    lastName: "",
  });

  const handleChangeText = (event) => {
    const { name, value, files } = event.target;
    if (name === "image") {
      setImageForm({ [name]: files[0] });
      setUiImage(URL.createObjectURL(files[0]));
      console.log(image);
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleChangename = async () => {
    const changeName = { firstName: form.firstName, lastName: form.lastName };
    try {
      const resultName = await axios.patch(`/user/profile/${id}`, changeName);
      console.log(resultName);
      Cookies.set(
        "name",
        resultName.data.data.firstName + " " + resultName.data.data.lastName
      );
      setData({
        ...data,
        name:
          resultName.data.data.firstName + " " + resultName.data.data.lastName,
      });
      alert(resultName.data.msg);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setData({
      name: name,
      noTelp: noTelp,
      image: image,
    });
  }, [name, image]);

  const handleDeleteImage = async () => {
    try {
      const resultDelete = await axios.delete(`/user/image/${id}`);
      console.log(resultDelete);
      Cookies.set("image", "null");
      setData({
        ...data,
        image: "null",
      });
      alert(resultDelete.data.msg);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateImage = async (e) => {
    // const file = form.image;
    try {
      e.preventDefault();
      const formSend = {
        image: imageForm.image,
      };
      const formData = new FormData();
      for (const data in formSend) {
        formData.append(data, formSend[data]);
      }
      for (const data of formData.entries()) {
        console.log(data[0] + ", " + data[1]);
      }
      const resultUpdate = await axios.patch(`/user/image/${id}`, formData);
      alert("Success Change Image");
      console.log(resultUpdate);
      if (resultUpdate) {
        const getData = await axios.get(`/user/profile/${id}`);
        Cookies.set("image", getData.data.data.image);
        console.log(getData);
        setData({
          ...data,
          image: getData.data.data.image,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const gotoProfile = () => {
    router.push(`/profile/${id}`);
  };

  const gotoChangepass = () => {
    router.push(`/profile/changepass`);
  };

  const gotoChangepin = () => {
    router.push(`/profile/changepin`);
  };

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
    router.push("/login");
  };

  return (
    <Layout title="Profile" menu="profile">
      <div>
        <div className="bg-white text-dark p-4 pb-1 mb-5" style={board}>
          <div className="d-flex justify-content-center">
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
          <div className="d-flex justify-content-center py-2">
            <div className="custom-file">
              <button
                data-bs-toggle="modal"
                data-bs-target="#exampleModal3"
                type="button"
                className="bg-white border border-white"
                // style={{ display: "none" }}
              >
                <label className="custom-file-label" htmlFor="inputGroupFile02">
                  <Image src="/icon pen.png" width={"10px"} height={"12px"} />
                  &ensp; edit
                </label>
              </button>
              <div
                className="modal fade"
                id="exampleModal3"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        Edit your profile
                      </h5>
                      <button
                        type="button"
                        className="close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">Edit your profile hire..</div>
                    <br />
                    <div className="form-group">
                      <div className="form-group d-flex justify-content-center">
                        <input
                          type="text"
                          className="form-control w-25"
                          placeholder="First Name"
                          name="firstName"
                          onChange={handleChangeText}
                        />
                        <br />
                        <input
                          type="text"
                          className="form-control w-25"
                          placeholder="Last Name"
                          name="lastName"
                          onChange={handleChangeText}
                        />
                      </div>
                      <div className="form-group d-flex justify-content-center">
                        <input
                          className="form-control form-control-sm w-50 mt-3"
                          id="formFileSm"
                          type="file"
                          name="image"
                          onChange={(event) => handleChangeText(event)}
                        />
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-danger"
                        data-bs-dismiss="modal"
                        onClick={() => handleDeleteImage()}
                      >
                        delete image
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary"
                        // data-bs-dismiss="modal"
                        onClick={handleChangename}
                      >
                        Update Name
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary"
                        // data-bs-dismiss="modal"
                        onClick={handleUpdateImage}
                      >
                        Update image
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="d-flex justify-content-center mt-3"
            style={{ fontSize: "15px" }}
          >
            <b>{data.name ? data.name : ""}</b>
          </div>
          <div
            className="d-flex text-center justify-content-center mt-2 mb-4"
            style={{ fontSize: "15px" }}
          >
            {data.noTelp === "null"
              ? "phone number not add"
              : "+" + data.noTelp}
          </div>
          <div
            onClick={() => gotoProfile()}
            className="d-flex justify-content-center"
          >
            <div className="w-50 d-flex content-card justify-content-between px-4 pt-1 mt-4">
              <div className="text-dark my-2" style={{ fontSize: "12px" }}>
                <b> Personal Information </b>
              </div>
              <div className="mt-1">
                <Image src="/arrow-left.png" width={"30px"} height={"25px"} />
              </div>
            </div>
          </div>
          <div
            onClick={() => gotoChangepass()}
            className="d-flex justify-content-center"
          >
            <div className="d-flex w-50 content-card justify-content-between px-4 pt-1 mt-4">
              <div className="text-dark my-2" style={{ fontSize: "12px" }}>
                <b> Change Password </b>
              </div>
              <div className="mt-1">
                <Image src="/arrow-left.png" width={"30px"} height={"25px"} />
              </div>
            </div>
          </div>
          <div
            onClick={() => gotoChangepin()}
            className="d-flex justify-content-center"
          >
            <div className="d-flex w-50 content-card justify-content-between px-4 pt-1 mt-4">
              <div className="text-dark my-2" style={{ fontSize: "12px" }}>
                <b> Change PIN </b>
              </div>
              <div className="mt-1">
                <Image src="/arrow-left.png" width={"30px"} height={"25px"} />
              </div>
            </div>
          </div>
          <div
            onClick={() => handleLogout()}
            className="d-flex justify-content-center"
          >
            <div className="d-flex w-50 content-card justify-content-between px-4 pt-1 mt-4">
              <div className="text-dark my-2" style={{ fontSize: "12px" }}>
                <b> Logout </b>
              </div>
            </div>
          </div>
          <br />
          <br />
        </div>
      </div>
    </Layout>
  );
}

export default profile;
