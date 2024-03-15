import React from "react";
import menuImg1 from "../img/lobster-bisque.jpg";
import menuImg2 from "../img/bread-barrel.jpg";
import menuImg3 from "../img/cake.jpg";
import menuImg4 from "../img/caesar.jpg";
import menuImg5 from "../img/tuscan-grilled.jpg";
import menuImg6 from "../img/mozzarella.jpg";
import menuImg7 from "../img/greek-salad.jpg";
import menuImg8 from "../img/spinach-salad.jpg";
import menuImg9 from "../img/lobster-roll.jpg";

const Menu = () => {
  return (
    <>
    
      <section className="section-box" id="menu">
        <div class="container">
          <div data-aos="fade-up" className="menu-check">
            <h2>Menu</h2>
            <p>Check Our Tasty Menu</p>
          </div>
        </div>
        <div>
          <div class="row" data-aos="fade-up" data-aos-delay="100">
            <div class="col-lg-12 d-flex justify-content-center">
              <ul className="Select-menu">
                <li data-filter="*" className="Menu-All">
                  <a href="">All</a>
                </li>
                <li data-filter=".filter-starters" className="Menu-All">
                  <a href="/Starters">Starters</a>
                </li>
                <li data-filter=".filter-salads" className="Menu-All">
                  <a href="#">Salads</a>
                </li>
                <li data-filter=".filter-specialty" className="Menu-All">
                 <a href="#"> Specialty</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="container">
            <div class="row" data-aos="fade-up" data-aos-delay="200">
              <div class="col-lg-6 menu-item filter-starters" id="starters">
                <img src={menuImg1} alt="Loading" className="menu-img" />
                <div class="menu-content">
                  <a href="Lobster" id="lobster">Lobster Bisque</a>
                  <span>$5.95</span>
                </div>
                <div class="menu-ingredients">
                  Lorem, deren, trataro, filede, nerada
                </div>
              </div>
              <div class="col-lg-6 menu-item filter-starters" id="starters">
                <img src={menuImg2} alt="Loading" className="menu-img" />
                <div class="menu-content">
                  <a href="#">Bread Barrel</a>
                  <span>$6.95</span>
                </div>
                <div class="menu-ingredients">
                  Lorem, deren, trataro, filede, nerada
                </div>
              </div>
              <div class="col-lg-6 menu-item filter-starters" >
                <img src={menuImg3} alt="Loading" className="menu-img" />
                <div class="menu-content">
                  <a href="Starter">Crab Cake</a>
                  <span>$7.95</span>
                </div>
                <div class="menu-ingredients">
                  A delicate crab cake served on a toasted roll with lettuce and
                  tartar sauce
                </div>
              </div>
              <div class="col-lg-6 menu-item filter-starters">
                <img src={menuImg4} alt="Loading" className="menu-img" />
                <div class="menu-content">
                  <a href="#">Caesar Selections</a>
                  <span>$8.95</span>
                </div>
                <div class="menu-ingredients">
                  Lorem, deren, trataro, filede, nerada
                </div>
              </div>
              <div class="col-lg-6 menu-item filter-starters">
                <img src={menuImg5} alt="Loading" className="menu-img" />
                <div class="menu-content">
                  <a href="#">Tuscan Grilled</a>
                  <span>$9.95</span>
                </div>
                <div class="menu-ingredients">
                  Grilled chicken with provolone, artichoke hearts, and roasted
                  red pesto
                </div>
              </div>
              <div class="col-lg-6 menu-item filter-starters">
                <img src={menuImg6} alt="Loading" className="menu-img" />
                <div class="menu-content">
                  <a href="#">Mozzarella Stick</a>
                  <span>$4.95</span>
                </div>
                <div class="menu-ingredients">
                  Lorem, deren, trataro, filede, nerada
                </div>
              </div>
              <div class="col-lg-6 menu-item filter-starters">
                <img src={menuImg7} alt="Loading" className="menu-img" />
                <div class="menu-content">
                  <a href="#">Greek Salad</a>
                  <span>$9.95</span>
                </div>
                <div class="menu-ingredients">
                  Fresh spinach, crisp romaine, tomatoes, and Greek olives
                </div>
              </div>
              <div class="col-lg-6 menu-item filter-starters">
                <img src={menuImg8} alt="Loading" className="menu-img" />
                <div class="menu-content">
                  <a href="#">Spinach Salad</a>
                  <span>$9.95</span>
                </div>
                <div class="menu-ingredients">
                  Fresh spinach with mushrooms, hard boiled egg, and warm bacon
                  vinaigrette
                </div>
              </div>
              <div class="col-lg-6 menu-item filter-starters">
                <img src={menuImg9} alt="Loading" className="menu-img" />
                <div class="menu-content">
                  <a href="#">Lobster Roll</a>
                  <span>$12.95</span>
                </div>
                <div class="menu-ingredients">
                  Plump lobster meat, mayo and crisp lettuce on a toasted bulky
                  roll
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Menu end  */}

      
    </>
  );
};
export default Menu;
