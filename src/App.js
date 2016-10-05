import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GameBoard from './components/GameBoard';
import { Row, Col } from 'pui-react-grids';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Row className="grid-show">
          <Col xs={10} xsOffset={7} style={{marginTop: '25px'}}>
            <img className="App-logo" src={logo} alt="logo" style={{height: '40px'}}/>
            <h2 className="txt-m" style={{ textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700}}>Pick a Side</h2>
          </Col>
        </Row>
        <GameBoard />
      </div>
    );
  }
}

export default App;
