import React from "react";
import Head from "next/head";
import Navbar from "../component/navLandingPage";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  BsFillTelephoneFill,
  BsFillLockFill,
  BsDownload,
} from "react-icons/bs";

function LandingPage() {
  const router = useRouter();
  const handleLogin = () => {
    router.push("/login");
  };
  return (
    <>
      <Head>
        <title>Zwallet</title>
      </Head>
      <Navbar />
      <div className="bg-light">
        <header className="leandingHeaderCon">
          <article className="leandingHeader">
            <object className="leadingImage">
              <Image
                src="/png-phone.png"
                alt="ilustrasi pekerja"
                width={450}
                height={450}
                objectFit="contain"
              ></Image>
            </object>
            <object>
              <h1 className="textH1Leading">
                Awesome App For Saving{" "}
                <span className="text-primary">Time</span>
              </h1>
              <p>
                We bring you a mobile app for banking problems that oftenly
                wasting much of your times
              </p>
              <div className="buttonLeanding1">
                <button className="btn btn-primary" onClick={handleLogin}>
                  Try It Free
                </button>
              </div>
              <div>
                <p>Awailable on</p>
                <p>
                  <Image
                    src="/appstore.svg"
                    alt="ilustrasi pekerja"
                    width={50}
                    height={50}
                    objectFit="contain"
                  ></Image>
                  <Image
                    src="/gplay.svg"
                    alt="ilustrasi pekerja"
                    width={45}
                    height={45}
                    objectFit="contain"
                  ></Image>
                </p>
              </div>
            </object>
          </article>
        </header>
      </div>
      <section className="partnerLeading">
        <article
          style={{
            // display: "flex",
            widht: 1200,
          }}
        >
          <div className="flexPartner">
            <div className="iconPartnerLeading">
              <Image
                src="/Group 16.svg"
                alt="ilustrasi pekerja"
                width={450}
                height={90}
                objectFit="contain"
              ></Image>
            </div>
            <div className="iconPartnerLeading mt-1">
              <Image
                src="/Group 18.svg"
                alt="ilustrasi pekerja"
                width={450}
                height={60}
                objectFit="contain"
              ></Image>
            </div>
            <div className="iconPartnerLeading">
              <Image
                src="/Group 17.svg"
                alt="ilustrasi pekerja"
                width={450}
                height={90}
                objectFit="contain"
              ></Image>
            </div>
          </div>
          <div className="flexPartner mb-4">
            <div className="iconPartnerLeading">
              <Image
                src="/Group 19.svg"
                alt="ilustrasi pekerja"
                width={450}
                height={50}
                objectFit="contain"
              ></Image>
            </div>
            <div className="iconPartnerLeading">
              <Image
                src="/Group 20.svg"
                alt="ilustrasi pekerja"
                width={450}
                height={50}
                objectFit="contain"
              ></Image>
            </div>
          </div>
        </article>
      </section>
      <section className="aboutAps bg-light">
        <h1>
          <span className="text-primary">About</span> the Application
        </h1>
        <div className="d-flex justify-content-center">
          <p className="pLeanding">
            We have some great features from the application and it’s totally
            free to use by all users around the world.
          </p>
        </div>
        <div className="cardLeading">
          <object className="cardAbout">
            <div className="d-flex justify-content-center">
              <div className="iconAbout">
                <BsFillTelephoneFill size={25} color={"#6379F4"} />
              </div>
            </div>
            <h5>24/7 Support</h5>
            <p>
              We have 24/7 contact support so you can contact us whenever you
              want and we will respond it.
            </p>
          </object>
          <object className="cardAbout bg-white">
            <div className="d-flex justify-content-center">
              <div className="iconAbout">
                <BsFillLockFill size={25} color={"#6379F4"} />
              </div>
            </div>
            <h5>Data Privacy</h5>
            <p>
              We make sure your data is safe in our database and we will encrypt
              any data you submitted to us.
            </p>
          </object>
          <object className="cardAbout">
            <div className="d-flex justify-content-center">
              <div className="iconAbout">
                <BsDownload size={25} color={"#6379F4"} />
              </div>
            </div>
            <h5>Easy Download</h5>
            <p>
              Zwallet is 100% totally free to use it’s now available on Google
              Play Store and App Store.
            </p>
          </object>
        </div>
      </section>
      <section style={{ backgroundColor: "#473ad10f" }}>
        <header className="leandingHeaderCon2">
          <article className="leandingHeader2">
            <object className="leadingImage">
              <Image
                src="/png-phone.png"
                alt="ilustrasi pekerja"
                width={450}
                height={450}
                objectFit="contain"
              ></Image>
            </object>
            <object className="featureLeading">
              <h1 className="textH1Leading ms-4">
                All the <span className="text-primary">Great</span> <br />{" "}
                Zwallet Fetures.
              </h1>
              <div className="cardLeading2">
                <div className="cardAbout2 bg-white">
                  <h5>
                    <span className="text-primary">1.</span> Small Fee
                  </h5>
                  <p>
                    We only charge 5% of every success transaction done in
                    FazzPay app.
                  </p>
                </div>
                <div className="cardAbout2 bg-white">
                  <h5>
                    <span className="text-primary">2.</span> Data Secured
                  </h5>
                  <p>
                    All your data is secured properly in our system and it’s
                    encrypted.
                  </p>
                </div>
                <div className="cardAbout2 bg-white">
                  <h5>
                    <span className="text-primary">3.</span> User Friendly
                  </h5>
                  <p>
                    FazzPay come up with modern and sleek design and not
                    complicated.{" "}
                  </p>
                </div>
              </div>
            </object>
          </article>
        </header>
      </section>
      <section className="aboutAps bg-light">
        <h1>
          What User are <span className="text-primary">Saying</span>
        </h1>
        <div className="d-flex justify-content-center">
          <p className="pLeanding">
            We have some great features from the application and it’s totally
            free to use by all users around the world.
          </p>
        </div>
        <div className="cardLeading3">
          <div className="nextPrevButton">
            <button
              className="btn btn-primary rounded-circle pt-2 ps-2 pe-2 pb-1 shadow translate-middle-y"
              type="button"
              data-bs-target="#testimonialCarousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
          </div>
          <div className="cardAbout3 bg-white mt-4">
            <div className="d-flex justify-content-center m-3">
              <div>
                <Image
                  src={"/profile default.png"}
                  width={"80px"}
                  height={"75px"}
                  style={{ borderRadius: "15px" }}
                />
              </div>
            </div>
            <h5>Galih M.D</h5>
            <p>Designer</p>
            <p>
              “This is the most outstanding app that I’ve ever try in my live,
              this app is such an amazing masterpiece and it’s suitable for you
              who is bussy with their bussiness and must transfer money to
              another person aut there. Just try this app and see the power!”{" "}
            </p>
          </div>
          <div className="nextPrevButton">
            <button
              className="btn btn-primary rounded-circle pt-2 ps-2 pe-2 pb-1 shadow translate-middle-y"
              type="button"
              data-bs-target="#testimonialCarousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>
      <footer className="footerLeanding bg-primary">
        <h2>Zwallet</h2>
        <p>
          Simplify financial needs and saving <br />
          much time in banking needs with one <br /> single app.
        </p>
        <hr />
        <div className="d-flex footer">
          <div className="flexFooter1">
            <p>2020 FazzPay. All right reserved.</p>
          </div>
          <div className="flexFooter2">
            <p>+62 5637 8882 9901</p>
          </div>
          <div className="flexFooter2">
            <p>contact@fazzpay.com</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default LandingPage;
