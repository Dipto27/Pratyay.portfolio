import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer / Developer</h4>
                <h5>American Express</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Developed Sentinel Overview, an internal production-ready dashboard for centralized alert visibility, monitoring, and resolution. Built an interface that enables users to view, analyze, and edit internal alerts while tracking the complete alert scenario and current status in one place. Integrated the application with ITSM data sources, allowing backend services to process internal alert data and deliver it efficiently to the frontend. Designed and implemented the frontend-backend data flow to ensure accurate rendering and seamless display of alert-related information. Improved internal operational efficiency by consolidating alert lifecycle details, monitoring insights, and current statuses into a unified dashboard. Delivered a solution that enhanced incident monitoring, alert management, operational visibility, and faster issue resolution for internal teams.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>SRE Apprentice</h4>
                <h5>American Express</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Enterprise Technology Services. Managing production systems with focus on
              monitoring and real-time incident management. Collaborating with Site Reliability
              Engineers on operational and reliability engineering tasks to maintain system reliability.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Front-end Web Development Intern</h4>
                <h5>IBM SkillsBuild </h5>
              </div>
              <h3>Jun–Aug 2024</h3>
            </div>
            <p>
              Built a weather application using HTML, CSS, JavaScript, and real-time API integration.
              Developed responsive personal portfolio showcasing academic projects and technical skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
