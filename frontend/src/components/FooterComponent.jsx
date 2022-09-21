import "../FooterComponent.css";
import Phone from "../../src/img/phone.png";
import Email from "../../src/img/email.png";
import Address from "../../src/img/address.png";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";

const FooterComponent = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_tsys7ug",
        "template_0qna65s",
        formRef.current,
        "B52UfSg2SNNqZ5J1e"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <footer>
      <div className="c">
        <div className="c-bg"></div>
        <div className="c-wrapper">
          <div className="c-left">
            <h1 className="c-title">Contact Me by Email</h1>
            <div className="c-info">
              <div className="c-info-item">
                <img src={Phone} alt="" className="c-icon" />
                +1 857-567-2770
              </div>
              <div className="c-info-item">
                <img className="c-icon" src={Email} alt="" />
                lihchang@seas.upenn.edu
              </div>
              <div className="c-info-item">
                <img className="c-icon" src={Address} alt="" />
                Arlington, MA
              </div>
            </div>
          </div>
          <div className="c-right">
            <p className="c-desc">
              <b>If Live Chat No Response?</b> Get in touch.
            </p>
            <form className="footerform" ref={formRef} onSubmit={handleSubmit}>
              <input
                className="footerInput"
                type="text"
                placeholder="Name"
                name="user_name"
              />
              <br />
              <input
                className="footerInput"
                type="text"
                placeholder="Subject"
                name="user_subject"
              />
              <br />
              <input
                className="footerInput"
                type="text"
                placeholder="Email"
                name="user_email"
              />
              <textarea
                className="footertextarea"
                rows="5"
                placeholder="Message"
                name="message"
              />
              <button className="footerbutton">Submit</button>
              {done && "Thank you..."}
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
