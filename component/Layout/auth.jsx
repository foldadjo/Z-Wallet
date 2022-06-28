import React, { useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import jwt_decode from "jwt-decode";
import Head from "next/head";
import Image from "next/image";
import NextNProgress from "nextjs-progressbar";

export default function MainLayoutAuth(props) {
  const router = useRouter();

  useEffect(() => {
    cekToken();
  }, []);
  const cekToken = () => {
    const token = Cookies.get("token");
    if (token) {
      const decoded = jwt_decode(token);
      if (decoded.exp < Date.now() / 1000) {
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
        alert("relogin please");
      } else {
        router.push("/dashboard");
      }
    } else {
      alert("login first");
    }
  };

  return (
    <>
      <NextNProgress
        color="#29D"
        startPosition={0.7}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
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
    </>
  );
}
