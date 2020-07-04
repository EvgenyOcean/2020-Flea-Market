import React, {useContext} from 'react';
import styled from 'styled-components';
import {DataContext} from '../Context';
import Goods from '../components/Goods';

function Category(props) {

  let category = props.match.params.category;
  let {loading, items} = useContext(DataContext);

  if (loading){
    return (<h1>Data is comming...</h1>)
  }

  items = items.filter(item => item.category === category);

  return (
    <CategoryDiv>
      {items.map(item => <Goods name={item.name} image={item.imgs[1]} path={item.path} key={item.path} clName="all-items"/>)}
    </CategoryDiv>
  );
}

const CategoryDiv = styled.div`
  max-width: 1200px;
  padding: 0 1rem;
  margin: 2rem auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  grid-gap: 1rem;
`

export default Category;