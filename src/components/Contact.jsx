import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <div>
      <div id="contact">
        {/*   <h1>Contact Me </h1> */}
        <div className="contact-container">
          <div>
            <div id="contact-github"> <a href="https://github.com/ayush7863"><i class="fa-brands fa-github"></i></a></div>
            <div id="contact-linkedin">
              <a href="https://www.linkedin.com/in/ayush-kaushik-81418a250/"><i class="fa-brands fa-linkedin-in"></i></a>
            </div>
            <div><a href="mailto:aryansharma7863@gmail.com"><i class="fa-solid fa-envelope"></i></a></div>
          </div>
          <div>
            <div><i class="fa-solid fa-location-pin"></i><p>New Delhi,India</p></div>
            <div id="contact-email"><i class="fa-solid fa-envelope"></i><p>aryansharma7863@gmail.com</p></div>
            <div id="contact-phone"><i class="fa-solid fa-mobile"></i><p>+91-9311516884</p></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
