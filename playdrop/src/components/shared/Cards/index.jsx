import { CardBody, CardHeader, ContainerCard, Description } from "./style";

import React from "react";

export function MinCard(propsMinCard) {
  return (
    <>
      <ContainerCard paddingCard="30px 15px" valuePosition="center">
        <CardHeader valuePositionText="center">
          <h2>{propsMinCard.textHero}</h2>
        </CardHeader>
        <CardBody directionFlexDesk="row" directionFlexMobile="row">
          {propsMinCard.iconCard}
          <h2 valueSize={36}>{propsMinCard.numberCard}</h2>
        </CardBody>
      </ContainerCard>
    </>
  );
}

export function BigCard(propsBigCard) {
  return (
    <>
      <ContainerCard paddingCard="0">
        <CardHeader>{propsBigCard.imgBigCard}</CardHeader>
        <CardBody
          directionFlexDesk="row"
          directionFlexMobile="row"
          justifyCard="space-between"
          valueSpace="22px 20px"
        >
          <Description valueWidthText="232px">
            {propsBigCard.descriptionCard}
          </Description>
          {propsBigCard.playCard}
        </CardBody>
      </ContainerCard>
    </>
  );
}
