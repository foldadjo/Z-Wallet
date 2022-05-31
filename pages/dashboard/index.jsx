import React, { useEffect, useState } from "react";
import Layout from "../../component/Layout/main";
import Image from "next/image";
import chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import axios from "../../utils/axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const board = {
  borderRadius: "20px",
  boxShadow: "#E5E5E5 0px 2px 10px 2px",
  padding: "5px",
};

const button = {
  borderRadius: "10px",
  backgroundColor: "#6379F4",
  border: "white solid 1px",
  color: "white",
  padding: "5px 5px 5px 0",
  width: "150px",
  height: "50px",
  margin: "10px",
  cursor: "pointer,",
};

function dashboard() {
  const router = useRouter();
  const [userdata, setUserdata] = useState({});
  const [dashboard, setDashboard] = useState({});
  const [listIn, setListIn] = useState([]);
  const [listEx, setListEx] = useState([]);
  const [history, setHistory] = useState([]);
  const [form, setForm] = useState({
    amount: "",
  });

  const handleChangeText = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    getUserdata();
  }, []);

  const getUserdata = async () => {
    try {
      const id = Cookies.get("id");
      const result = await axios.get(`/user/profile/${id}`);
      const dashboard = await axios.get(`/dashboard/${id}`);
      const history = await axios.get(
        `/transaction/history?page=1&limit=5&filter=MONTH`
      );
      setUserdata(result.data.data);
      setDashboard(dashboard.data.data);
      setHistory(history.data.data);
      console.log(result);
      console.log(dashboard);
      console.log(history);
      const listIncome = dashboard.data.data.listIncome.map(
        (item) => item.total
      );

      const listExpense = dashboard.data.data.listExpense.map(
        (item) => item.total
      );
      setListIn(listIncome);
      setListEx(listExpense);
    } catch (error) {
      console.log(error);
    }
  };

  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "# on Income",
        fill: false,
        backgroundColor: "#1EC15F",
        borderColor: "#1EC15F",
        data: listIn,
        // yAxisID: "y-axis-1",
      },
      {
        label: "# of Expense",
        fill: false,
        backgroundColor: "#FF5B37",
        borderColor: "#FF5B37",
        data: listEx,
        // yAxisID: "y-axis-2",
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      yAxis: [
        {
          type: "linear",
          display: true,
          position: "left",
          id: "y-axis-1",
          ticks: {
            beginAtZero: true,
          },
        },
        {
          type: "linear",
          display: true,
          position: "right",
          id: "y-axis-2",
          gridLines: {
            drawOnArea: false,
          },
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  const handleTransfer = () => {
    router.push("/transfer");
  };

  const handleTopup = async () => {
    try {
      const topUp = await axios.post("/transaction/top-up", form);
      console.log(topUp);
      window.open(topUp.data.data.redirectUrl);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout title="Dashboard" menu="dashboard">
      <div>
        <div className="bg-primary text-white row p-4 pb-1 mb-5" style={board}>
          <div className="col-8 my-2">
            <div className="text-light">Balance</div>
            <div style={{ fontSize: "40px" }}>
              <strong> Rp {userdata.balance} </strong>
            </div>
            <div className="text-light mt-2">
              {userdata.noTelp === null
                ? "phone number not added"
                : userdata.noTelp}
            </div>
          </div>
          <div className="col-3 mx-4">
            <button onClick={handleTransfer} style={button}>
              <Image
                src="/icon transfer.png"
                alt="icon"
                width={20}
                height={20}
              />
              &ensp; Transfer
            </button>
            <button
              style={button}
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              type="button"
            >
              <Image src="/icon topup.png" alt="icon" width={20} height={20} />
              &ensp; Top Up
            </button>
            <div
              className="modal fade"
              id="exampleModal"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Topup
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
                  <div className="modal-body">
                    Enter the amount of monry, and click <br /> submit
                  </div>
                  <br />
                  <div className="form-group d-flex justify-content-center">
                    Rp.
                    <input
                      type="number"
                      className="form-control w-75"
                      id="recipient-name"
                      name="amount"
                      onChange={handleChangeText}
                    />
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-primary"
                      // data-bs-dismiss="modal"
                      onClick={handleTopup}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-between my-4">
          <div className="col-6 p-4 bg-white text-dark" style={board}>
            <div className="row">
              <div className="col-6">
                <Image src={"/arrow-down.png"} width={"30px"} height={"30px"} />
                <div className="text-secondary">Income</div>
                <div>
                  <b> {dashboard.totalIncome} </b>
                </div>
              </div>
              <div className="col-1"></div>
              <div className="col-5">
                <Image src={"/arrow-up.png"} width={"30px"} height={"30px"} />
                <div className="text-secondary">Expense</div>
                <div>
                  <b> {dashboard.totalExpense} </b>
                </div>
              </div>
            </div>
            <div className="m-2">
              <Line data={data} options={options} />{" "}
            </div>
          </div>
          {/* <div className="col-1"></div> */}
          <div className="col-5 bg-white text-dark p-4" style={board}>
            <div
              className="d-flex justify-content-between"
              style={{ fontSize: "12px" }}
            >
              <div>
                <b>Transaction History</b>
              </div>
              <div>
                <a href="/dashboard/history">See all</a>
              </div>
            </div>
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
                            src={`/${item.image}`}
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
                        <b>Default People</b>
                      </div>
                      <div
                        className="text-secondary"
                        style={{ fontSize: "8px" }}
                      >
                        {item.type}
                      </div>
                    </div>
                    <br />
                  </div>
                  {item.type === "topup" ? (
                    <div className="text-success" style={{ fontSize: "10px" }}>
                      <b>{"+ Rp. " + item.amount}</b>
                    </div>
                  ) : (
                    <div className="text-danger" style={{ fontSize: "10px" }}>
                      <b>{"- Rp. " + item.amount}</b>
                    </div>
                  )}
                </div>
                {/* <br /> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default dashboard;
