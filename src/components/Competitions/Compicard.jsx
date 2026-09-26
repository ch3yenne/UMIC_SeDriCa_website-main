import "./Compicard.css";
import asme from "../../assets/asme.jpg"
import auto from "../../assets/auto.jpeg"
import rise from "../../assets/rise.png"
import flip from "../../assets/flip.jpg"
import fira from "../../assets/c2.jpg"
import f1 from "../../assets/f1.jpg"

function Compi() {
  return (
    <>
      <div className="position-relative m-3">
        <div className="mb-4 rounded text-body-emphasis bg-body-secondary overflow-hidden shadow-sm">
          <div className="row g-0 compi-row">
            {/* Changed from col-md-6 to col-md-8 to give text more room */}
            <div className="col-md-8 py-4 px-5 d-flex flex-column justify-content-top">
              <h1 className="display-4 fw-bold">F1TENTH</h1>
              <p className="fs-6 my-3">
                F1/10 F1TENTH Autonomous Racing is a semi-regular competition organized by an international community of researchers, engineers, and autonomous systems enthusiasts. From December 16th to 19th 2024, we had the honor of representing India at the prestigious F1TENTH Competition in Milan, Italy. Sharing the stage with leading teams such as ForzaETH from ETH Zurich and EPFL’s research group led by Prof. Karimi, the event provided an excellent opportunity to demonstrate our expertise in autonomous vehicle technology. 
              </p>
              <h4 className="fs-6 fw-bold mt-auto">Courtesy: Rahul Mangharam</h4> 
            </div>
            {/* Changed from col-md-6 to col-md-4 to make the image narrower */}
            <div className="col-md-4 card-right">
                <img src={f1} alt="Competition" />
            </div>
          </div>
        </div>
      </div>

      <div className="position-relative m-3">
        <div className="mb-4 rounded text-body-emphasis bg-body-secondary overflow-hidden shadow-sm">
          <div className="row g-0 compi-row">
            <div className="col-md-8 py-4 px-5 d-flex flex-column justify-content-top">
              <h1 className="display-4 fw-bold">FIRA RoboWorld Cup</h1>
              <p className="fs-6 my-3">
                The Federation of International Robot Sports Association (FIRA) – founded by Prof. Jong-Hwan Kim, KAIST, Korea in 1996 – is the oldest robot soccer competition in the world. 
                The vision of FIRA is to take the spirit of robotic science and technology, mechatronics and artificial intelligence to the younger generation, by identifying, expanding and directing potential and talented people in robotics and artificial intelligence, and by emphasizing on meeting the important and practical needs in the community and the problems that exist in member countries with the use of their creative and elite network in this domain and the development of a technology-based economy by 2050.
              </p>            
            </div>
            <div className="col-md-4 card-right">
                <img src={fira} alt="Competition" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="position-relative m-3">
        <div className="mb-4 rounded text-body-emphasis bg-body-secondary overflow-hidden shadow-sm">
          <div className="row g-0 compi-row">
            <div className="col-md-8 py-4 px-5 d-flex flex-column justify-content-top">
              <h1 className="display-4 fw-bold">Student Design Challenge</h1>
              <p className="fs-6 my-3">
                The American Society of Mechanical Engineers. Each team is expected to ideate, design, construct, and operate a prototype that provides solutions to all the intricate problem statements stated. We were declared as the first runner-up in the World Finals in 2012 and 2013, then in 2017 the team was crowned as the champions in the Asia-Pacific region as well as the World Champions. In 2019 also the team was crowned as the Asia-Pacific Champions. 4th Globally at ASME 2021.
              </p>
            </div>
            <div className="col-md-4 card-right">
                <img src={asme} alt="Competition" />
            </div>
          </div>
        </div>
      </div>

      <div className="position-relative m-3">
        <div className="mb-4 rounded text-body-emphasis bg-body-secondary overflow-hidden shadow-sm">
          <div className="row g-0 compi-row">
            <div className="col-md-8 py-4 px-5 d-flex flex-column justify-content-top">
              <h1 className="display-4 fw-bold">IGVC Auto Nav</h1>
              <p className="fs-6 my-3">
                The Intelligent Ground Vehicle Competition (Auto-Nav Challenge) competition requires student teams to design, fabricate, and program an autonomous unmanned ground robotic vehicle. The robot must negotiate around an outdoor obstacle course under a prescribed time while maintaining a minimum speed of one mph over a section and a maximum speed of five mph.
                We finished 4th worldwide at IGVC Auto-Nav 2016. In 2017, "SeDriCa" participated in all three events and secured first place in the Autonomous Navigation Challenge and second place in the Design Challenge as well as in the Interoperability Profiles Challenge.
              </p>
            </div>
            <div className="col-md-4 card-right">
                <img src={auto} alt="Competition" />
            </div>
          </div>
        </div>
      </div>

      <div className="position-relative m-3">
        <div className="mb-4 rounded text-body-emphasis bg-body-secondary overflow-hidden shadow-sm">
          <div className="row g-0 compi-row">
            <div className="col-md-8 py-4 px-5 d-flex flex-column justify-content-top">
              <h1 className="display-4 fw-bold">Mahindra Rise Challenge</h1>
              <p className="fs-6 my-3">
                The MRC is a platform for students to demonstrate their creativity, innovation, and strategic thinking. The competition aims to identify the best and brightest minds to help Mahindra Group businesses scale up and grow.
                The challenge consists of 5 stages , basically the task is to autonomously maneuver Mahindra’s electric car, Mahindra E2O, on Indian roads.  
              </p>
            </div>
            <div className="col-md-4 card-right">
                <img src={rise} alt="Competition" />
            </div>
          </div>
        </div>
      </div>

      <div className="position-relative m-3">
        <div className="mb-4 rounded text-body-emphasis bg-body-secondary overflow-hidden shadow-sm">
          <div className="row g-0 compi-row">
            <div className="col-md-8 py-4 px-5 d-flex flex-column justify-content-top">
              <h1 className="display-4 fw-bold">Flipkart Grid Robotics Challenge</h1>
              <p className="fs-6 my-3">
                GRiD is Flipkart’s Flagship Engineering Campus Challenge which provides you with the opportunity to apply your technical knowledge and skills, to compete and complete key challenges.
                The Robotics Track will have 2 elimination rounds to test you on your technical, analytical, and ideation skills before the Grand Finale where the finalists will get to present their solutions to the panel of domain experts at Flipkart.
              </p>
            </div>
            <div className="col-md-4 card-right">
                <img src={flip} alt="Competition" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Compi;