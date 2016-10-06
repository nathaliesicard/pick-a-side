import React, { Component, PropTypes } from 'react';
import { Row, Col } from 'pui-react-grids';
import Slot from './Slot';


class Draw extends Component {

  render() {
    //console.log('Props passed to Draw are: ', this.props)

    let leftSlot = '';
    let rightSlot = '';
    let animationLeft = '';
    let animationRight = '';

    if (this.props.pick === 'LEFT' && this.props.result === 'LEFT') {
      leftSlot = 'diamond';
      rightSlot = 'ban';
      animationLeft = 'correct';
      animationRight = 'none';
    } else if (this.props.pick === 'RIGHT' && this.props.result === 'RIGHT') {
      leftSlot = 'ban';
      rightSlot = 'diamond';
      animationLeft = 'none';
      animationRight = 'correct';
    } else if (this.props.result === 'RIGHT') {
      leftSlot = 'ban';
      rightSlot = 'diamond';
      animationLeft = 'wrong';
      animationRight = 'none';
    } else if (this.props.result === 'LEFT') {
      leftSlot = 'diamond';
      rightSlot = 'ban';
      animationLeft = 'none';
      animationRight = 'wrong';
    }

    return (
      <Row className="grid-show">
        <Col xs={12}>
          <Slot id={this.props.id} animation={animationLeft}>{leftSlot}</Slot>
        </Col>
        <Col xs={12}>
          <Slot id={this.props.id} animation={animationRight}>{rightSlot}</Slot>
        </Col>
      </Row>

    );
  }
}

Draw.propTypes = {
  id: PropTypes.number.isRequired,
  pick: PropTypes.string.isRequired,
  result: PropTypes.string.isRequired
}

export default Draw;