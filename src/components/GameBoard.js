import React, { Component } from 'react';
import { HighlightButton, HighlightAltButton } from 'pui-react-buttons';
import { Row, Col } from 'pui-react-grids';
import Draw from './Draw';
import { connect } from 'react-redux'
import { registerBet } from '../actions/index'

class GameBoard extends Component {
  handleBetLeft() {
    console.log('A bet was made for LEFT');
  }

  handleBetRight() {
    console.log('A bet was made for RIGHT');
  }

  render() {
    const { balance } = this.props;
    return (
      <div>
        <Row className="grid-show">
          <Col xs={10} xsOffset={7}>
            <Row className="grid-show">
              <Col xs={12} xsOffset={12}>
                Balance: <b>{ balance }</b>
              </Col>
            </Row>
           <Draw />
            <Draw />
            <Draw />
            <Draw />
            <Draw />
            <Row className="grid-show" style={{marginTop: '5px'}}>
              <Col xs={12}>
                <HighlightButton onClick={() => this.handleBetLeft()} block={true} large={true}>
                  Left
                </HighlightButton>
              </Col>
              <Col xs={12}>
                <HighlightAltButton onClick={() => this.handleBetRight()} block={true} large={true}>
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


export default connect(store => {
  return {
    balance: store.balance.balance,
   // clase: store.counter.clase,
  }

})(GameBoard)