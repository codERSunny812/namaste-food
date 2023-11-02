import food from "../Images/burger-image.jpg";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-left">
        <h1>
          Welcome to <br /> The world of <br /> <span>Namaste Food</span>
        </h1>
        <h4>
          "Say Namaste to Delicious Meals with <span>Namaste Food</span>"
        </h4>
      </div>
      <div className="about-right">
        <img src={food} alt="Food Image" />
      </div>
    </div>
  );
};

export default About;
