import React from "react";
import "./Experienced.css";

function Experienced() {
  return (
    <div class="experience-section">
        <div className="Exep-heading">
        <h3 class="">Experiance</h3>
        </div>
      <div class="exep-container">
        <div class="exep-box">
          <div class="">
            <h4>Web Dev</h4>
            <p class="exep-heading">CodingNinjas Cuiet (2023)</p>
            <p class="exep-bio">
              I am working as Web Dev Team Member for CodingNinjas Cuiet Students Chapter and
              responsible managing Web Development related events.
            </p>
          </div>
        </div>
        <div class="exep-box">
          <div class="">
            <h4>competitive Programmer</h4>
            <p class="exep-heading">Codechef Cuiet (2022 - 2023)</p>
            <p class="exep-bio">
              I am working as CP Executive Member for Codechef Cuiet Students Chapter and
              responsible managing tech related events.
            </p>
          </div>
        </div>
        <div class="exep-box">
          <div class="">
            <h4>Contributor</h4>
            <p class="exep-heading">The Algorithm (2022 - 2023)</p>
            <p class="exep-bio">
              I am working as Contributor for The Algorithm Organization.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experienced;
