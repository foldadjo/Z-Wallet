import React from "react";
import Navbar from "../navbar";
import Head from "next/head";
import Footer from "../footer";
import Tooltip from "../tooltip";

export default function MainLayout(props) {
  return (
    <div className="bg-light">
      <Head>
        <title>{props.title}</title>
      </Head>
      <Navbar />
      <div className="row justify-content-md-center my-4 mx-4">
        <div className="col-3 mx-2">
          <Tooltip tooltip={props.menu} />
        </div>
        <div className="col-8 mx-2">
          <main>{props.children}</main>
        </div>
      </div>
      <Footer />
    </div>
  );
}
