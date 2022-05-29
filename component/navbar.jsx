import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import Script from "next/script";

const navbar = {
  borderRadius: "0 0 25px 25px",
  border: "white solid",
  boxShadow: "#E5E5E5 0px 2px 10px 2px",
};

export default function index() {
  const router = useRouter();
  const pathname = router.pathname;
  const handleLogout = () => {
    router.push("/auth/login");
  };
  return (
    <div>
      <nav className="navbar navbar-light bg-white" style={navbar}>
        <div className="container-fluid">
          <a className="navbar-brand m-3 mx-5 px-3">
            <Image src="/Zwallet-blue.png" width={"82px"} height={"20px"} />
          </a>
          <form className="d-flex mx-3">
            <div className="m-1 mx-2">
              <Image
                src={"/profile default.png"}
                width={"50px"}
                height={"45px"}
                style={{ borderRadius: "15px" }}
              />
            </div>
            <div className="m-1">
              <strong>Robert Chandler</strong>
              <p className="mt-1" style={{ fontSize: "10px" }}>
                +62 8139 3877 7946
              </p>
            </div>
            <div className="m-1 my-3 dropdown">
              <div
                className="dropbtn"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <Image src="/icon bell.png" width={"30px"} height={"30px"} />{" "}
              </div>
              <div className="p-2 m-3 dropdown-content">
                <div className="m-2 mb-4 content-card">
                  <div className="container row">
                    <div className="col-2 w-25">
                      <Image
                        src={"/arrow-down.png"}
                        width={"40px"}
                        height={"40px"}
                      />
                    </div>
                    <div className="col-6">
                      <div className="text-muted">Accept from Joshua Lee</div>
                      <div>
                        <b> Rp220.000 </b>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="m-2 mb-4 content-card">
                  <div className="container row">
                    <div className="col-2 w-25">
                      <Image
                        src={"/arrow-down.png"}
                        width={"40px"}
                        height={"40px"}
                      />
                    </div>
                    <div className="col-6">
                      <div className="text-muted">Accept from Joshua Lee</div>
                      <div>
                        <b> Rp220.000 </b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </nav>
    </div>
  );
}
