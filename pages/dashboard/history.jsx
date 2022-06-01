import React, { useState, useEffect } from "react";
import Layout from "../../component/Layout/main";
import Image from "next/image";
import axios from "../../utils/axios";

const board = {
  borderRadius: "20px",
  boxShadow: "#E5E5E5 0px 2px 10px 2px",
  padding: "5px",
};

const button = {
  borderRadius: "10px",
  backgroundColor: "light",
  border: "white solid 1px",
  padding: "5px 5px 5px 0",
  width: "120px",
  height: "30px",
  cursor: "pointer,",
};

function history() {
  const [filter, setFilter] = useState("");
  const [history, setHistory] = useState([]);
  const [page, setPage] = useState(1);
  // console.log(history.map((item) => item.id));

  const handleChangeFilter = (e) => {
    setFilter(e.target.value);
    getUserdata();
  };

  useEffect(() => {
    getUserdata();
  }, [page, filter]);

  const getUserdata = async () => {
    try {
      const History = await axios.get(
        `/transaction/history?page=${page}&limit=10&filter=${filter}`
      );
      setHistory(History.data.data);
      console.log(History);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout title="History" menu="dashboard">
      <div>
        <div className="bg-white text-dark p-4 pb-1 mb-5" style={board}>
          <div
            className="d-flex justify-content-between"
            style={{ fontSize: "12px" }}
          >
            <div>
              <b>Transaction History</b>
            </div>
            <div>
              <select
                name="location"
                className="sometimes__button2"
                style={button}
                onClick={handleChangeFilter}
              >
                <option value="">--Select Filter--</option>
                <option value="WEEK">WEEK</option>
                <option value="MONTH">MONTH</option>
                <option value="YEAR">YEAR</option>
              </select>
            </div>
          </div>
          <br />
          <br />
          {history.map((item) => (
            <div key={item.id}>
              <div className="d-flex justify-content-between">
                <div className="row d-flex justify-content-start">
                  <div className="col-4">
                    <div style={{ height: "50px", width: "40px" }}>
                      {item.image === null ? (
                        <Image
                          src={"/profile default.png"}
                          width={"50px"}
                          height={"45px"}
                          style={{ borderRadius: "15px" }}
                        />
                      ) : (
                        <Image
                          src={`${process.env.URL_CLOUDINARY}/${item.image}`}
                          width={"50px"}
                          height={"45px"}
                          style={{ borderRadius: "15px" }}
                        />
                      )}
                    </div>
                  </div>
                  <div
                    className="col-8"
                    style={{ height: "50px", width: "120px" }}
                  >
                    <div style={{ fontSize: "12px" }}>
                      <b>{item.fullName}</b>
                    </div>
                    <div className="text-secondary" style={{ fontSize: "8px" }}>
                      {item.type}
                    </div>
                  </div>
                  <br />
                </div>
                {item.type === "send" ? (
                  <div className="text-danger" style={{ fontSize: "10px" }}>
                    <b>{"+ Rp. " + item.amount}</b>
                  </div>
                ) : (
                  <div className="text-success" style={{ fontSize: "10px" }}>
                    <b>{"- Rp. " + item.amount}</b>
                  </div>
                )}
              </div>
              <br />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default history;
