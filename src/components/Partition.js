import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

function Partition({title, link=null}) {
  return (
    <PartitionDiv>
      <h3>{title}</h3>
      {link && <Link to='/item/link'>See more</Link>}
    </PartitionDiv>
  );
}

const PartitionDiv = styled.div`
  background-color: var(--mainGreen);
  padding: 0.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  margin: 2rem 0;

  a{
    font-family: sans-serif;
    color: var(--mainBlack);
  }
`

export default Partition;