import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import contact from "../Images/Contact-Us.png";

const Contact = () => {
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceId = "service_ljwgc18";
    const templateId = "template_i0vlv1e";
    const userId = "NlTccOKLc594097u5";

    try {
      const response = await emailjs.sendForm(
        serviceId,
        templateId,
        e.target,
        userId
      );

      if (response.status === 200) {
        setMessage("Email sent successfully. We will reply ASAP.");
        setFormSubmitted(true);
      } else {
        setError("Email could not be sent. Please try again later.");
      }
    } catch (error) {
      setError(
        "An error occurred while sending the email. Please try again later."
      );
      console.error("Email sending error:", error);
    }
  };

  useEffect(() => {
    if (formSubmitted) {
      // Auto refresh the page after 5 seconds
      const refreshTimeout = setTimeout(() => {
        window.location.reload();
      }, 5000);

      // Clear the timeout if the component unmounts before the refresh
      return () => clearTimeout(refreshTimeout);
    }
  }, [formSubmitted]);

  return (
    <>
      <div className="contact-container">
        <div className="contact-left">
          <img id="contact-left" src={contact} alt="" />
        </div>
        <div className="contact-right">
          <h1>Contact us</h1>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <textarea
              name="message"
              placeholder="Type your Message here..."
              required
            ></textarea>
            <button type="submit">Submit</button>
            {message && <span className="success-message">{message}</span>}
            {error && <span className="error-message">{error}</span>}
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
