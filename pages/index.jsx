import React from "react";
import Head from "next/head";
import Navbar from "../component/navLandingPage";
import Image from "next/image";

function LandingPage() {
  return (
    <>
      <Head>
        <title>Zwallet</title>
      </Head>
      <Navbar />
      <header
        className="leandingHeader"
        style={{
          display: "flex",
          marginTop: 80,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <article
          style={{
            display: "flex",
            flexDiraction: "row",
            widht: 1200,
            padding: 5,
          }}
        >
          <object>
            <Image
              src="/png-phone.png"
              alt="ilustrasi pekerja"
              width={450}
              height={450}
              objectFit="contain"
            ></Image>
          </object>
          <object>
            <h1>Awesome App for saving Time</h1>
            <p>
              We bring you a mobile app for banking problems that oftenly
              wasting much of your times.
            </p>
            <div>
              <button className="btn btn-primary">Try It Free</button>
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
      <section
        style={{
          display: "flex",
          marginTop: 80,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#473AD10F",
          height: 150,
          paddingLeft: 50,
          paddingRight: 50,
        }}
      >
        <article
          style={{
            display: "flex",
            widht: 1200,
          }}
        >
          <div
            style={{
              flex: 1,
              width: 400,
            }}
          >
            <Image
              src="/Group 16.svg"
              alt="ilustrasi pekerja"
              width={450}
              height={100}
              objectFit="contain"
            ></Image>
          </div>
          <div
            style={{
              flex: 1,
            }}
          >
            <Image
              src="/Group 17.svg"
              alt="ilustrasi pekerja"
              width={450}
              height={100}
              objectFit="contain"
            ></Image>
          </div>
          <div
            style={{
              flex: 1,
            }}
          >
            <Image
              src="/Group 18.svg"
              alt="ilustrasi pekerja"
              width={450}
              height={100}
              objectFit="contain"
            ></Image>
          </div>
          <div
            style={{
              flex: 1,
            }}
          >
            <Image
              src="/Group 19.svg"
              alt="ilustrasi pekerja"
              width={450}
              height={100}
              objectFit="contain"
            ></Image>
          </div>
          <div
            style={{
              flex: 1,
            }}
          >
            <Image
              src="/Group 20.svg"
              alt="ilustrasi pekerja"
              width={450}
              height={100}
              objectFit="contain"
            ></Image>
          </div>
        </article>
      </section>
      <section>
        <h1>About the Application</h1>
        <p>
          We have some great features from the application and it’s totally free
          to use by all users around the world.
        </p>
        <div>
          <object>
            <div>icon</div>
            <h5>24/7 Support</h5>
            <p>
              We have 24/7 contact support so you can contact us whenever you
              want and we will respond it.
            </p>
          </object>
          <object>
            <div>icon</div>
            <h5>Data Privacy</h5>
            <p>
              We make sure your data is safe in our database and we will encrypt
              any data you submitted to us.
            </p>
          </object>
          <object>
            <div>icon</div>
            <h5>Easy Download</h5>
            <p>
              Zwallet is 100% totally free to use it’s now available on Google
              Play Store and App Store.
            </p>
          </object>
        </div>
      </section>
      <section>
        <article>
          <object>Image</object>
          <object>
            <h1>All The Great FazzPay Features</h1>
            <object>
              <h5>1. Small Fee</h5>
              <p>
                We only charge 5% of every success transaction done in FazzPay
                app.
              </p>
            </object>
            <object>
              <h5>2. Data Secured</h5>
              <p>
                All your data is secured properly in our system and it’s
                encrypted.
              </p>
            </object>
            <object>
              <h5>3. User Friendly</h5>
              <p>
                FazzPay come up with modern and sleek design and not
                complicated.
              </p>
            </object>
          </object>
        </article>
      </section>
      <section>
        <h1>What User are Saying</h1>
        <p>
          We have some great features from the application and it’s totally free
          to use by all users around the world.
        </p>

        <article>
          <div>Image</div>
          <h5>Name</h5>
          <p>category</p>
          <p>
            “This is the most outstanding app that I’ve ever try in my live,
            this app is such an amazing masterpiece and it’s suitable for you
            who is bussy with their bussiness and must transfer money to another
            person aut there. Just try this app and see the power!”
          </p>
          <button
            className="btn btn-primary rounded-circle pt-2 ps-2 pe-2 pb-1 shadow position-absolute top-50 start-0 translate-middle-y"
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
          <button
            className="btn btn-primary rounded-circle pt-2 ps-2 pe-2 pb-1 shadow position-absolute top-50 end-0 translate-middle-y"
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
        </article>
      </section>
      <footer>Footer</footer>
    </>
  );
}

export default LandingPage;
