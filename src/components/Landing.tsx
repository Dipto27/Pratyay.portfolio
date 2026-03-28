import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              PRATYAY
              <br />
              <span>MONDAL</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>Software Developer &</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">SRE</div>
              <div className="landing-h2-2">Apprentice</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Apprentice</div>
              <div className="landing-h2-info-1">SRE</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
