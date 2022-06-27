import React, { useEffect, useState } from "react";
import Layout from "../../component/Layout/main";
import Image from "next/image";
import chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import axios from "../../utils/axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { BsArrowUpShort, BsPlus } from "react-icons/bs";

const board = {
  borderRadius: "20px",
  boxShadow: "#E5E5E5 0px 2px 10px 2px",
};

const button = {
  borderRadius: "10px",
  backgroundColor: "#6379F4",
  border: "white solid 1px",
  color: "white",
  padding: "5px 5px 5px 0",
  width: "140px",
  height: "50px",
  margin: "10px",
  cursor: "pointer,",
};

function Dashboard() {
  const router = useRouter();
  const [userdata, setUserdata] = useState({});
  const [dashboard, setDashboard] = useState({});
  const [listIn, setListIn] = useState([]);
  const [listEx, setListEx] = useState([]);
  const [history, setHistory] = useState([]);
  const [form, setForm] = useState({
    amount: "",
  });

  useEffect(() => {
    getUserdata();
  }, []);

  const getUserdata = async () => {
    try {
      const id = Cookies.get("id");
      const result = await axios.get(`/user/profile/${id}`);
      const dashboard = await axios.get(`/dashboard/${id}`);
      const history = await axios.get(
        `/transaction/history?page=1&limit=6&filter=`
      );
      Cookies.set(
        "name",
        result.data.data.firstName + " " + result.data.data.lastName
      );
      Cookies.set("noTelp", result.data.data.noTelp);
      Cookies.set("image", result.data.data.image);
      Cookies.set("history", JSON.stringify(history.data.data));
      Cookies.set("balance", result.data.data.balance);
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
      },
      {
        label: "# of Expense",
        fill: false,
        backgroundColor: "#FF5B37",
        borderColor: "#FF5B37",
        data: listEx,
      },
    ],
  };

  const handleTransfer = () => {
    router.push("/transfer");
  };

  return (
    <Layout title="Dashboard" menu="dashboard">
      <div className="d-flex row p-3 bg-primary text-white pb-4" style={board}>
        <div className="col-8 my-2">
          <div className="text-light">Balance</div>
          <div className="balanceDashboard">
            <strong> Rp {userdata.balance} </strong>
          </div>
          <div className="text-light mt-2">
            {userdata.noTelp === null
              ? "phone number not added"
              : userdata.noTelp}
          </div>
        </div>
        <div className="buttonDashboard col-4">
          <button onClick={handleTransfer} style={button}>
            <BsArrowUpShort size={25} /> &ensp; Transfer
          </button>
          <button
            style={button}
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            type="button"
          >
            <BsPlus size={25} />
            &ensp; Top Up
          </button>
        </div>
      </div>
      <div className="buttonDashboardResponsive">
        <button className="bg-primary" onClick={handleTransfer} style={button}>
          <BsArrowUpShort size={25} />
          &ensp; Transfer
        </button>
        <button
          style={button}
          className="bg-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          type="button"
        >
          <BsPlus size={25} /> &ensp; Top Up
        </button>
      </div>
      <div className="row d-flex justify-content-between my-4">
        <div
          className="graphDashboard p-4 bg-white text-dark buttonDashboard"
          style={board}
        >
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
            <Line data={data} />{" "}
          </div>
        </div>
        {/* <div className="col-1"></div> */}
        <div className="historyDashboard bg-white text-dark" style={board}>
          <div className="p-3 py-4">
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
                      <div
                        className="text-secondary"
                        style={{ fontSize: "8px" }}
                      >
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
                {/* <br /> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;
