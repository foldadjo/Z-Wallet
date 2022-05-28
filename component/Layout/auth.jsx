import React from "react";
import Head from "next/head";
import Image from "next/image";

export default function MainLayout(props) {
  return (
    <div className="bg-light">
      <Head>
        <title>{props.title}</title>
      </Head>
      <div className="row">
        <div className="col-7">
          <div
            style={{
              //   left: "-200px",
              width: "100%",
              height: "100%",
              position: "relative",
              zIndex: "1",
              top: "0px",
            }}
          >
            <Image src={"/Background.png"} width={"1200px"} height={"1500px"} />
          </div>
          <div
            className="text-center"
            style={{
              position: "absolute",
              top: "30px",
              left: "110px",
              zIndex: "2",
              width: "10%",
            }}
          >
            <img src={"/Zwallet.png"} width={"90px"} height={"20px"} />
          </div>
          <div
            className="text-center"
            style={{
              position: "absolute",
              top: "10%",
              left: "3%",
              zIndex: "2",
            }}
          >
            <img
              src={"/imageLogin.png"}
              width={"1000px"}
              height={"1200px"}
              style={{ width: "80%", height: "80%" }}
            />
          </div>
          <div
            className="text-white"
            style={{
              position: "absolute",
              top: "85%",
              left: "10%",
              zIndex: "2",
            }}
          >
            App that Covering Banking Needs.
          </div>
          <div
            className="text-light text-sm-left font-weight-light"
            style={{
              position: "absolute",
              top: "90%",
              left: "10%",
              zIndex: "2",
              fontSize: "12px",
            }}
          >
            Zwallet is an application that focussing in banking needs for all
            users <br /> in the world. Always updated and always following world
            trends.
            <br /> 5000+ users registered in Zwallet everyday with worldwide{" "}
            <br />
            users coverage.
          </div>
        </div>
        <div className="col-5 my-5">
          <main>{props.children}</main>
        </div>
      </div>
    </div>
  );
}
