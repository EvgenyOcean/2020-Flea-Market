import React, { Component } from 'react';
import {data} from './data';

export const DataContext = React.createContext();

class DataContextProvider extends Component {
  constructor(props){
    super(props);
    this.state = {
      sellers: [],
      items: [],
      inCartItems: [],
      loading: true,
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  // function to change items.inCart state 
  handleClick(item, e){
    let target = e.target.closest('button'); 
    if (target.classList.contains('btn-add')){
      let inCartItems = this.state.inCartItems.concat(item);
      item.inCart = true;
      this.setState({inCartItems});
    } else {
      let inCartItems = this.state.inCartItems.filter(inCartItem => inCartItem !== item);
      item.inCart = false;
      this.setState({inCartItems});
    }
  }

  handleRemove(removeItem, e){
    let target = e.target;
    let inCartItems = this.state.inCartItems;
    if (target.classList.contains('clear')){
      for (let item of inCartItems){
        item.inCart = false; 
      }
      inCartItems = [];
      this.setState({inCartItems});
    } else {
      removeItem.inCart = false; 
      inCartItems = inCartItems.filter(item => item !== removeItem);
      this.setState({inCartItems});
    }
  }

  componentDidMount(){
    let inCartItems = data.items.filter(item => item.inCart);
    this.setState({sellers:data.sellers, items:data.items, loading: false, inCartItems});
  }

  render(){
    return (
      <DataContext.Provider value={{...this.state, handleClick:this.handleClick, handleRemove:this.handleRemove}}>
        {this.props.children}
      </DataContext.Provider>
    );
  }
}

export default DataContextProvider;