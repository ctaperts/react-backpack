import React, { Component } from 'react';

import Button from '../../../components/Button/Button'
import classes from './Toolbar.scss';

class Toolbar extends Component {
  state = {
    itemName: ''
  };

  addButtonHandler = () => {
    if (this.state.itemName) {
      this.props.onAddHandler(this.state.itemName);

      this.setState({
        itemName: ''
      });
    }
  };

  inputHandler(value) {
    this.setState({
      itemName: value
    });
  }

  render() {
    return (
      <div className={classes.Toolbar}>
        <input
          className={classes.ToolbarInput}
          type="text"
          placeholder="Type the item"
          value={this.state.itemName}
          onChange={e => {
            this.inputHandler(e.target.value);
          }}
        />
        <Button
          btnType="Clear"
          className={classes.ToolbarButton}
          disabled={!this.state.itemName}
          clicked={this.addButtonHandler}
        >
          +
        </Button>
      </div>
    );
  }
}

export default Toolbar;
