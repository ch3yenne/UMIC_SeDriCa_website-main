import { useRef, useEffect } from 'react';
import vid from "../../assets/vid.mp4";
import Card from "./Card";

function Content() {
  const videoRef = useRef(null);

  const togglePlayback = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  const startVideo = () => {
    if (videoRef.current && videoRef.current.paused) {
      videoRef.current.play().catch(error => {
        console.log('Video playback failed:', error);
      });
    }
  };

  useEffect(() => {
    const handleUserInteraction = () => {
      startVideo();
      window.removeEventListener('scroll', handleUserInteraction);
      window.removeEventListener('touchstart', handleUserInteraction);
    };

    window.addEventListener('scroll', handleUserInteraction);
    window.addEventListener('touchstart', handleUserInteraction);

    return () => {
      window.removeEventListener('scroll', handleUserInteraction);
      window.removeEventListener('touchstart', handleUserInteraction);
    };
  }, []);

  return (
    <>
      <div className="row featurette m-5 align-items-center">
        {/* Text Section */}
        <div className="col-md-7">
          {/* Fixed fw-bols to fw-bold */}
          <h2 className="featurette-heading fw-bold lh-1 ms-0 mb-3">
            UMIC
          </h2>
          {/* Replaced invalid fs-0 with fs-5 for clean, standard typography */}
          <p className="fs-6 text-secondary mb-3">
            Unmesh Mashruwala Innovation Cell, also widely known as UMIC, is a tech team formed to embrace and develop the idea of an autonomous future. The team consists of 60+ students from various fields and years of study at IIT Bombay. Under the sheds of the UMIC, the primary area of focus is developing autonomous vehicles.
          </p>
        </div>

        {/* Video Section */}
        <div className="col-md-5 d-flex align-items-center">
          <video
            ref={videoRef}
            className="w-100 rounded-4 shadow-lg" /* Added subtle rounding and shadow */
            style={{
              height: "auto",
              maxHeight: "100%",
            }}
            autoPlay
            loop
            onClick={togglePlayback} 
          >
            <source src={vid} type="video/mp4" />
          </video>
        </div>
      </div>

      <Card />
    </>
  );
}

export default Content;