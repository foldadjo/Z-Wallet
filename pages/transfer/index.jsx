import React, { useState, useEffect } from "react";
import Layout from "../../component/Layout/main";
import Image from "next/image";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { getAllUser } from "../../store/action/user";

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

const button = {
  borderRadius: "10px",
  backgroundColor: "light",
  border: "white solid 1px",
  padding: "5px 5px 5px 0",
  width: "100%",
  height: "100%",
  cursor: "pointer,",
};

const myLoader = ({ src, width, quality }) => {
  return `${process.env.URL_CLOUDINARY + src}`;
};

function Transfer() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [userdata, setUserdata] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("firstName ASC");
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(5);

  const handleFilter = (e) => {
    e.key === "Enter" ? setSearch(e.target.value) : null;
    e.key === "Enter" ? setPage(1) : null;
    getUserdata();
  };

  const handleChangeFilter = (e) => {
    setFilter(e.target.value);
    getUserdata();
  };

  // console.log(userdata.map((item) => item.id));

  useEffect(() => {
    getUserdata();
  }, [search, filter, page]);

  const getUserdata = async () => {
    try {
      const result = await dispatch(getAllUser(page, 5, search, filter));
      setUserdata(result.value.data.data);
      setTotalPage(result.value.data.pagination.totalPage);
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
      <div className="bg-white text-dark p-4 pb-1 mb-5" style={board}>
        <div style={{ fontSize: "15px" }}>
          <div>
            <b>Search Receiver</b>
          </div>
        </div>
        <br />
        <div className="d-flex justify-content-between">
          <div className="w-75">
            <input
              className="text-secondary bg-light"
              style={input}
              type="text"
              placeholder="Search receiver here"
              onKeyPress={(e) => handleFilter(e)}
            />
          </div>
          <div>
            <select
              name="sort"
              className="sometimes__button2"
              style={button}
              onClick={handleChangeFilter}
            >
              <option value="">--Select Filter--</option>
              <option value="firstName ASC">A to Z</option>
              <option value="firstName DESC">Z to A</option>
            </select>
          </div>
        </div>
        <br />
        <br />
        {userdata.map((item) => (
          <div
            className="TransferTransition"
            id="div4"
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
              <div
                className="d-flex"
                style={{ height: "50px", width: "420px" }}
              >
                <div>
                  <div style={{ height: "50px", width: "40px" }}>
                    {item.image === null || item.image === undefined ? (
                      <Image
                        src={"/profile default.png"}
                        width={"50px"}
                        height={"45px"}
                        style={{ borderRadius: "15px" }}
                      />
                    ) : (
                      <Image
                        loader={myLoader}
                        src={item.image}
                        width={"50px"}
                        height={"45px"}
                        style={{ borderRadius: "15px" }}
                      />
                    )}
                  </div>
                </div>
                <div
                  className="profileTransfer"
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
        <div className="row justify-content-center mt-4">
          <div className="col-2" style={{ textAlign: "center" }}>
            <div>
              <button
                className="btn btn-primary rounded-circle pt-2 ps-2 pe-2 pb-1 shadow translate-middle-y"
                style={page === 1 ? { display: "none" } : { display: "inline" }}
                type="button"
                onClick={() => setPage(page - 1)}
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
            </div>
          </div>
          <div
            className="col-3"
            style={{ textAlign: "center", alignItems: "center" }}
          >
            <button className="btn btn-primary rounded-1 pt-2 ps-2 pe-2 pb-1 shadow translate-middle-y">
              {page}
            </button>
          </div>
          <div className="col-2" style={{ textAlign: "center" }}>
            <div>
              <button
                className="btn btn-primary rounded-circle pt-2 ps-2 pe-2 pb-1 shadow translate-middle-y"
                type="button"
                style={
                  page === totalPage
                    ? { display: "none" }
                    : { display: "inline" }
                }
                onClick={() => setPage(page + 1)}
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Transfer;
