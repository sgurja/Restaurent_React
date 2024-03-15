import React from "react";
import chefsImg1 from "../img/chefs-1.jpg";
import chefsImg2 from "../img/chefs-2.jpg";
import chefsImg3 from "../img/chefs-3.jpg";

const Chefs = () => {
  return (
    <>
      <section className="chefs" id="chefa">
        <div class="container" data-aos="fade-up">
          <div class="section-title">
            <h2>Chefs</h2>
            <p>Our Proffesional Chefs</p>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-6">
              <div class="card" data-aos="zoom-in" data-aos-delay="100">
                <img src={chefsImg1} alt="lording" />
                <div class="intro">
                  <h1>Walter White</h1>
                  <p>
                    <span>
                      <i>Master Chef</i>
                    </span>
                    <br />
                    <div className="icons">
                      <a href="">
                        <i class="fa-brands fa-twitter fa-2xl"></i>
                      </a>
                      <a href="">
                        <i class="fa-brands fa-facebook fa-2xl"></i>
                      </a>
                      <a href="">
                        <i class="fa-brands fa-instagram fa-2xl"></i>
                      </a>
                      <a href="">
                        <i class="fa-brands fa-linkedin fa-2xl"></i>
                      </a>
                    </div>
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6">
              <div class="card">
                <img src={chefsImg2} alt="lording" />
                <div class="intro" data-aos="zoom-in" data-aos-delay="200">
                  <h1>Sarah Jhonson</h1>
                  <p>
                    <span>
                      <i>Patissier</i>
                    </span>
                    <br />
                    <div className="icons">
                      <a href="">
                        <i class="fa-brands fa-twitter fa-2xl"></i>
                      </a>
                      <a href="">
                        <i class="fa-brands fa-facebook fa-2xl"></i>
                      </a>
                      <a href="">
                        <i class="fa-brands fa-instagram fa-2xl"></i>
                      </a>
                      <a href="">
                        <i class="fa-brands fa-linkedin fa-2xl"></i>
                      </a>
                    </div>
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6">
              <div class="card" data-aos="zoom-in" data-aos-delay="300">
                <img src={chefsImg3} alt="lording" />
                <div class="intro">
                  <h1>William Anderson</h1>
                  <p>
                    <span>
                      <i>cook</i>
                    </span>
                    <br />
                    <div className="icons">
                      <a href="">
                        <i class="fa-brands fa-twitter fa-2xl"></i>
                      </a>
                      <a href="">
                        <i class="fa-brands fa-facebook fa-2xl"></i>
                      </a>
                      <a href="">
                        <i class="fa-brands fa-instagram fa-2xl"></i>
                      </a>
                      <a href="">
                        <i class="fa-brands fa-linkedin fa-2xl"></i>
                      </a>
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Chefs;
