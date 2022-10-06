import React from "react";
import Icon from "@myBlocks/Icon";
import Button from "@myBlocks/button/Button";
import * as styles from "@myBlocks/button/Button.module.sass";
import Section from "@sections/Section";
import download from "bootstrap-icons/icons/file-earmark-arrow-down.svg";

// import * as styles from "./Footer.module.sass";

const socialIcons = [
  {
    name: "github",
    link: function () {
      return generateLink(this.name, "markom01");
    },
  },
  {
    name: "linkedin",
    link: function () {
      return generateLink(this.name, "in/marecardesigner");
    },
  },
  {
    name: "twitter",
    link: function () {
      return generateLink(this.name, "marko_m_01");
    },
  },
];

const capitalize = (word: string) =>
  `${word.charAt(0).toUpperCase()}${word.slice(1)}`;

const generateLink = (network: string, username: string) =>
  `https://${network}.com/${username}`;

export default function Footer() {
  return (
    <Section id="connect" className="mb-5">
      <footer className="p-5">
        <div className="row g-5 justify-content-center">
          {socialIcons.map((icon) => (
            <div
              data-tooltip={capitalize(icon.name)}
              className="col-auto"
              key={icon.name}
            >
              <a
                target="_blank"
                href={icon.link()}
                style={{ color: "var(--icons-color)" }}
              >
                <Icon name={icon.name} />
              </a>
            </div>
          ))}
          <div className="col-12">
            <a
              className={`button position-relative d-inline-block px-3 py-2 text-decoration-none text-uppercase
         ${styles.secondary}`}
              href="CV_Marko-Meseldžija.pdf"
              target="_blank"
            >
              <img src={download} alt="" className="me-1 icon" />
              {/* <Icon name="file-earmark-arrow-down" className="me-1" /> */}
              CV
            </a>
          </div>
        </div>
      </footer>
    </Section>
  );
}
