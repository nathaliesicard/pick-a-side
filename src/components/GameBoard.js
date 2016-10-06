import React, { Component, PropTypes } from 'react';
import { HighlightButton, HighlightAltButton } from 'pui-react-buttons';
import { Row, Col } from 'pui-react-grids';
import Draw from './Draw';
import { connect } from 'react-redux'
import { registerBet } from '../actions/index'

class GameBoard extends Component {
  handleBetLeft() {
    const { dispatch } = this.props;
    console.log('A bet was made for LEFT');
    dispatch(registerBet('LEFT'));
  }

  handleBetRight() {
    const { dispatch } = this.props;
    console.log('A bet was made for RIGHT');
    dispatch(registerBet('RIGHT'));
  }

  getDraws() {
    return this.props.history/*.slice(-5)*/.map(
      (item, i) => <Draw key={i} pick={item.pick} result={item.result}/>
    )
  }

  render() {
    const { balance, history } = this.props;
      console.log(history);
    return (
      <div>
        <Row className="grid-show">
          <Col xs={10} xsOffset={7}>
            <Row className="grid-show">
              <Col xs={12} xsOffset={12}>
                Balance: <b>{ balance }</b>
              </Col>
            </Row>
            {this.getDraws()}
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

GameBoard.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default connect(store => {
  return {
    balance: store.balance.balance,
    history: store.history,
  }

})(GameBoard)