import { Link } from "react-router-dom";
import Image from "../images/main_header.png";

const MainHeader = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>#100DaysOfWorkOut</h4>
          <h1>JOin the Legends Of The Fitness World</h1>
          <p>
            Start your fitness journey with #100DaysOfWorkOut! Join our
            community and access personalized workout plans designed for all
            fitness levels. Achieve your goals with expert guidance and become a
            legend in the fitness world.
          </p>

          <Link to="/plans" className="btn lg">
            Get Started
          </Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={Image} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
