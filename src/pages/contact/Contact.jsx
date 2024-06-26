import Header from "../../components/Header";
import HeaderImage from "../../images/banner1.jpg";
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <Header title="Get in Touch" image={HeaderImage}>
        Need assistance? Contact us. We'll respond
        promptly.
      </Header>
      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a
              href="mailto:meetkamal256@gmail.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <MdEmail />
            </a>
            <a href="#" target="_blank" rel="noreferrer noopener">
              <BsMessenger />
            </a>
            <a href="#" target="_blank" rel="noreferrer noopener">
              <IoLogoWhatsapp />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
