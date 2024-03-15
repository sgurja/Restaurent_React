import React from "react";
import img from "../img/about.jpg";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div>
          <div class="container">
            <div class="row">
              <div
                class="col-lg-6 order-1 order-lg-2"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className="about-img">
                  <img src={img} alt="Loading" width={555} />
                </div>
              </div>
              <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                <div data-aos="fade-up">
                  <h3 className="voluptatem-h3">
                    Voluptatem dignissimos provident quasi corporis voluptates
                    sit assumenda.
                  </h3>
                  <div className="lorem-div">
                    <i>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </i>
                  </div>
                  <p>
                    <i class="fa-regular fa-circle-check"></i>
                    <span>
                      {" "}
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </span>
                  </p>
                  <p>
                    <i class="fa-regular fa-circle-check"></i>
                    <span>
                      {" "}
                      Duis aute irure dolor in reprehenderit in voluptate velit.
                    </span>
                  </p>
                  <p>
                    <i class="fa-regular fa-circle-check"></i>
                    <span>
                      {" "}
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate
                      trideta storacalaperda mastiro dolore eu fugiat nulla
                      pariatur.
                    </span>
                  </p>
                  <p>
                    {" "}
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>
        {/* about end  */}

        {/* why us  */}
        <div className="whyus-books">
          <div class="container">
            <div>
              <h4 className="h4-whyus">
                WHY US
              </h4>
              <p className="p-whyChoose">Why Choose Our Restaurant</p>
            </div>
            <div class="row">
              <div class="col-lg-4"  data-aos="zoom-in" data-aos-delay="100">
                <div className="books-01">
                  <span className="number-01">01</span>
                  <h4 className="h4-lorem">Lorem Ipsum</h4>
                  <p className="p-ulamco">
                    Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et
                    consectetur ducimus vero placeat
                  </p>
                </div>
              </div>
              <div class="col-lg-4 mt-4 mt-lg-0">
                <div className="books-01"  data-aos="zoom-in" data-aos-delay="200">
                  <span className="number-01">02</span>
                  <h4 className="h4-lorem">Repellat Nihil</h4>
                  <p className="p-ulamco">
                    Dolorem est fugiat occaecati voluptate velit esse. Dicta
                    veritatis dolor quod et vel dire leno para dest
                  </p>
                </div>
              </div>
              <div class="col-lg-4 mt-4 mt-lg-0">
                <div className="books-01" data-aos="zoom-in" data-aos-delay="300" >
                  <span className="number-01">03</span>
                  <h4 className="h4-lorem">Ad ad velit qui</h4>
                  <p className="p-ulamco">
                    Molestiae officiis omnis illo asperiores. Aut doloribus
                    vitae sunt debitis quo vel nam quis
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};
export default About;
