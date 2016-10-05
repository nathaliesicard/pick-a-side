import React, { Component } from 'react';
import { Row, Col } from 'pui-react-grids';
import Slot from './Slot';


class Draw extends Component {

  render() {

    return (
      <Row className="grid-show">
        <Col xs={12}>
          <Slot>diamond</Slot>
        </Col>
        <Col xs={12}>
          <Slot>ban</Slot>
        </Col>
      </Row>

    );
  }
}

export default Draw;