import React, { Component } from 'react';
import {data} from './data';

export const DataContext = React.createContext();

class DataContextProvider extends Component {
  constructor(props){
    super(props);
    this.state = {
      sellers: [],
      items: [],
      loading: true,
    }
  }

  componentDidMount(){
    this.setState({sellers:data.sellers, items:data.items, loading: false});
  }

  render(){
    return (
      <DataContext.Provider value={{...this.state}}>
        {this.props.children}
      </DataContext.Provider>
    );
  }
}

export default DataContextProvider;