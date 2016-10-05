import React, { Component } from 'react';
import { Icon } from 'pui-react-iconography';


class Slot extends Component {

  render() {
    const styles = {
      slot : {
        background: '#ebeae9',
        padding: '10px',
        color: '#333',
        borderRadius: '3px',
        marginTop: '5px',
        marginBottom: '5px'
      }
    };

    return (
             <div style={styles.slot}>
                  <Icon name={this.props.children} size="3x"/>
             </div>

    );
  }
}

export default Slot;