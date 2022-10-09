import React from "react";

import FooterLogo from "./FooterComponents/FooterLogo";

import FooterNav from "./FooterComponents/FooterNav";

import FooterPosts from "./FooterComponents/FooterPosts";

import FooterQuestions from "./FooterComponents/FooterQuestions";

const Footer = () => {
  return (
    <footer>
      <section className="footerContainer">
        <FooterLogo />
        <FooterNav />
        <FooterPosts />
        <FooterQuestions />
      </section>
    </footer>
  );
};

export default Footer;
