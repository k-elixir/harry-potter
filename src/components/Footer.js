import React from "react";

export default function Footer() {
  return (
    <div>
      <footer
        className="text-center pb-5 pt-3"
        style={{ backgroundColor: "grey" }}
      >
        <div className="mt-5 mb-5">
          <a
            href="mailto:kimia.rfp@gmail.com"
            target="_blank"
            className="p-4 fs-1"
            title="E-mail"
          >
            <i className="fa-sharp fa-solid fa-envelope"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/KimiaRafi/"
            target="_blank"
            className="p-4 fs-1"
            title="Linkedin"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://www.slack.com"
            target="_blank"
            className="p-4 fs-1"
            title="Slack"
          >
            <i className="fa-brands fa-slack"></i>
          </a>
          <a
            href="https://www.skype.com"
            target="_blank"
            className="p-4 fs-1"
            title="Skype"
          >
            <i className="fa-brands fa-skype"></i>
          </a>
        </div>
        <a
          href="https://github.com/k-elixir/harry-potter"
          target="_blank"
          className="text-decoration-none"
        >
          Open-sourse code by Kimia Rafi
        </a>
      </footer>
    </div>
  );
}
