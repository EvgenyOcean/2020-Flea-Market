import React from 'react';
import styled from 'styled-components';

function MainContainer(props) {
  return (
    <MainContainerDiv>
      {props.children}
    </MainContainerDiv>
  );
}


const MainContainerDiv = styled.div`
  max-width: 1200px; 
  padding: 0 1rem; 
  margin: 0 auto;
  width: 100%;
  // flex: 1 0 auto;
`



export default MainContainer;