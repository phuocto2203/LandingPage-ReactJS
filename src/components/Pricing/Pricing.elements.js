import styled from "styled-components";

export const PricingSection = styled.div`
  background-color: #4c5fed;
`;

export const PricingTitle = styled.h2`
  font-size: 50px;
  color: #fff;
  font-weight: bold;

`;
export const PricingWrapper = styled.div`
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const PricingCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const PricingCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 50px;
  gap: 20px;
  margin-bottom: 100px;
  
  @media screen and (max-width: 940px) {
      flex-direction: column;
      align-items: center;
  }
`;

export const PricingCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #232323;
  width: 280px;
  height: 530px;
  border-radius: 5px;

  @media screen and (min-width: 940px){
  &:hover {
    padding-top: -20px;
    width: 320px;
    height: 570px;
    transition: all 0.3s linear;
  }
}
  
`;

export const CardLogo = styled.div`
  color: #abb3c0;
  font-size: 50px;
  padding-top: 50px;
  padding-bottom: 50px;
`;

export const CardTitle = styled.h3`
  color: #fff;
  font-size: 30px;
  padding-bottom: 10px;
`;

export const CardPrice = styled.h2`
  color: #fff;
  font-size: 40px;
`;

export const CardSubTitle = styled.p`
  color: #fff;
  font-size: 15px;
  padding-bottom: 50px;
`;

export const CardDesc = styled.p`
  color: #a5a6a9;
  font-size: 18px;
  text-align: center;
  padding-bottom: 50px;
`;
export const CardButton = styled.div`

  
`;
