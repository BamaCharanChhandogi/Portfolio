import React from "react";
import './Education.css';
function Education() {
  return (
    <div className="education-section">
      <div className="education-heading">
        <h2>Education</h2>
      </div>
      <div class="edu-container">
        <div class="edu-box">
          <div class="edu-info">
            <h4>Bachelor of Engineering</h4>
            <p className="Info-heading">Chitkara University, Punjab (2022 - 2026)</p>
            <p className="info-details">
              I am pursuing my Bachelor's in Computer science and engineering
              from Chitkara University, Punjab.
            </p>
          </div>
        </div>
        <div class="edu-box">
          <div class="edu-info">
            <h4>12th Grade</h4>
            <p className="Info-heading">Moyna Vivekananda Vidyamandir, Moyna, WB (2020 - 2022)</p>
            <p className="info-details">
            I completed my 12th with 92.0%.
            </p>
          </div>
        </div>
        <div class="edu-box">
          <div class="edu-info">
            <h4>10th Grade</h4>
            <p className="Info-heading">Moyna Vivekananda Vidyamandir, Moyna, WB (2014 - 2020)</p>
            <p className="info-details">
            I completed my 10th with 80.4%.
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Education;
