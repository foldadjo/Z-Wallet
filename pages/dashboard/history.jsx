import React, { useState, useEffect } from "react";
import Layout from "../../component/Layout/main";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { historyTransaction } from "../../store/action/dashboard";

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

function History() {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("");
  const [history, setHistory] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(5);

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
      const History = await dispatch(historyTransaction(page, 5, filter));
      setHistory(History.value.data.data);
      setTotalPage(History.value.data.pagination.totalPage);
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
                    <b>{"- Rp. " + item.amount}</b>
                  </div>
                ) : (
                  <div className="text-success" style={{ fontSize: "10px" }}>
                    <b>{"+ Rp. " + item.amount}</b>
                  </div>
                )}
              </div>
              <br />
            </div>
          ))}
          <div className="row justify-content-center mt-4">
            <div className="col-2" style={{ textAlign: "center" }}>
              <div>
                <button
                  className="btn btn-primary rounded-circle pt-2 ps-2 pe-2 pb-1 shadow translate-middle-y"
                  style={
                    page === 1 ? { display: "none" } : { display: "inline" }
                  }
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
      </div>
    </Layout>
  );
}

export default History;
