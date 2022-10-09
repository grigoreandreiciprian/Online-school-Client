import React from "react";

import BenefitsLeft from "./BenefitsLeft";
import BenefitsRight from "./BenefitsRight";

const BenefitsMain = () => {
  return (
    <section className="benefits">
      <BenefitsLeft />
      <BenefitsRight />
    </section>
  );
};

export default BenefitsMain;
