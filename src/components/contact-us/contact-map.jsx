import React from "react";

const ContactMap = () => {
  return (
    <div className="google-map-area">
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.2074171122717!2d106.74111557451747!3d10.795420058844178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175260daed1e4e9%3A0xe86655124da93146!2zNTAgQ2FvIMSQ4bupYyBMw6JuLCBQLiBQaMO6IFRodeG6rW4sIFRQLiBUaOG7pyDEkOG7qWMsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1712730942210!5m2!1sen!2s"
            width="100%"
            height="500"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactMap;
