import React from "react";

const Contact = () => {
  return (
    <>
    <section id="contact">
      {/* contact map start  */}

      <section className="contact-box">
        <div class="container" data-aos="fade-up">
          <div class="section-title">
            <h2>Contact</h2>
            <p>Contact Us</p>
          </div>
        </div>

        <div data-aos="fade-up">
          <iframe
            height={350}
            width={1300}
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
        <div class="container" data-aos="fade-up">
          <div class="row mt-5">
            <div class="col-lg-4">
              <div class="info">
                <div class="address">
                  <i class="fa-solid fa-location-dot fa-2xl"></i>
                  <h4>Location:</h4>
                  <p>A108 Adam Street, New York, NY 535022</p>
                </div>

                <div class="open-hours">
                  <i class="fa-regular fa-clock fa-2xl"></i>
                  <h4>Open Hours:</h4>
                  <p>
                    Monday-Saturday:
                    <br />
                    11:00 AM - 23:00 PM
                  </p>
                </div>

                <div class="email">
                  <i class="fa-regular fa-envelope fa-2xl"></i>
                  <h4>Email:</h4>
                  <p>info@example.com</p>
                </div>

                <div class="phone">
                  <i class="fa-solid fa-mobile-screen-button fa-2xl"></i>
                  <h4>Call:</h4>
                  <p>+1 5589 55488 55s</p>
                </div>
              </div>
            </div>

            <div class="col-lg-8 mt-5 mt-lg-0">
              <form
                action="forms/contact.php"
                method="post"
                role="form"
                class="php-email-form"
              >
                <div class="row">
                  <div class="col-md-6 form-group">
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      id="name"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div class="col-md-6 form-group mt-3 mt-md-0">
                    <input
                      type="email"
                      class="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
                <div class="form-group mt-3">
                  <input
                    type="text"
                    class="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div class="form-group mt-3">
                  <textarea
                    class="form-control"
                    name="message"
                    rows="8"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                <div class="my-3">
                  <div class="loading">Loading</div>
                  <div class="error-message"></div>
                  <div class="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div class="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* contact map end  */}
      <hr />
      {/* Footer */}
      <section className="footer">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6">
              <div class="footer-info">
                <h3>Restaurantly</h3>
                <p>
                  A108 Adam Street <br />
                  NY 535022, USA
                  <br />
                  <br />
                  <strong>Phone:</strong> +1 5589 55488 55
                  <br />
                  <strong>Email:</strong> info@example.com
                  <br />
                </p>
                <div class="social-links mt-3">
                  <a href="#" class="twitter">
                    <i class="fa-brands fa-twitter"></i>
                  </a>
                  <a href="#" class="facebook">
                    <i class="fa-brands fa-facebook"></i>
                  </a>
                  <a href="#" class="instagram">
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                  <a href="#" class="google-plus">
                    <i class="fa-brands fa-skype"></i>
                  </a>
                  <a href="#" class="linkedin">
                    <i class="fa-brands fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-2 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                <i class="fa-solid fa-chevron-right"></i> <a href="#">Home</a>
                </li>
                <li>
                <i class="fa-solid fa-chevron-right"></i> <a href="#">About us</a>
                </li>
                <li>
                <i class="fa-solid fa-chevron-right"></i> <a href="#">Services</a>
                </li>
                <li>
                <i class="fa-solid fa-chevron-right"></i>{" "}
                  <a href="#">Terms of service</a>
                </li>
                <li>
                <i class="fa-solid fa-chevron-right"></i>{" "}
                  <a href="#">Privacy policy</a>
                </li>
              </ul>
            </div>
            <div class="col-lg-3 col-md-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                <i class="fa-solid fa-chevron-right"></i> <a href="#">Web Design</a>
                </li>
                <li>
                <i class="fa-solid fa-chevron-right"></i>{" "}
                  <a href="#">Web Development</a>
                </li>
                <li>
                <i class="fa-solid fa-chevron-right"></i>{" "}
                  <a href="#">Product Management</a>
                </li>
                <li>
                <i class="fa-solid fa-chevron-right"></i> <a href="#">Marketing</a>
                </li>
                <li>
                <i class="fa-solid fa-chevron-right"></i>{" "}
                  <a href="#">Graphic Design</a>
                </li>
              </ul>
            </div>

            <div class="col-lg-4 col-md-6 footer-newsletter">
              <h4>Our Newsletter</h4>
              <p>
                Tamen quem nulla quae legam multos aute sint culpa legam noster
                magna
              </p>
              <form action="">
                <input type="email" name="email" />
                <input type="submit" value="Subscribe" />
              </form>
            </div>
          </div>
        </div>
      </section>
      
  <div id="preloader"></div>
  <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="fa-regular fa-hand-point-up fa-2xl"></i></a>
  </section>
    </>
  );
};
export default Contact;
