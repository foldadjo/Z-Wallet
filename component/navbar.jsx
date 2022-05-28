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

const notivication = {
  borderRadius: "25px",
  border: "white solid",
  boxShadow: "#E5E5E5 0px 2px 10px 2px",
  padding: "5px",
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
            <div className="m-1 dropdown">
              <a
                class="btn dropdown-toggle"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <Image src="/icon bell.png" width={"30px"} height={"30px"} />{" "}
              </a>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <li className="dropdown-item" style={notivication}>
                    <div className="container row">
                      <div className="col-2">
                        <Image
                          src={"/arrow-down.png"}
                          width={"30px"}
                          height={"30px"}
                        />
                      </div>
                      <div className="col-6">
                        <div className="text-muted">Accept from Joshua Lee</div>
                        <div> Rp220.000</div>
                      </div>
                    </div>
                  </li>
                  <hr className="my-1" />
                </ul>
              </div>
            </div>
          </form>
        </div>
      </nav>
      {/* <Script src="/bootstrap.bundle.js" /> */}
      {/* <Link href={"/home"}> Home </Link> |{" "}
      <button onClick={handleLogout}> Logout </button> */}
    </div>
  );
}
