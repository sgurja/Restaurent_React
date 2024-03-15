import React, { Children } from "react";
import gallery1 from "../img/gallery-1.jpg"
import gallery2 from "../img/gallery-2.jpg"
import gallery3 from "../img/gallery-3.jpg"
import gallery4 from "../img/gallery-4.jpg"
import gallery5 from "../img/gallery-5.jpg"
import gallery6 from "../img/gallery-6.jpg"
import gallery7 from "../img/gallery-7.jpg"
import gallery8 from "../img/gallery-8.jpg"

const Gallery = () =>{
  return(
    <>
    <section className="gallery" id="gallery">
    <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Gallery</h2>
          <p>Some photos from Our Restaurant</p>
        </div>
      </div>
      <div class="container-fluid" data-aos="fade-up" data-aos-delay="100">
  <div class="row g-0">
    <div class="col-lg-3 col-md-4">
    <div className="gallery-img1">
      <a href="http://localhost:3000/static/media/gallery-1.598b14d604e8d21e0e4e.jpg" class="gallery-lightbox" data-gall="gallery-item">
        <img src={gallery1} alt="Loading" class="img-fluid"/>
      </a></div>
    </div>
    <div class="col-lg-3 col-md-4">
      <div className="gallery-img2">
    <a href="	http://localhost:3000/static/media/gallery-2.ddb0b132f388e7496599.jpg" class="gallery-lightbox" data-gall="gallery-item">
        <img src={gallery2} alt="Loading" class="img-fluid"/>
      </a></div>
    </div>
    <div class="col-lg-3 col-md-4">
    <div className="gallery-img3">
    <a href="	http://localhost:3000/static/media/gallery-3.646dbc86bff81b993c96.jpg" class="gallery-lightbox" data-gall="gallery-item">
        <img src={gallery3} alt="Loading" class="img-fluid"/>
      </a></div>
    </div>
    <div class="col-lg-3 col-md-4">
    <div className="gallery-img4">
    <a href="http://localhost:3000/static/media/gallery-4.940648e6fb8f268e028b.jpg" class="gallery-lightbox" data-gall="gallery-item">
        <img src={gallery4} alt="Loading" class="img-fluid"/>
      </a></div>
    </div>
    <div class="col-lg-3 col-md-4">
    <div className="gallery-img5">
    <a href="	http://localhost:3000/static/media/gallery-5.0b06e4efbe1e819ed794.jpg" class="gallery-lightbox" data-gall="gallery-item">
        <img src={gallery5} alt="Loading" class="img-fluid"/>
      </a></div>
    </div>
    <div class="col-lg-3 col-md-4">
    <div className="gallery-img6">
    <a href="	http://localhost:3000/static/media/gallery-6.e071ad58cc544ff6ed75.jpg" class="gallery-lightbox" data-gall="gallery-item">
        <img src={gallery6} alt="Loading" class="img-fluid"/>
      </a></div>
    </div>
    <div class="col-lg-3 col-md-4">
    <div className="gallery-img7">
    <a href="	http://localhost:3000/static/media/gallery-7.187aab3b25d8a708124d.jpg" class="gallery-lightbox" data-gall="gallery-item">
        <img src={gallery7} alt="Loading" class="img-fluid"/>
      </a></div>
    </div>
    <div class="col-lg-3 col-md-4">
    <div className="gallery-img8">
    <a href="http://localhost:3000/static/media/gallery-8.47fcc75d79fb4afa666f.jpg" class="gallery-lightbox" data-gall="gallery-item">
        <img src={gallery8} alt="Loading" class="img-fluid"/>
      </a></div>
    </div>

  </div>
</div>

    </section>
    </>
  )
}
export default Gallery;
