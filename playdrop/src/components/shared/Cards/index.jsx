import React from "react";
import { CardBody, CardHeader, ContainerCard, Description } from "./style";

export function MinCard(propsMinCard) {
  return (
    <>
      <ContainerCard paddingCard="15px" valuePosition="center">
        <CardHeader valuePositionText="center">
          <h2>{propsMinCard.textHero}</h2>
        </CardHeader>
        <CardBody directionFlexDesk="row" directionFlexMobile="column">
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
          directionFlexMobile="column"
          justifyCard="space-between"
          valueSpace="22px 30px"
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
