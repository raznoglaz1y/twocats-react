import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Brand system development.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Design system development.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Content strategy building.</p>
            </li>
            <li>
              {" "}
              <BiCheck className="service__list-icon" />
              <p>Wireframing and Prototyping.</p>
            </li>
            <li>
              {" "}
              <BiCheck className="service__list-icon" />
              <p>Mobile and Web UI Design.</p>
            </li>
            <li>
              {" "}
              <BiCheck className="service__list-icon" />
              <p>UX/UI Consulting services.</p>
            </li>
          </ul>
        </article>
        {/* END OF UX */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              {" "}
              <BiCheck className="service__list-icon" />
              <p>Web Page / Web Site design and development.</p>
            </li>
            <li>
              {" "}
              <BiCheck className="service__list-icon" />
              <p>Landing Page design and development.</p>
            </li>
            <li>
              {" "}
              <BiCheck className="service__list-icon" />
              <p>Application design and development.</p>
            </li>
            <li>
              {" "}
              <BiCheck className="service__list-icon" />
              <p>Social media banners and banner ads.</p>
            </li>
            <li>
              {" "}
              <BiCheck className="service__list-icon" />
              <p>Email templates design and development.</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              {" "}
              <BiCheck className="service__list-icon" />
              <p>Print and web materials design and creation.</p>
            </li>
            <li>
              {" "}
              <BiCheck className="service__list-icon" />
              <p>Tradeshow materials and merchandise materials.</p>
            </li>
            <li>
              {" "}
              <BiCheck className="service__list-icon" />
              <p>Logo & Branding design and creating.</p>
            </li>
            <li>
              {" "}
              <BiCheck className="service__list-icon" />
              <p>Outdoor & Signage design and creating.</p>
            </li>
            <li>
              {" "}
              <BiCheck className="service__list-icon" />
              <p>PowerPoint and Word templates design.</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  );
};

export default Services;
