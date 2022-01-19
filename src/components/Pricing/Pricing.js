import React from "react";
import { Button } from "../../globalStyles";
import { GiStoneBlock, GiCutDiamond } from "react-icons/gi";
import {AiFillGold} from "react-icons/ai";


import {
  PricingSection,
  PricingTitle,
  PricingWrapper,
  PricingCardWrapper,
  PricingCardContainer,
  PricingCard,
  CardLogo,
  CardTitle,
  CardPrice,
  CardSubTitle,
  CardDesc,
  CardButton
} from "./Pricing.elements";
const Pricing = () => {
  return (
    <>
      <PricingSection>
      <PricingWrapper>
        <PricingTitle>Our Services</PricingTitle>
        <PricingCardWrapper>
          <PricingCardContainer>
            <PricingCard>
              <CardLogo>
                <GiStoneBlock />
              </CardLogo>
              <CardTitle>Starter Pack</CardTitle>
              <CardPrice>$99.99</CardPrice>
              <CardSubTitle>per month</CardSubTitle>
              <CardDesc>
                100 New User <br />
                $10,000 Budget <br />
                Retargeting Analytics
              </CardDesc>
              <CardButton>
                <Button>Choose Plan</Button>
              </CardButton>
            </PricingCard>
            <PricingCard>
              <CardLogo>
                <AiFillGold/>
              </CardLogo>
              <CardTitle>Gold Rush</CardTitle>
              <CardPrice>$299.99</CardPrice>
              <CardSubTitle>per month</CardSubTitle>
              <CardDesc>
                1000 New User <br />
                $50,000 Budget <br />
                Lead Gen Analytics
              </CardDesc>
              <CardButton>
                <Button>Choose Plan</Button>
              </CardButton>
            </PricingCard>
            <PricingCard>
              <CardLogo>
                <GiCutDiamond />
              </CardLogo>
              <CardTitle>Diamond King</CardTitle>
              <CardPrice>$999.99</CardPrice>
              <CardSubTitle>per month</CardSubTitle>
              <CardDesc>
                Unlimited User <br />
                Unlimited Budget <br />
                24/7 Support
              </CardDesc>
              <CardButton>
                <Button>Choose Plan</Button>
              </CardButton>
            </PricingCard>
          </PricingCardContainer>
          </PricingCardWrapper>
        </PricingWrapper>
      </PricingSection>
    </>
  );
};

export default Pricing;
