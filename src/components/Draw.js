import React, { Component, PropTypes } from 'react';
import { Row, Col } from 'pui-react-grids';
import Slot from './Slot';


class Draw extends Component {

  render() {
    console.log('Props passed to Draw are: ', this.props)

    let leftSlot = '';
    let rightSlot = '';

    if (this.props.pick === 'LEFT' && this.props.result === 'LEFT') {
      leftSlot = 'diamond';
      rightSlot = 'ban';
    } else if (this.props.pick === 'RIGHT' && this.props.result === 'RIGHT') {
      leftSlot = 'ban';
      rightSlot = 'diamond';
    } else if (this.props.result === 'RIGHT') {
      leftSlot = 'ban';
      rightSlot = 'diamond';
    } else if (this.props.result === 'LEFT') {
      leftSlot = 'diamond';
      rightSlot = 'ban';
    }

    return (
      <Row className="grid-show">
        <Col xs={12}>
          <Slot>{leftSlot}</Slot>
        </Col>
        <Col xs={12}>
          <Slot>{rightSlot}</Slot>
        </Col>
      </Row>

    );
  }
}

Draw.propTypes = {
  pick: PropTypes.string.isRequired,
  result: PropTypes.string.isRequired
}

export default Draw;