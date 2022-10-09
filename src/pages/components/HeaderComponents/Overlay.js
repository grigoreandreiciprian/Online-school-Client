import React from "react";

import UpperHeader from "./UpperHeader";

import Intro from "./Intro";

import HeaderCards from "./headerCards";

const Overlay = () => {
  return (
    <section className="overlay">
      <UpperHeader />
      <Intro />
      <HeaderCards />
    </section>
  );
};

export default Overlay;
