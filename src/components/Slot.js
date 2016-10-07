import React, { Component } from 'react';
import { Icon } from 'pui-react-iconography';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


class Slot extends Component {

  render() {

// At the initial mount, all children of the ReactCSSTransitionGroup will appear but not enter. However, all children later added to an existing ReactCSSTransitionGroup will enter but not appear.
    return (
      <ReactCSSTransitionGroup
        transitionName={this.props.animation}
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        //transitionEnterTimeout={500}
        transitionLeaveTimeout={100}
      >
             <div className="slot" key={this.props.id}>
               <Icon name={this.props.children} size="3x"/>
             </div>

      </ReactCSSTransitionGroup>

    );
  }
}

export default Slot;