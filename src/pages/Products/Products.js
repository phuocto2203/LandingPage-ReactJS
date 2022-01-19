import React from "react";
import { homeObjTwo, homeObjThree, homeObjFour } from "./Data";
import { InfoSection } from "../../components";
import { Pricing } from "../../components";
const Products = () => {
  return (
    <>
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <Pricing />

      <InfoSection {...homeObjFour} />
    </>
  );
};

export default Products;
