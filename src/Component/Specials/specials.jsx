import React from "react";
import SpecialsImg1 from "../img/specials-1.png";
import SpecialsImg2 from "../img/specials-2.png";
import SpecialsImg3 from "../img/specials-3.png";
import SpecialsImg4 from "../img/specials-4.png";
import SpecialsImg5 from "../img/specials-5.png";

const Specials = () => {
  return (
    <>
   
      {/* ======Specials start===== */}
      <section className="specials-box" id="specials">
        <div class="container" data-aos="fade-up">
          <div class="section-title">
            <h2>Specials</h2>
            <p>Check Our Specials</p>
          </div>
          <div class="row" data-aos="fade-up" data-aos-delay="100">
            <div class="accordion_tab">
              <div class="accordion_tab_wrapper">
                <input
                  type="radio"
                  id="one"
                  name="accordion_group"
                  class="radio"
                  checked
                />
                <input
                  type="radio"
                  id="two"
                  name="accordion_group"
                  class="radio"
                />
                <input
                  type="radio"
                  id="three"
                  name="accordion_group"
                  class="radio"
                />
                <input
                  type="radio"
                  id="four"
                  name="accordion_group"
                  class="radio"
                />
                <input
                  type="radio"
                  id="five"
                  name="accordion_group"
                  class="radio"
                />

                <div class="accordion_tab_group">
                  <label for="one" class="tab" id="one-tab">
                    Modi sit est
                  </label>
                  <label for="two" class="tab" id="two-tab">
                    Unde praesentium sed
                  </label>
                  <label for="three" class="tab" id="three-tab">
                    Pariatur explicado vel
                  </label>
                  <label for="four" class="tab" id="four-tab">
                    Nostrum qui quasi
                  </label>
                  <label for="five" class="tab" id="five-tab">
                    iusto ut expedite aut
                  </label>
                </div>

                <div class="accordion_tab_contents">
                  <div class="accordion_tab_content" id="one-tab-content">
                    <div class="row">
                      <div class="col-lg-8 details order-2 order-lg-1">
                        <h3 className="architecto-h3">
                          Architecto ut aperiam autem id
                        </h3>
                        <p class="fst-italic">
                          Qui laudantium consequatur laborum sit qui ad sapiente
                          dila parde sonata raqer a videna mareta paulona marka
                        </p>
                        <p class="fst-italic">
                          Et nobis maiores eius. Voluptatibus ut enim blanditiis
                          atque harum sint. Laborum eos ipsum ipsa odit magni.
                          Incidunt hic ut molestiae aut qui. Est repellat minima
                          eveniet eius et quis magni nihil. Consequatur dolorem
                          quaerat quos qui similique accusamus nostrum rem vero
                        </p>
                      </div>
                      <div class="col-lg-4 text-center order-1 order-lg-2">
                        <img
                          src={SpecialsImg1}
                          alt="Loading"
                          className="SpecialsImg1"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="accordion_tab_content" id="two-tab-content">
                    <div class="row">
                      <div class="col-lg-8 details order-2 order-lg-1">
                        <h3 className="architecto-h3">
                          Et blanditiis nemo veritatis excepturi
                        </h3>
                        <p class="fst-italic">
                          Qui laudantium consequatur laborum sit qui ad sapiente
                          dila parde sonata raqer a videna mareta paulona marka
                        </p>
                        <p class="fst-italic">
                          Ea ipsum voluptatem consequatur quis est. Illum error
                          ullam omnis quia et reiciendis sunt sunt est. Non
                          aliquid repellendus itaque accusamus eius et velit
                          ipsa voluptates. Optio nesciunt eaque beatae accusamus
                          lerode pakto madirna desera vafle de nideran pal
                        </p>
                      </div>
                      <div class="col-lg-4 text-center order-1 order-lg-2">
                        <img
                          src={SpecialsImg2}
                          alt="Loading"
                          className="SpecialsImg1"
                          width={250}
                        />
                      </div>
                    </div>
                  </div>
                  <div class="accordion_tab_content" id="three-tab-content">
                    <div class="row">
                      <div class="col-lg-8 details order-2 order-lg-1">
                        <h3 className="architecto-h3">
                          Impedit facilis occaecati odio neque aperiam sit
                        </h3>
                        <p class="fst-italic">
                          Eos voluptatibus quo. Odio similique illum id quidem
                          non enim fuga. Qui natus non sunt dicta dolor et. In
                          asperiores velit quaerat perferendis aut
                        </p>
                        <p class="fst-italic">
                          Iure officiis odit rerum. Harum sequi eum illum
                          corrupti culpa veritatis quisquam. Neque
                          necessitatibus illo rerum eum ut. Commodi ipsam minima
                          molestiae sed laboriosam a iste odio. Earum odit
                          nesciunt fugiat sit ullam. Soluta et harum voluptatem
                          optio quae
                        </p>
                      </div>
                      <div class="col-lg-4 text-center order-1 order-lg-2">
                        <img
                          src={SpecialsImg3}
                          alt="Loading"
                          width={250}
                          className="SpecialsImg1"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="accordion_tab_content" id="four-tab-content">
                    <div class="row">
                      <div class="col-lg-8 details order-2 order1">
                        <h3 className="architecto-h3">
                          Fuga dolores inventore laboriosam ut est accusamus
                          laboriosam dolore
                        </h3>
                        <p class="fst-italic">
                          Totam aperiam accusamus. Repellat consequuntur iure
                          voluptas iure porro quis delectus
                        </p>
                        <p class="fst-italic">
                          Eaque consequuntur consequuntur libero expedita in
                          voluptas. Nostrum ipsam necessitatibus aliquam fugiat
                          debitis quis velit. Eum ex maxime error in consequatur
                          corporis atque. Eligendi asperiores sed qui veritatis
                          aperiam quia a laborum inventore
                        </p>
                      </div>
                      <div class="col-lg-4 text-center order-1 order-lg-2">
                        <img
                          src={SpecialsImg4}
                          alt="Loading"
                          width={250}
                          className="SpecialsImg1"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="accordion_tab_content" id="five-tab-content">
                    <div class="row">
                      <div class="col-lg-8 details order-2 order-lg-1">
                        <h3 className="architecto-h3">
                          Est eveniet ipsam sindera pad rone matrelat sando reda
                        </h3>
                        <p class="fst-italic">
                          Omnis blanditiis saepe eos autem qui sunt debitis
                          porro quia.
                        </p>
                        <p class="fst-italic">
                          Exercitationem nostrum omnis. Ut reiciendis
                          repudiandae minus. Omnis recusandae ut non quam ut
                          quod eius qui. Ipsum quia odit vero atque qui
                          quibusdam amet. Occaecati sed est sint aut vitae
                          molestiae voluptate vel
                        </p>
                      </div>
                      <div class="col-lg-4 text-center order-1 order-lg-2">
                        <img
                          src={SpecialsImg5}
                          alt="Loading"
                          width={250}
                          className="SpecialsImg1"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======Specials Section end===== */}
    </>
  );
};
export default Specials;
