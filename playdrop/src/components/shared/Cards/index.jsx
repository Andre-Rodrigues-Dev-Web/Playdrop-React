import React from "react";
import { CardBody, CardHeader, ContainerCard } from "./style";

export function MinCard(propsMinCard) {
  return (
    <>
      <ContainerCard>
        <CardHeader>
          <h2>{propsMinCard.textHero}</h2>
        </CardHeader>
        <CardBody directionFlexDesk="row" directionFlexMobile="column">
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
        <CardBody directionFlexDesk="row" directionFlexMobile="column">
          <h2>{propsBigCard.DescriptionCard}</h2>
          {propsBigCard.playCard}
        </CardBody>
      </ContainerCard>
    </>
  );
}
