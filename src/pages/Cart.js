import styled from 'styled-components';
import React from 'react';
import {DataContext} from '../Context';
import CartItem from '../components/CartItem';
import {surfing} from '../data';

class Cart extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      inCartItems: [], 
      loading: true,
      extraInfo: new Map(),
    };
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  static contextType = DataContext;
  componentDidMount(){
    const {loading, inCartItems} = this.context;
    if (loading) return; 
    let extraInfo = new Map();
    for (let item of inCartItems){
      extraInfo.set(item, {
        requestAmount: 1, 
        get total(){return +item.price * this.requestAmount}
      })
    }
    this.setState({loading, inCartItems, extraInfo});
  }

  componentDidUpdate(){
    const {loading, inCartItems} = this.context;
    if (!this.state.loading) return;
    let extraInfo = new Map();
    for (let item of inCartItems){
      extraInfo.set(item, {
        requestAmount: 1, 
        get total(){return +item.price * this.requestAmount}
      })
    }
    this.setState({loading, inCartItems, extraInfo});
  }

  handleQuantityChange(item, e){
    let target = e.target.closest('button');
    let extra = this.state.extraInfo;
    let inStock = +item.quantity;
    if (target.classList.contains('more')){
      if (extra.get(item).requestAmount + 1 > inStock) return; 
      extra.get(item).requestAmount = extra.get(item).requestAmount + 1;
    }else {
      if (extra.get(item).requestAmount === 1) return; 
      extra.get(item).requestAmount = extra.get(item).requestAmount - 1;
    }
    this.setState({extraInfo: extra});
  }

  handleRemove(item,e){
    console.log('Remove attempted');
  }

  render(){
    const loading = this.state.loading;
    const items = this.state.inCartItems;
    const extraInfo = this.state.extraInfo;
    let content; 
    if (loading){
      content = (
        <div className="empty">
          <div className="empty-text">Your cart is currently empty.<br/>Go ahead and surf the market!</div>
          <div className="empty-img">
            <img src={surfing} alt="surfing"/>
          </div>
        </div>
      )
    } else {
      content = (
        <CartDiv>
          <table>
            <thead>
              <tr>
                <th>Products</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {items.map(item => <CartItem item={item} quantity={extraInfo.get(item).requestAmount} total={extraInfo.get(item).total} handleQuantityChange={this.handleQuantityChange} handleRemove={this.handleRemove} key={item.path}/>)}
            </tbody>
          </table>
        </CartDiv>
      )
    }
    return content; 
  }
}

const CartDiv = styled.div`
  max-width: 1200px; 
  margin: 0 auto;
  padding: 0 1rem;
  margin-top: 2rem; 
  color: #4a4a4a;
  font-family: Montserrat-SemiBold, sans-serif; 

  table{
    width: 100%;
    table-layout: fixed;
    text-align: center;
    border-collapse: collapse;
  }

  thead{
    text-transform: uppercase;
  }

  td{
    border-bottom: 5px solid black;
  }
`

export default Cart;