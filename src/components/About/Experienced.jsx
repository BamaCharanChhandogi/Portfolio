import React from "react";
import "./Experienced.css";
import { Calendar, MapPin, Award, Briefcase } from "lucide-react";
function Experience() {
  const experienceData = [
    {
      position: "Software Developer Associate",
      company: "Ikarus 3d",
      duration: "Jul 2025 - present",
      description: "Developed responsive web applications using React.js and collaborated with cross-functional teams to deliver high-quality user interfaces."
    },
    {
      position: "Web Dev Team Member",
      company: "CodingNinjas CUIET",
      duration: "2023 - Present",
      description: "Managing Web Development related events and mentoring junior developers in modern web technologies."
    },
    {
      position: "Competitive Programming Executive",
      company: "CodeChef CUIET",
      duration: "2022 - 2023",
      description: "Organized competitive programming contests and managed tech-related events for the student community."
    },
    {
      position: "Open Source Contributor",
      company: "The Algorithm Organization",
      duration: "2022 - 2023",
      description: "Contributed to open-source algorithm implementations and collaborated with developers worldwide."
    }
  ];

  return (
    <div className="section-container">
      <div className="section-header">
        <Briefcase className="section-icon" size={24} />
        <h2 className="section-title">Experience</h2>
      </div>
      <div className="timeline-container">
        {experienceData.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h4 className="timeline-title">{exp.position}</h4>
              <div className="timeline-meta">
                <span className="timeline-institution">
                  <MapPin size={16} />
                  {exp.company}
                </span>
                <span className="timeline-duration">
                  <Calendar size={16} />
                  {exp.duration}
                </span>
              </div>
              <p className="timeline-description">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Experience;
