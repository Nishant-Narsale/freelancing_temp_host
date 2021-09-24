import React from "react";
import "./Infopage.css";
import Navbar from "./Navbar";
import Chotumotu from "./Chotumotu.png";
import Imagin from "./Add color-bro.png"
import Dog from "./Dog walking-bro.png"
import Footer from "../Footer-Component/Footer"
export default function Infopage() {
  return (
    <>
      <div className="mainbody">
        <div className="container1">
          <div className="homecontainer">
            <div className="cricleandellipse">
              <section className="circle1"></section>
              <section className="circle2"></section>
              <section className="circle3"></section>
              <section className="circle4"></section>
              <section className="circle5"></section>
            </div>
          </div>
          <div className="cardcontainer glass1">
            <Navbar />
            <div className="containerbody">
              <div className="lefthandmainpage">
                <h2 className="bigtitle">The World Work Marketplace</h2>
                <p className="pragraph">
                  Join millions of businesses and independent pros who do great
                  work together.
                </p>
                <div className="buttons1stpage">
                  <button className="but">Find Talent</button>
                  <button className="but">Find Work</button>
                </div>
                <div className="stat">
                  <section>
                    <p className="newstats">45K+</p>
                    <p1>chus</p1>
                  </section>
                  <section>
                    <p className="newstats">30K+</p>
                    <p1>chus</p1>
                  </section>
                  <section>
                    <p className="newstats">30K+</p>
                    <p1>chus</p1>
                  </section>
                </div>
              </div>
              <div className="righthandsidemain">
                <img
                  style={{ width: "17vw", height: "17vw" }}
                  src={Chotumotu}
                  alt=""
                />
                <img
                  style={{ width: "17vw", height: "17vw" }}
                  src={Chotumotu}
                  alt=""
                />
                <img
                  style={{ width: "17vw", height: "17vw" }}
                  src={Chotumotu}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container2 ">
          <div className="homecontainer2">
            <div className="cricleandellipse">
              <section className="concircle1"></section>
              <section className="concircle2"></section>
              <section className="concircle3"></section>
            </div>
          </div>
          <div className="cardcontainer2 glass2">
            <div className="conatainer2top">
              <img
                style={{ height: "20vw", width: "40vw", marginLeft: "2.5vw" }}
                src={Imagin}
                alt=""
              />
              <div className="container2side">
                <h2 className="cont2title">What is Freelancing ?</h2>
                <p style={{ color: "white", padding: "2vw" }}>
                  You may be wondering, “so what is freelancing?”
                  <br />
                  Freelancing means to work as an independent company rather
                  than be employed by someone else. Freelancers are
                  self-employed and often referred to as independent
                  contractors.
                </p>
              </div>
            </div>
            <div className="container2body">
              <div className="glasscontainer2 smallglasscont2">
                <p style={{ color: "white", padding: "2.5vw" }}>
                  Find opportunities for every stage of your freelance career
                </p>
                <img style={{ height: "15vw", width: "15vw", marginTop: "-5vw", marginLeft: "2vw" }} src={Dog} alt="" />
              </div>
              <div className="glasscontainer2 smallglasscont2">
                <p style={{ color: "white", padding: "2.5vw" }}>
                  Find opportunities for every stage of your freelance career
                </p>
                <img style={{ height: "15vw", width: "15vw", marginTop: "-5vw", marginLeft: "2vw" }} src={Dog} alt="" />
              </div>
              <div className="glasscontainer2 smallglasscont2">
                <p style={{ color: "white", padding: "2.5vw" }}>
                  Find opportunities for every stage of your freelance career
                </p>
                <img style={{ height: "15vw", width: "15vw", marginTop: "-5vw", marginLeft: "2vw" }} src={Dog} alt="" />
              </div>
              <div className="glasscontainer2 smallglasscont2">
                <p style={{ color: "white", padding: "2.5vw" }}>
                  Find opportunities for every stage of your freelance career
                </p>
                <img style={{ height: "15vw", width: "15vw", marginTop: "-5vw", marginLeft: "2vw" }} src={Dog} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="container3 ">
          <div className="homecontainer3">
            <div className="cricleandellipse">
              <section className="concircle1"></section>
              <section className="concircle2"></section>
              <section className="concircle3"></section>
            </div>
          </div>
          <div className="cardcontainer3 glass2">
            <div className="conatainer2top">
              <div className="container2side">
                <h2 className="cont2title">What is Freelancing ?</h2>
                <p style={{ color: "white", padding: "3vw" }}>
                  You may be wondering, “so what is freelancing?”
                  <br />
                  Freelancing means to work as an independent company rather
                  than be employed by someone else. Freelancers are
                  self-employed and often referred to as independent
                  contractors.
                </p>
              </div>
              <img
                style={{ height: "20vw", width: "40vw", marginLeft: "2.5vw" }}
                src={Imagin}
                alt=""
              />
            </div>
            <div className="container2body">
              <div className="glasscontainer2 smallglasscont2">
                <p style={{ color: "white", padding: "2.5vw" }}>
                  Find opportunities for every stage of your freelance career
                </p>
                <img style={{ height: "15vw", width: "15vw", marginTop: "-5vw", marginLeft: "2vw" }} src={Dog} alt="" />
              </div>
              <div className="glasscontainer2 smallglasscont2">
                <p style={{ color: "white", padding: "2.5vw" }}>
                  Find opportunities for every stage of your freelance career
                </p>
                <img style={{ height: "15vw", width: "15vw", marginTop: "-5vw", marginLeft: "2vw" }} src={Dog} alt="" />
              </div>
              <div className="glasscontainer2 smallglasscont2">
                <p style={{ color: "white", padding: "2.5vw" }}>
                  Find opportunities for every stage of your freelance career
                </p>
                <img style={{ height: "15vw", width: "15vw", marginTop: "-5vw", marginLeft: "2vw" }} src={Dog} alt="" />
              </div>
              <div className="glasscontainer2 smallglasscont2">
                <p style={{ color: "white", padding: "2.5vw" }}>
                  Find opportunities for every stage of your freelance career
                </p>
                <img style={{ height: "15vw", width: "15vw", marginTop: "-5vw", marginLeft: "2vw" }} src={Dog} alt="" />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
