import React from 'react';
import styled from 'styled-components';

function Goods({name, image, clName=""}) {
  return (
    <GoodsDiv className={clName}>
      <div className="image-container">
        <img src={image} alt={name}/>
      </div>
      <div className="name-container">
        <div className="name">{name}</div>
      </div>
    </GoodsDiv>
  );
}

const GoodsDiv = styled.div`
  .image-container{
    width: 290px;
    padding: 1rem 0.5rem; 
    background-color: white;

    img{
      width: 270px;
      height: 270px;
    }
  }

  .name-container{
    width: 290px;
    background: var(--mainBlack);
    border-radius: 0px 0px 10px 10px;
    text-align: center;
    color: var(--mainGrey);
    font-family: Roboto-Regular, sans-serif;
  }
`

export default Goods;