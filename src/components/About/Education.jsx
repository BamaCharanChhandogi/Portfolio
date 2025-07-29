import React from "react";
import './Education.css';
import { Calendar, MapPin, Award } from "lucide-react";
function Education() {
  const educationData = [
    {
      degree: "Bachelor of Engineering",
      institution: "Chitkara University, Punjab",
      duration: "2022 - 2026",
      description: "Pursuing Bachelor's in Computer Science and Engineering with focus on software development and data structures."
    },
    {
      degree: "12th Grade",
      institution: "Moyna Vivekananda Vidyamandir, Moyna, WB",
      duration: "2020 - 2022",
      description: "Completed higher secondary education with 92.0% aggregate score."
    },
    {
      degree: "10th Grade", 
      institution: "Moyna Vivekananda Vidyamandir, Moyna, WB",
      duration: "2014 - 2020",
      description: "Completed secondary education with 80.4% aggregate score."
    }
  ];

  return (
    <div className="section-container">
      <div className="section-header">
        <Award className="section-icon" size={24} />
        <h2 className="section-title">Education</h2>
      </div>
      <div className="timeline-container">
        {educationData.map((edu, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h4 className="timeline-title">{edu.degree}</h4>
              <div className="timeline-meta">
                <span className="timeline-institution">
                  <MapPin size={16} />
                  {edu.institution}
                </span>
                <span className="timeline-duration">
                  <Calendar size={16} />
                  {edu.duration}
                </span>
              </div>
              <p className="timeline-description">{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
