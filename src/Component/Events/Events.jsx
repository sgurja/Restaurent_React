import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Eventsimg1 from "../img/event-birthday.jpg";
import Eventsimg2 from "../img/event-custom.jpg";
import Eventsimg3 from "../img/event-private.jpg";
import testimonials1 from "../img/testimonials-1.jpg";
import testimonials2 from "../img/testimonials-2.jpg";
import testimonials3 from "../img/testimonials-3.jpg";
import testimonials4 from "../img/testimonials-4.jpg";
import testimonials5 from "../img/testimonials-5.jpg";
import Carousel from "react-bootstrap/Carousel";

const Events = () => {
  const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };

  return (
    <>
      {/* <!-- ======= Events Start ======= --> */}
      
      <section className="Events-img" id="events">
        
        <div className="Img-Carousel">
          <div data-aos="fade-up" data-aos-delay="100">
            <div class="container" data-aos="fade-up">
              <div class="Events-title">
                <h2>Events</h2>
                <p>Organize Your Events in our Restaurant</p>
              </div>
              <div class="corousel">
                <div
                  id="carouselExampleFade"
                  class="carousel slide carousel-fade"
                  data-bs-ride="carousel"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <div class="row">
                        <div class="col-lg-6">
                          <img
                            src={Eventsimg1}
                            class="Eventsimg"
                            alt="Loading"
                          />
                        </div>
                        <div class="col-lg-6 pt-4 pt-lg-0 content">
                          <h3 className="Birthday-h3">Birthday Parties</h3>
                          <div class="price">
                            <p>
                              <span>$189</span>
                            </p>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </p>
                          <ul>
                            <li>
                              <i class="bi bi-check-circled"></i> Ullamco
                              laboris nisi ut aliquip ex ea commodo consequat.
                            </li>
                            <li>
                              <i class="bi bi-check-circled"></i> Duis aute
                              irure dolor in reprehenderit in voluptate velit.
                            </li>
                            <li>
                              <i class="bi bi-check-circled"></i> Ullamco
                              laboris nisi ut aliquip ex ea commodo consequat.
                            </li>
                          </ul>
                          <p>
                            Ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <div class="row">
                        <div class="col-lg-6">
                          <img
                            src={Eventsimg2}
                            class="Eventsimg"
                            alt="Loading"
                          />
                        </div>
                        <div class="col-lg-6 pt-4 pt-lg-0 content">
                          <h3 className="Birthday-h3">Private Parties</h3>
                          <div class="price">
                            <p>
                              <span>$290</span>
                            </p>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </p>
                          <ul>
                            <li>
                              <i class="bi bi-check-circled"></i> Ullamco
                              laboris nisi ut aliquip ex ea commodo consequat.
                            </li>
                            <li>
                              <i class="bi bi-check-circled"></i> Duis aute
                              irure dolor in reprehenderit in voluptate velit.
                            </li>
                            <li>
                              <i class="bi bi-check-circled"></i> Ullamco
                              laboris nisi ut aliquip ex ea commodo consequat.
                            </li>
                          </ul>
                          <p>
                            Ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <div class="row">
                        <div class="col-lg-6">
                          <img
                            src={Eventsimg3}
                            class="Eventsimg"
                            alt="Loading"
                          />
                        </div>
                        <div class="col-lg-6 pt-4 pt-lg-0 content">
                          <h3 className="Birthday-h3">Custom Parties</h3>
                          <div class="price">
                            <p>
                              <span>$99</span>
                            </p>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </p>
                          <ul>
                            <li>
                              <i class="bi bi-check-circled"></i> Ullamco
                              laboris nisi ut aliquip ex ea commodo consequat.
                            </li>
                            <li>
                              <i class="bi bi-check-circled"></i> Duis aute
                              irure dolor in reprehenderit in voluptate velit.
                            </li>
                            <li>
                              <i class="bi bi-check-circled"></i> Ullamco
                              laboris nisi ut aliquip ex ea commodo consequat.
                            </li>
                          </ul>
                          <p>
                            Ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleFade"
                    data-bs-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleFade"
                    data-bs-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ======= Events end ======= --> */}

      {/* Books a table start  */}
      <section class="book-a-table" id="book-a-table">
        <div class="container" data-aos="fade-up">
          <div>
            <div class="Books-table">
              <h2>Reservation</h2>
              <p>Book a Table</p>
            </div>
          </div>
          <form
            action="forms/book-a-table.php"
            method="post"
            role="form"
            class="php-email-form"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div class="row">
              <div class="col-lg-4 col-md-6 form-group">
                <input
                  type="text"
                  name="name"
                  class="form-control"
                  id="name"
                  placeholder="Your Name"
                  data-rule="minlen:4"
                  data-msg="Please enter at least 4 chars"
                />
                <div class="validate"></div>
              </div>
              <div class="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
                <input
                  type="email"
                  class="form-control"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  data-rule="email"
                  data-msg="Please enter a valid email"
                />
                <div class="validate"></div>
              </div>
              <div class="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
                <input
                  type="text"
                  class="form-control"
                  name="phone"
                  id="phone"
                  placeholder="Your Phone"
                  data-rule="minlen:4"
                  data-msg="Please enter at least 4 chars"
                />
                <div class="validate"></div>
              </div>
              <div class="col-lg-4 col-md-6 form-group mt-3">
                <input
                  type="text"
                  name="date"
                  class="form-control"
                  id="date"
                  placeholder="Date"
                  data-rule="minlen:4"
                  data-msg="Please enter at least 4 chars"
                />
                <div class="validate"></div>
              </div>
              <div class="col-lg-4 col-md-6 form-group mt-3">
                <input
                  type="text"
                  class="form-control"
                  name="time"
                  id="time"
                  placeholder="Time"
                  data-rule="minlen:4"
                  data-msg="Please enter at least 4 chars"
                />
                <div class="validate"></div>
              </div>
              <div class="col-lg-4 col-md-6 form-group mt-3">
                <input
                  type="number"
                  class="form-control"
                  name="people"
                  id="people"
                  placeholder="# of people"
                  data-rule="minlen:1"
                  data-msg="Please enter at least 1 chars"
                />
                <div class="validate"></div>
              </div>
            </div>
            <div class="form-group mt-3">
              <textarea
                class="form-control"
                name="message"
                rows="5"
                placeholder="Message"
              ></textarea>
              <div class="validate"></div>
            </div>
            {/* <div class="mb-3">
              <div class="loading"></div>
              <div class="error-message"></div>
              <div class="sent-message"></div>
            </div> */}
            <div class="text-center">
              <button className="Books-Button">Book a Table</button>
            </div>
          </form>
        </div>
      </section>

      {/* Books a table end  */}

      {/* What they Start  */}
      <section className="what-they">
        <div class="container">
          <div className="Testimonials-what">
            <h2>Testimonials</h2>
            <p>What they're saying about us</p>
          </div>
          <div>
            <Slider {...settings}>
              <div>
                <div class="testimonial-item">
                  <p>
                  <i class="fa-solid fa-quote-left"></i>
                    Proin iaculis purus consequat sem cure digni ssim donec
                    porttitora entum suscipit rhoncus. Accusantium quam,
                    ultricies eget id, aliquam eget nibh et. Maecen aliquam,
                    risus at semper.
                    <i class="fa-solid fa-quote-right"></i>
                  </p>
                  <img
                    src={testimonials1}
                    class="testimonial-img"
                    alt="loading"
                    width={100}
                  />
                  <h3>Saul Goodman</h3>
                  <h4>Ceo &amp; Founder</h4>
                </div>
              </div>
              <div>
                <div class="testimonial-item">
                  <p>
                  <i class="fa-solid fa-quote-left"></i>
                    Export tempor illum tamen malis malis eram quae irure esse
                    labore quem cillum quid cillum eram malis quorum velit fore
                    eram velit sunt aliqua noster fugiat irure amet legam anim
                    culpa.
                    <i class="fa-solid fa-quote-right"></i>
                  </p>
                  <img
                    src={testimonials2}
                    class="testimonial-img"
                    alt="loading"
                    width={100}
                  />
                  <h3>Sara Wilsson</h3>
                  <h4>Designer</h4>
                </div>
              </div>
              <div>
                <div class="testimonial-item">
                  <p>
                  <i class="fa-solid fa-quote-left"></i>
                    Enim nisi quem export duis labore cillum quae magna enim
                    sint quorum nulla quem veniam duis minim tempor labore quem
                    eram duis noster aute amet eram fore quis sint minim.
                    <i class="fa-solid fa-quote-right"></i>
                  </p>
                  <img
                    src={testimonials3}
                    class="testimonial-img"
                    alt="loading"
                    width={100}
                  />
                  <h3>Jena Karlis</h3>
                  <h4>Store Owner</h4>
                </div>
              </div>
              <div>
                <div class="testimonial-item">
                  <p>
                  <i class="fa-solid fa-quote-left"></i>
                    Fugiat enim eram quae cillum dolore dolor amet nulla culpa
                    multos export minim fugiat minim velit minim dolor enim duis
                    veniam ipsum anim magna sunt elit fore quem dolore labore
                    illum veniam.
                    <i class="fa-solid fa-quote-right"></i>
                  </p>
                  <img
                    src={testimonials4}
                    class="testimonial-img"
                    alt="loading"
                    width={100}
                  />
                  <h3>Matt Brandon</h3>
                  <h4>Freelancer</h4>
                </div>
              </div>
              <div>
                <div class="testimonial-item">
                  <p>
                  <i class="fa-solid fa-quote-left"></i>
                    Quis quorum aliqua sint quem legam fore sunt eram irure
                    aliqua veniam tempor noster veniam enim culpa labore duis
                    sunt culpa nulla illum cillum fugiat legam esse veniam culpa
                    fore nisi cillum quid.
                    <i class="fa-solid fa-quote-right"></i>
                  </p>
                  <img
                    src={testimonials5}
                    class="testimonial-img"
                    alt="loading"
                    width={100}
                  />
                  <h3>John Larson</h3>
                  <h4>Entrepreneur</h4>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>

      {/* What they End  */}
    </>
  );
};
export default Events;
