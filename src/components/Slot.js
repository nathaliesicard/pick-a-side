import React, { Component } from 'react';
import { Icon } from 'pui-react-iconography';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


class Slot extends Component {

  render() {
    const styles = {
      slot : {
        //backgroundColor: '#ebeae9',
        padding: '10px',
        //color: '#333',
        borderRadius: '3px',
        marginTop: '5px',
        marginBottom: '5px'
      }
    };
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
             <div style={styles.slot} key={this.props.id}>
               <Icon name={this.props.children} size="3x"/>
             </div>

      </ReactCSSTransitionGroup>

    );
  }
}

export default Slot;