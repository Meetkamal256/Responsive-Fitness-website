import Header from "../../components/Header";
import "./about.css";
import HeaderImage from "../../images/header_bg_1.jpg";
import StoryImage from "../../images/about1.jpg";
import VisionImage from "../../images/about2.jpg";
import MissionImage from "../../images/about3.jpg";

const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Welcome to FitHub, where fitness meets community. Our mission is to
        empower individuals to achieve their fitness goals in a supportive and
        motivating environment.
      </Header>

      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="our story image" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              FitHub's story began with a vision to revolutionize the fitness
              industry. Driven by passion and commitment, we embarked on a
              journey to create a welcoming space where individuals could
              transform their lives through fitness.
            </p>
            <p>
              Since our inception, FitHub has grown into a vibrant community of
              like-minded individuals striving for excellence in health and
              wellness. Our diverse range of programs and expert trainers ensure
              that there's something for everyone, regardless of age, fitness
              level, or background.
            </p>
            <p>
              At FitHub, we believe in the power of community. Our members
              aren't just clients; they're part of a supportive network that
              encourages and uplifts each other to reach their full potential.
              Join us in our mission to make fitness accessible and enjoyable
              for all.
            </p>
          </div>
        </div>
      </section>

      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              FitHub's vision is to create a healthier, happier world, one
              person at a time. We believe that everyone deserves access to the
              tools and support they need to live their best life.
            </p>
            <p>
              At FitHub, we're committed to fostering a culture of inclusivity
              and empowerment. We strive to break down barriers and inspire
              individuals to embrace a lifestyle of wellness and vitality.
            </p>
            <p>
              Our aim is to redefine the fitness experience by providing
              personalized solutions and fostering genuine connections within
              our community. Together, we can make a positive impact on the
              lives of others and create lasting change.
            </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="our vision image" />
          </div>
        </div>
      </section>

      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="our mission image" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              FitHub's mission is to inspire and empower our members to achieve
              their fitness goals, no matter how big or small. We provide
              top-notch facilities, expert guidance, and a supportive community
              to help you on your journey.
            </p>
            <p>
              We're dedicated to creating an environment where individuals can
              thrive both physically and mentally. Our comprehensive approach to
              fitness encompasses personalized training, nutrition counseling,
              and ongoing support to ensure lasting results.
            </p>
            <p>
              Our commitment extends beyond the gym walls. We actively engage
              with our local community through outreach programs, charity
              events, and initiatives aimed at promoting health and wellness for
              all.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
