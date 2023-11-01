// Footer component for footer section
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      Created By
      <i className="fa-solid fa-heart"></i>
      <a
        href="https://www.linkedin.com/in/g3vind/"
        target="_blank"
        title="Govind Kumar's Linkedin Profile"
      >
        Govind Kumar
      </a>
      <i className="fa-solid fa-copyright"></i>
      {year}
      <strong>
        Namaste <span>Food</span>
      </strong>
    </div>
  );
};

export default Footer;
