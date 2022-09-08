import { Bottom, CardSites, DataVenc, Id, Load, NameSite, Url } from "./style";
import { Col, Row } from "../../../shared/Grids/style";

import { ClockProgress } from "../../../shared/Icons";
import React from "react";

const Sites = (propsSite) => {
  return (
    <div>
      <CardSites>
        <div className="status_site">
          <ClockProgress />
        </div>
        <Row>
          <Col md="12">
            <NameSite>{propsSite.NomeSite}</NameSite>
          </Col>
          <Col md="12">
            <p>Site</p>
            <Url>{propsSite.urlSite}</Url>
          </Col>
          <Col md="6">
            <p>ID</p>
            <Id>{propsSite.idSite}</Id>
          </Col>
          <Col md="6">
            <p>Data de Venc.</p>
            <DataVenc>{propsSite.vencimentoSite}</DataVenc>
          </Col>
          <Col md="12">
            <Load></Load>
          </Col>
        </Row>
        <Bottom></Bottom>
      </CardSites>
    </div>
  );
};

export default Sites;
