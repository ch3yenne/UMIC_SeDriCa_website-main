import MyCard from "./CardTwist";

import oc from '../../assets/people/oc.jpeg';
import lead1 from '../../assets/people/avishkar.jpeg';
import lead2 from '../../assets/people/lead2_new.jpg';
import hoo from '../../assets/people/hoo_new.jpg';

import m1 from '../../assets/people/manager_1.png'
import m2 from '../../assets/people/manager_2_new.jpg'
import m3 from '../../assets/people/manager_3_new.jpg'

import sub1 from '../../assets/people/shivamjr.jpeg';
import sub2 from '../../assets/people/percep_subsys_head_2_new.png';
import sub3 from '../../assets/people/punit.jpeg';
import sub4 from '../../assets/people/control_subsy_head_new.JPG';
import sub5 from '../../assets/people/ayush.png';
// import sub6 from '../../assets/people/motion_planning_subsys_head2.jpg';

import sph1 from '../../assets/people/neha.jpeg';
import sph2 from '../../assets/people/c1c1.jpeg';
import sph3 from '../../assets/people/shrot.jpg';
import sph4 from '../../assets/people/saraah.jpg';
import sph5 from '../../assets/people/shay.jpg';
import sph6 from '../../assets/people/walvekar.jpeg';
import sph7 from '../../assets/people/aithal.jpg';
import sph8 from '../../assets/people/vivian.jpeg';

import b1 from '../../assets/people/b_1.jpg';
import b2 from '../../assets/people/b_2_new.jpg';
import b3 from '../../assets/people/b_3_new.jpg';
import b4 from '../../assets/people/b_4_new.jpg';
import b5 from '../../assets/people/b_5.jpg';
import b6 from '../../assets/people/b_6_new.jpg';
import b7 from '../../assets/people/b_7.jpg'



import './SedricaTeam.css';

