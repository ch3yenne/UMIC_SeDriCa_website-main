import "./Hero.css";

import e20 from "../../assets/cars/c8_new.jpg";
import c4 from "../../assets/cars/c4_new.jpg";
import c1 from "../../assets/cars/c21.jpeg";  
import c6 from "../../assets/cars/c61.jpeg";  
import flip from "../../assets/flip.jpg";
import au from "../../assets/au1.png";

function Hero() {
  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="3500">
            <img src={e20} className="d-block w-100" alt="MAHINDRA E20" />
            <div className="caption text-start">
              <h1>MAHINDRA</h1>
              <h1>E20</h1>
            </div>
          </div>

          <div className="carousel-item" data-bs-interval="3500">
            <img src={c4} className="d-block w-100" alt="Palis" />
            <div className="caption text-start">
              <h1>PALIS</h1>
            </div>
          </div>

          <div className="carousel-item" data-bs-interval="3500">
            <img src={c1} className="d-block w-100" alt="Fira" />
            <div className="caption text-start">
              <h1>FIRA</h1>
            </div>
          </div>

          <div className="carousel-item" data-bs-interval="3500">
            <img src={c6} className="d-block w-100" alt="F1 Tenth" />
            
            {/* Both headings are now grouped in a single caption container */}
            <div className="caption text-start">
              <h1>F1-TENTH</h1>
              {/* Added mt-2 (margin-top) to give it a little breathing room */}
              <h3 className="fs-5 fw-normal mt-2">Courtesy: Rahul Mangharam</h3>
            </div>
          </div>

          <div className="carousel-item" data-bs-interval="3500">
            <img src={au} className="d-block w-100" alt="IGVC" />
            <div className="caption text-start">
              <h1>IGVC</h1>
              <h1>Auto-Nav</h1>
            </div>
          </div>

          <div className="carousel-item" data-bs-interval="3500">
            <img src={flip} className="d-block w-100" alt="Gridvictus" />
            <div className="caption text-start">
              <h1>GRIDVICTUS</h1>
            </div>
          </div>
        </div>
      </div>
      
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </>
  );
}

export default Hero;