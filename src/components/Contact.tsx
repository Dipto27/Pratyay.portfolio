import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="https://www.linkedin.com/in/pratyay-mondal-ab48aa231/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — pratyay-mondal
              </a>
            </p>
            <p>
              <a
                href="mailto:diptofhar50@gmail.com"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                Email — diptofhar50@gmail.com
              </a>
            </p>
            <h4>Education</h4>
            <p>
              B.Tech in Computer Science, University of Engineering and Management — Aug 2021–Jul 2025
            </p>
            <p>
              Class XII, Nimta High School — Apr 2020–Jun 2021
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/Dipto27"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/pratyay-mondal/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Pratyay Mondal</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
