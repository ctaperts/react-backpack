import React, { Component } from 'react';
import Helmet from "react-helmet";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Jumbotron from '../../components/Jumbotron/Jumbotron';
import Button from '../../components/Button/Button';
import Textbox from '../../components/Textbox/Textbox';
import Toolbar from './Toolbar/Toolbar';
import Item from './Item/Item';

import Aux from '../../hoc/Aux/Aux';

import classes from './ToDoItems.scss';

class ToDoItems extends Component {
  state = {
	items: {
	  1532289272764: "Hello, World!",
	  1532289272765: "Foo Bar",
	  1532289272766: "Eggs Spam",
	}
  };

  addItemHandler = itemName => {
	this.setState({
	  items: {
		...this.state.items,
		[+new Date()]: itemName
	  }
	})
  };

  onDeleteHandler = itemKey => {
	let newStateItem = {
	  ...this.state.items
	};

	delete newStateItem[itemKey];

	this.setState({
	  items: {
		...newStateItem
	  }
	});
  };
  render = () => {
	const itemList = Object.keys(this.state.items).map(itemKey => {
	  return (
        <CSSTransition
          key={itemKey}
          timeout={500}
          classNames={{
            enter: classes.Enter,
            enterActive: classes.EnterActive,
            exit: classes.Exit,
            exitActive: classes.ExitActive,
          }}>
          <Item
            key={itemKey}
            name={this.state.items[itemKey]}
            onDelete={() => this.onDeleteHandler(itemKey)}
          />
        </CSSTransition>
      );
    });
    return (
      <Aux>
        <Helmet title="ToDoItems Title"/>
        <Jumbotron imageURL="//placehold.it/1024x700/333/555?text=To Do App" size="small">
        </Jumbotron>
        <Textbox backgroundColor="grey" color="white">
          A simple ToDo App with react transition groups
        </Textbox>
        <div className={classes.Items}>
          <Toolbar onAddHandler={this.addItemHandler} />
          <TransitionGroup className={classes.ItemsList}>
            {itemList}
          </TransitionGroup>
        </div>
      </Aux>
    );
  }
}

export default ToDoItems;