function SedricaCard() {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .card-wrapper{
              padding:10px;
              padding-bottom: 5px;
              text-align:center;
              width:210px;
              height: auto;
              background-color: #7ebeff;
              display:flex;
              align-items: center;
              justify-content: start;
              flex-direction: column;
              border-radius: 5%;
              .card-p{
                margin: 0;
              }
            }
            .position {
                font-weight: 600;
                text-align: center;
                margin-top: 10px;
            }
            .fw-normal {
                font-weight: 500;
                font-size: 1.6rem;
            }
            .two-container {
                width: 100%;
                display: flex;
                flex-direction: row;
                justify-content: center;
                gap: 2rem; /* Horizontal gap between cards */
                // margin-bottom: 0.1rem; /* Vertical spacing between rows */
            }
            .four-container {
                width: 100%;
                display: flex;
                flex-direction: row;
                justify-content: center;
                gap: 1rem; /* Horizontal gap between cards */
                // margin-bottom: 0.1rem; /* Vertical spacing between rows */
            }
            .center-container {
                padding-top: 20px;
                padding-bottom: 20px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                margin-bottom: 2rem; /* Vertical spacing between sections */
            }
            .pgraph {
                font-family: 'Roboto';
                width: 100%;
                max-width: 300px;
                text-align: center;
            }

            .card-content {
                display: flex;
                flex-direction: column;
                align-items: center;
                text-align: center;
                width: 100%;
                max-width: 300px;
                margin: 1rem;
            }

            h1.position {
                margin-top: 20px;
                margin-bottom: 1rem;
            }
            @media screen and (max-width: 768px) {
                .container {
                    flex-direction: column;
                    align-items: center;
                }
            }
            
          `,
        }}
      />
      {/* OCs */}
      <div className="center-container">
        <h1 className="position">Overall Coordinator</h1>
          <MyCard img={oc} lnk_mail={'deveshrawat674@gmail.com'} lnk={'https://www.linkedin.com/in/devesh-rawat-23b9192ab'} />
          <h2 className="fw-normal">Devesh Rawat</h2>
      </div>

      {/* Team Leads */}
      <h1 className="position">Team Leads</h1>
      <div className="two-container row">
        <div className="card-content col-lg-6">
        
          <MyCard lnk_mail={'avishkarbahirwar@gmail.com'} lnk={'https://www.linkedin.com/in/avishkar-bahirwar/'} img={lead1} />
          <h2 className="fw-normal">Avishkar Bahirwar</h2>
        
        </div>
        <div className="card-content col-lg-6">
        
          <MyCard lnk_mail={'aryan.9232122@gmail.com'} lnk={'https://www.linkedin.com/in/aryan-mishra-839272226?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'} img={lead2} />
          <h2 className="fw-normal">Shivam Singh Yadav</h2>
        
        </div>
      </div>

      {/* Head of Operations */}
      {/* <div className="center-container">
        <h1 className="position">Head of Operations</h1>
        <MyCard lnk_mail={'areebasgar02@gmail.com'} lnk={'https://www.linkedin.com/in/areeb-asgar-9517b9237'} img={hoo} />
        <h2 className="fw-normal">Areeb Asgar</h2>
      </div> */}

  {/* Managers */}
  {/* <h1 className="position">Managers</h1>
      <div className="two-container row">
        <div className="card-content col-lg-4">
          <MyCard lnk_mail={'Kshaunish555@gmail.com'} lnk={'https://www.linkedin.com/in/kshaunish-chandalia/'} img={m1} />
          <h2 className="fw-normal">Kshaunish Chandalia</h2>
        </div>
        
        <div className="card-content col-lg-4">
            <MyCard lnk_mail={'msdjain2000@gmail.com'} lnk={'https://www.linkedin.com/in/manav-jain-b593b6251/'} img={m3} />
            <h2 className="fw-normal">Manav Sanjay Jain</h2>  
        </div>

        <div className="card-content col-lg-4">
          <MyCard lnk_mail={'parthagrawal132004@gmail.com'} lnk={'https://www.linkedin.com/in/parth-agrawal-6a687a232?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'} img={m2} />
          <h2 className="fw-normal">Parth Agrawal</h2>
        </div>
      </div> */}



      {/* Subsystem Heads */}
      <h1 className="position">Senior Engineers</h1>
      <div className="two-container row">
        <div className="card-content col-lg-4">
          <MyCard lnk_mail={'sonishivam@iitb.ac.in'} lnk={'https://www.linkedin.com/in/shivamsoniiitb/'} img={sub1} />
          <h2 className="fw-normal">Shivam Soni</h2>
          {/* <p className="card-p">Perception Subsystem Head</p> */}
        </div>
        <div className="card-content col-lg-4">
          <MyCard lnk_mail={'24b2475@iitb.ac.in'} lnk={'https://www.linkedin.com/in/ayush-sharma-516026324/'} img={sub5} />
          <h2 className="fw-normal">Ayush Sharma</h2>
          {/* <p className="card-p">Communication Subsystem Head</p> */}
        </div>
        <div className="card-content col-lg-4">
          <MyCard lnk_mail={'punitranawat.iitb@gmail.com'} lnk={'https://www.linkedin.com/in/punit-ranawat-aa25792a0/'} img={sub3} />
          <h2 className="fw-normal">Punit Ranawat</h2>
          {/* <p className="card-p">Mechatronics Subsystem Head</p> */}
        </div>
      </div>
      <div className="two-container row">
        <div className="card-content col-lg-4">
          <MyCard lnk_mail={'24b2188@iitb.ac.in'} lnk={'https://www.linkedin.com/in/rishabh-srivastava-55921636b/'} img={sub5} />
          <h2 className="fw-normal">Rishabh Srivastava</h2>
          {/* <p className="card-p">Motion Planning Subsystem Head</p> */}
        </div>
        <div className="card-content col-lg-4">
          <MyCard lnk_mail={'24b4515@iitb.ac.in'} lnk={'https://www.linkedin.com/in/parav-solanki-030566320/'} img={sub2} />
          <h2 className="fw-normal">Parav Solanki</h2>
          {/* <p className="card-p">Perception Subsystem Head</p> */}
        </div>
        <div className="card-content col-lg-4">
          <MyCard lnk_mail={'24b2259@iitb.ac.in'} lnk={'https://www.linkedin.com/in/vatsh-van-iit-bombay/'} img={sub4} />
          <h2 className="fw-normal">Vatsh Van</h2>
          {/* <p className="card-p">Controls Subsystem Head</p> */}
        </div>      
      </div>

      {/* Sophies */}
      <h1 className="position">Junior Engineers</h1>
      <div className="two-container row">
      <div className="card-content col-lg-4">
          <MyCard lnk_mail={'saanviwalvekar2@gmail.com'} lnk={'https://www.linkedin.com/in/saanvi-walvekar-262891379?'} img={sph6} />
          <h2 className="fw-normal">Saanvi Walvekar</h2>
          {/* <p className="card-p">Controls</p> */}
        </div>
        <div className="card-content col-lg-4">
          <MyCard lnk_mail={'vivaanoff@gmail.com'} lnk={'https://www.linkedin.com/in/vivaan-singhania-a12a74409?'} img={sph2} />
          <h2 className="fw-normal">Vivaan Singhania</h2>
          {/* <p className="card-p">Mechatronics</p> */}
        </div>
        <div className="card-content col-lg-4">
          <MyCard lnk_mail={'shayantheleaderakastl@gmail.com'} lnk={'https://www.linkedin.com/in/ahmad-shayan-629957369'} img={sph5} />
          <h2 className="fw-normal">Ahmad Shayan</h2>
          {/* <p className="card-p">Mechatronics</p> */}
        </div>
      </div>
      <div className="two-container row">
        <div className="card-content col-lg-4">
          <MyCard lnk_mail={'nehakharkar.iitb@gmail.com'} lnk={'www.linkedin.com/in/neha-kharkar'} img={sph1} />
          <h2 className="fw-normal">Neha Kharkar</h2>
          {/* <p className="card-p">Perception</p> */}
        </div>
        <div className="card-content col-lg-4">
            <MyCard lnk_mail={'shrotvj25@gmail.com'} lnk={'https://www.linkedin.com/in/shrot-vijayvergiya'} img={sph3} />
            <h2 className="fw-normal">Shrot Vijayvergiya</h2>
            {/* <p className="card-p">Motion Planning</p> */}
        </div>
        <div className="card-content col-lg-4">
          <MyCard lnk_mail={'snawankar@gmail.com'} lnk={'https://www.linkedin.com/in/sarah-nawankar-158baa36b?'} img={sph4} />
          <h2 className="fw-normal">Saraah Nawankar</h2>
          {/* <p className="card-p">Perception</p> */}
        </div>
        <div className="card-content col-lg-4">
          <MyCard lnk_mail={'25b4534@iitb.ac.in'} lnk={'https://in.linkedin.com/in/sanvi-aithal-3663303a3'} img={sph7} />
          <h2 className="fw-normal">Sanvi Aithal</h2>
          {/* <p className="card-p">Perception</p> */}
        </div>
        <div className="card-content col-lg-4">
          <MyCard lnk_mail={'25b2219iitb.ac.in'} lnk={'https://www.linkedin.com/in/ayan-chail-9a94b4380/'} img={sph8} />
          <h2 className="fw-normal">Ayan Chail</h2>
          {/* <p className="card-p">Perception</p> */}
        </div>
      </div>
        


        {/* BTeam */}
      {/* <h1 className="position">Business Team</h1>
      <div className="four-container row">
        <div className="card-content col-lg-4">
          <MyCard lnk_mail={'atharvroday396@gmail.com'} lnk={'https://www.linkedin.com/in/atharv-roday-a4b0a9293/'} img={b6} />
          <h2 className="fw-normal">Atharv Roday</h2>
          <p className="card-p">Web Developer</p>
        </div>
        <div className="card-content col-lg-4">
          <MyCard lnk_mail={'pratyakshb349@gmail.com'} lnk={'https://www.linkedin.com/in/pratyaksh-bhardwaj-b2309ar?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'} img={b5} />
          <h2 className="fw-normal">Pratyaksh Bhardwaj</h2>
          <p className="card-p">Web Developer</p>
        </div>
        <div className="card-content col-lg-4">
          <MyCard lnk_mail={'renudhruvas@gmail.com'} lnk={'https://in.linkedin.com/in/renudhruva-s-5b5032269'} img={b1} />
          <h2 className="fw-normal">Renudhruva</h2>
          <p className="card-p">Media and PR</p>
        </div>
        <div className="card-content col-lg-4">
          <MyCard lnk_mail={'prajwaltalwalkar2209@gmail.com'} lnk={'https://www.linkedin.com/in/prajwal-talwalkar?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'} img={b2} />
          <h2 className="fw-normal">Prajwal Talwalkar</h2>
          <p className="card-p">Media and PR</p>
        </div>
      </div>
      <div className="four-container row">
        <div className="card-content col-lg-4">
          <MyCard lnk_mail={'dikshit131105@gmail.com'} lnk={'https://www.linkedin.com/in/dikshit-singla-b1538427a/'} img={b7} />
          <h2 className="fw-normal">Dikshit Singla</h2>
          <p className="card-p">Marketing</p>
        </div>
        <div className="card-content col-lg-4">
          <MyCard lnk_mail={'23b3920@iitb.ac.in'} lnk={'https://www.linkedin.com/in/khushi-chandak-5b1038297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'} img={b4} />
          <h2 className="fw-normal">Khushi Chandak</h2>
          <p className="card-p">Creatives</p>
        </div>        
        <div className="card-content col-lg-4">
          <MyCard lnk_mail={'23b2225@iitb.ac.in'} lnk={'https://www.linkedin.com/in/mishkat-fatma-266174291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'} img={b3} />
          <h2 className="fw-normal">Mishkat Fatma</h2>
          <p className="card-p">Marketing</p>
        </div>
      </div> */}


    </>
  );
}

export default SedricaCard;