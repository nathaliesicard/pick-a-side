import React, { Component } from 'react';
import { HighlightButton, HighlightAltButton } from 'pui-react-buttons';
import { Row, Col } from 'pui-react-grids';
import Slot from './Slot';

class GameBoard extends Component {

  render() {
    return (
      <div>
        <Row className="grid-show">
          <Col xs={10} xsOffset={7}>
            <Row className="grid-show">
              <Col xs={12}>
                <Slot>diamond</Slot>
              </Col>
              <Col xs={12}>
                <Slot>ban</Slot>
              </Col>
            </Row>
            <Row className="grid-show">
              <Col xs={12}>
                <Slot>diamond</Slot>
              </Col>
              <Col xs={12}>
                <Slot>ban</Slot>
              </Col>
            </Row>
            <Row className="grid-show">
              <Col xs={12}>
                <Slot>diamond</Slot>
              </Col>
              <Col xs={12}>
                <Slot>ban</Slot>
              </Col>
            </Row>
            <Row className="grid-show">
              <Col xs={12}>
                <Slot>diamond</Slot>
              </Col>
              <Col xs={12}>
                <Slot>ban</Slot>
              </Col>
            </Row>
            <Row className="grid-show">
              <Col xs={12}>
                <Slot>diamond</Slot>
              </Col>
              <Col xs={12}>
                <Slot>ban</Slot>
              </Col>
            </Row>
            <Row className="grid-show">
              <Col xs={12}>
                <HighlightButton block={true} large={true}>
                  Left
                </HighlightButton>
              </Col>
              <Col xs={12}>
                <HighlightAltButton block={true} large={true}>
                  Right
                </HighlightAltButton>
              </Col>
            </Row>
          </Col>
        </Row>

      </div>
    );
  }
}

export default GameBoard;