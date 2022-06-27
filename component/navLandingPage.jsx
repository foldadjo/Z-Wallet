import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";

const navbar = {
  border: "white solid",
  position: "fixed",
  zIndex: "2",
  top: 0,
  width: "100%",
  height: "80px",
};

export default function NavbarLandingPage(props) {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/login");
  };
  const handleRegister = () => {
    router.push("/register");
  };

  return (
    <>
      <div
        className="d-flex justify-content-beetween bg-white pt-4 px-4"
        style={navbar}
      >
        <div style={style.logo}>
          <Image src="/Zwallet-blue.png" width={"85px"} height={"20px"} />
        </div>
        <div style={style.buttonSide}>
          <button
            className="btn btn-outline-primary me-1"
            style={style.button}
            onClick={handleLogin}
          >
            Login
          </button>
          <button
            className="btn btn-outline-primary"
            style={style.button}
            onClick={handleRegister}
          >
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
}

const style = {
  button: {
    width: 90,
    height: 40,
  },
  buttonSide: {
    flex: 3,
    textAlign: "end",
  },
  logo: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 5,
  },
};
