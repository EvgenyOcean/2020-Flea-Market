import React from 'react';
import styled from 'styled-components';
import Social from '../components/Social';


function Home(props) {
  return (
    <>
      <Subheader>
        <div className="container">
          <div className="text">Free commercial offers from companies and private individuals.</div>
          <Social />
        </div>
      </Subheader>
    </>
  );
}

const Subheader = styled.div`
  background-color: var(--mainGreen);
  padding: 1rem 0;
  .container{
    max-width: 1200px;
    padding: 0 1rem; 
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }

  .text{
    font-size: 1.5rem; 
    font-family: "Roboto-Regular", sans-sarif;
  }

  @media (max-width: 930px){
    .container{
      flex-direction: column;
    }

    .text{
      text-align: center;
    }
  }
`

export default Home;