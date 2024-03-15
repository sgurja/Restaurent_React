import React from "react";
import "../../App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

const Home = () => {
  return (
    <>
    <section id="home">
      <div className="bag-img">
        <div className="number-time">
          <div>
            <i class="fa-solid fa-mobile-screen-button"></i>
            <span> +1 5589 55488 55</span>
          </div>

          <div>
            <i class="fa-regular fa-clock"></i>
            <span> Mon-Sat: 11AM - 23PM</span>
          </div>

          {/* <div className="en-de">
        <div><span>En</span>  /  <a href="#">De</a></div>
      </div> */}
        </div>

        {/* nav Start */}
       

        <Navbar expand="lg" className="bg-body-tertiary" id="header" >
          <Container>
            <Navbar.Brand> <a href="#home">Restaurantly</a></Navbar.Brand>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
           
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#menu">Menu</Nav.Link>
                <Nav.Link href="#specials">Specials</Nav.Link>
                <Nav.Link href="#events">Events</Nav.Link>
                <Nav.Link href="#chefa">Chefa</Nav.Link>
                <Nav.Link href="#gallery">Gallery</Nav.Link>

                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#contact">Contact</Nav.Link>
        
              </Nav>
            
            </Navbar.Collapse> 
            <div className="Book-a-table">
            <a
                  href="#book-a-table"
                  class="book-a-table-btn scrollto d-none d-lg-flex"
                >
                  Book a table
                </a></div>
          </Container>
         
        </Navbar> 
        
        {/* nav End */}

        <section id="hero" class="d-flex align-items-center" >
          <div
            class="container position-relative text-center text-lg-start"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div class="row">
              <div class="col-lg-12">
                <div className="welcome-text">
                  <h1 className="h1-welcome">
                    Welcome to{" "}
                    <span className="restaurantly-span">Restaurantly</span>
                  </h1>
                  <h2 className="h2-Delivering">
                    Delivering great food for more than 18 years!
                  </h2>
                  <div className="ourMenu-bookA">
                    <a href="#menu" className="books-our">
                      OUR MENU
                    </a>
                    <a href="#book-a-table" className="books-books">
                      BOOK A TABLE
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      </section>
    </>
  );
};
export default Home;
