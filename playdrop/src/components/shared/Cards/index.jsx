<<<<<<< Updated upstream
import React from "react";
import { CardBody, CardHeader, ContainerCard } from "./style";
=======
import { CardBody, CardHeader, ContainerCard, Description } from "./style";
>>>>>>> Stashed changes

import React from "react";

export function MinCard(propsMinCard) {
  return (
    <>
<<<<<<< Updated upstream
      <ContainerCard>
        <CardHeader>
=======
      <ContainerCard paddingCard="30px 15px" valuePosition="center">
        <CardHeader valuePositionText="center">
>>>>>>> Stashed changes
          <h2>{propsMinCard.textHero}</h2>
        </CardHeader>
        <CardBody directionFlexDesk="row" directionFlexMobile="row">
          {propsMinCard.iconCard}
          <h2>{propsMinCard.numberCard}</h2>
        </CardBody>
      </ContainerCard>
    </>
  );
}

export function BigCard(propsBigCard) {
  return (
    <>
      <ContainerCard>
        <CardHeader>{propsBigCard.imgBigCard}</CardHeader>
<<<<<<< Updated upstream
        <CardBody directionFlexDesk="row" directionFlexMobile="column">
          <h2>{propsBigCard.DescriptionCard}</h2>
=======
        <CardBody
          directionFlexDesk="row"
          directionFlexMobile="row"
          justifyCard="space-between"
          valueSpace="22px 20px"
        >
          <Description valueWidthText="232px">
            {propsBigCard.descriptionCard}
          </Description>
>>>>>>> Stashed changes
          {propsBigCard.playCard}
        </CardBody>
      </ContainerCard>
    </>
  );
}
