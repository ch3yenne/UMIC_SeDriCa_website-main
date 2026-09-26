import './Aboutus.css'

function Aboutus(){
    return(
        <div className="abtflex my-3">
            <div className="col-lg-8 p-5 pb-3 flex-center">
                {/* Added 'fw-bold' to make it bold */}
                <h1 className='title-h1 fw-bold'>About Us</h1>
                
                {/* Removed the inline 1.2rem size and added 'fs-6' */}
                <p className="fs-6">At SeDriCa, we are a team of 30+ like minded individuals dedicated on creating
                    a level 5 autonomous vehicle ringing innovation in the fields of automobiles 
                    and robotics in India. We work on cutting edge technology in the domain of 
                    Mechatronics, computer vision and localization, Motion Planning, Communication 
                    Systems and Controls, offering you the opportunity to be part of a memorable  
                    journey into the world of autonomous robotics. Joining SeDriCa means becoming 
                    part of an exciting journey into the future of autonomous robotics. We offer 
                    the opportunity to work on groundbreaking technologies, collaborate with 
                    leading experts, and contribute to the transformation of the transportation 
                    industry. Together, we are pushing the envelope in autonomous driving and 
                    creating a future where self-driving cars are not just a vision, but a reality.
                </p>
                </div>
                <a href='/Subsystems' style={{textDecoration:"None",color:"black"}}> <button className="square-btn">Subsystem Details</button></a>
        </div>
    )
}

export default Aboutus