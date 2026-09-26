import logo from "../../assets/maxresdefault.jpg"

function Card() {
  return (
    <>
      <div
        className="p-5 mb-5 mx-5 rounded-4 shadow-lg"
        style={{
          background: "rgba(255, 255, 255, 0.05)", /* Darker, sleeker glass */
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.1)" /* Crucial for premium glass effect */
        }}
      >
        <div className="row d-flex align-items-center">
          
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="w-100 overflow-hidden rounded-4 shadow-sm position-relative">
              <img
                className="w-100 h-100"
                src={logo}
                alt="Logo"
                style={{ objectFit: "cover", minHeight: "300px" }}
              />
            </div>
          </div>

          {/* Right Content Box */}
          <div className="col-lg-6 ps-lg-5">
            <div className="w-100 d-flex flex-column">
              <span className="text-uppercase tracking-wider fw-bold" style={{ color: "#888", fontSize: "0.85rem", letterSpacing: "1.5px" }}>
                Safe Drive
              </span>
              <h3 className="mb-4 fw-bold">SeDriCa</h3>
              
              <p className="fs-6 text-secondary mb-3">
                In the mid-2000's Raj Mashruwala gave students access to the resources they needed, and hence UMIC was born. Looking towards greater challenges, UMIC aligned its vision with the dream of autonomous mobility, and hence SeDriCa was born in 2011.
              </p>
              <p className="d-none d-lg-block fs-6 text-secondary mb-4">
                Team SeDriCa aims to develop India's first self-driving car, trying to achieve Level 5 Autonomy, capable of autonomous driving under Indian Road Conditions. From efficient performance to safety considerations, we plan to cover them all!
              </p>
              
              <a href="/Teams/Sedrica" className="icon-link gap-1 text-decoration-none fw-bold" style={{color: "white"}}>
                Continue reading <i className="fas fa-arrow-right ms-1"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;