
import "./contact-style.css";
import Image from "next/image";

const contact = () => {
  return (

    <div className="contact new-block-page">
      <h2 className="titlePage" id="contact">Pour me contacter</h2>

      <div className="blockContact">


        <div className="projet">
          <a href="https://www.linkedin.com/in/louis-verbrugge-744a48293/">
            <Image
              src="/image/contact/linkedin-icon.svg"
              alt="inkedin.png"
              width={150}
              height={150}
            />
          </a>
          <p>Louis Verbrugge</p>
        </div>

        <div className="projet">
          <a href="mailto:louvbg@gmail.com">
            <Image
              src="/image/contact/mail.svg"
              alt="inkedin.png"
              width={150}
              height={150}
            />
          </a>
          <p>louvbg@gmail.com</p>
        </div>

        <div className="projet">
          <a href="tel:0782707193">
            <Image
              src="/image/contact/telephone.svg"
              alt="inkedin.png"
              width={150}
              height={150}
            />
          </a>
          <p>07 82 70 71 93</p>
        </div>
      </div>
    </div>
  );
};

export default contact;