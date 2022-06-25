import React from "react";
import Head from "next/head";
import Image from "next/image";

export default function MainLayout(props) {
  return (
    <div className="bg-light">
      <Head>
        <title>{props.title}</title>
      </Head>
      <div className="authResponsive">
        <div
          className="col-6 d-flex justify-content-center"
          // style={{ backgroundAttachment: "fixed" }}
        >
          <div className="authLayer ">
            <Image src={"/banner.png"} width={"12000px"} height={"18000px"} />
          </div>
        </div>
        <div className="authForm my-5 p-3 d-flex justify-content-center">
          <div>
            <div className="authTitle">
              <Image
                src={"/Zwallet-blue.png"}
                width={"120px"}
                height={"30px"}
              />
            </div>
            <main>{props.children}</main>
          </div>
        </div>
      </div>
    </div>
  );
}
