import React, {useContext, useEffect} from 'react';
import styled from 'styled-components';
import Partition from '../components/Partition';
import GoodsSlider from '../components/GoodsSlider';
import {DataContext} from '../Context';

function Item(props) {
  let path = props.match.params.path;

  useEffect(()=>{window.scrollTo(0,0)}, [path]);

  //1. Gotta make sure the data has been loaded from a server
  let {items, loading, handleClick} = useContext(DataContext); 
  if (loading){
    return (<h1>The data is coming</h1>)
  } 

  //2. Gotta make sure the item actually exists and redirecting otherwise
  let theItem = items.find(item => item.path === path)
  if (!theItem) return <h1>Sorry, the item doesn't not exist!</h1>

  //3. If all set
  return (
    <ItemDiv>
      <div className="container">
        <div className="content">
          <div className="item-img">
            <img src={theItem.imgs[1]} alt=""/>
            {!theItem.inCart ? <button type="button" onClick={handleClick.bind(null, theItem)} className="btn-add">ADD TO CART</button> : <button type="button" onClick={handleClick.bind(null, theItem)} className="btn-remove">CANCEL</button>}
          </div>

          <div className="item-desc">
            <ul className="item-info">
              <li className="ul-header">ITEM INFO</li>
              <li>Name: {theItem.name}</li>
              <li>Price: {theItem.price + '$'}</li>
              {theItem.quality && <li>Quality: {theItem.quality}</li>}
              {theItem.size && <li>Quality: {theItem.size}</li>}
            </ul>
            <ul className="seller-info">
              <li className="ul-header">SELLER INFO</li>
              <li>Name: {theItem.seller.username}</li>
              <li>Phone: {theItem.seller.phone}</li>
              {(theItem.seller.verified && <li className="verified">Verified Seller</li>) || <li className="not-verified">New Seller</li>}
            </ul>
          </div>
        </div>

        <div className="same-seller">
          <Partition title={theItem.seller.username + ' also offers'} />
          <GoodsSlider seller={theItem.seller}/>
        </div>
      </div> 
    </ItemDiv>
  );
}

const ItemDiv = styled.div`

  margin-top: 2rem;
  font-family: Montserrat-SemiBold, sans-serif;
  .container{
    max-width: 1200px; 
    margin: 0 auto; 
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .content{
    width: 100%;
    display: flex;
    justify-content: space-between; 
  }

  .item-img{
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
      max-width: 380px;
      width: 100%;
      height: 380px;
      object-fit: cover;
    }

    button{
      text-transform: uppercase;
      margin-top: 1.5rem;
      background: #36C956;
      border-radius: 14px;
      border: none;
      color: white;
      padding: 0.7rem 1.3rem;
      cursor: pointer;

      &.btn-remove{
        background: red;
      }

      &:hover{
        background: green;
      }
    }
  }

  .item-desc{
    display: flex;
    justify-content: space-between; 
    flex-grow: 1;
    color: var(--darkGrey);
    margin-left: 1rem;
  }

  ul{
    list-style-type: none;
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
  }

  .ul-header{
    font-size: 3rem;
  }

  li{
    margin-bottom: 1.3rem;
  }

  .same-seller{
    width: 100%;
  }

  .verified{
    color: #36C956;
  }

  .not-verified{
    color: red;
  }

  @media (max-width: 1035px){
    .item-desc{
      flex-direction: column;
      align-items: center;
      margin-left: 0;
    }

    ul{
      max-width: 350px;
      width: 100%;
    }
  }

  @media (max-width: 823px){
    .content{
      flex-direction: column;
    }

    .item-desc{
      flex-direction: row;
      align-items: flex-start;
      margin-left: 0;
      margin-top: 1.5rem;
    }

    ul{
      width: auto;
    }

    .ul-header{
      font-size: 2rem;
    }
  }

  @media (max-width: 600px){
    .content{
      flex-direction: column;
    }

    .item-desc{
      flex-direction: column;
      align-items: center;
      margin-left: 0;
      margin-top: 1.5rem;
    }

    ul{
      width: auto;
    }

    li{
      text-align: center;
    }
  }
`

export default Item;