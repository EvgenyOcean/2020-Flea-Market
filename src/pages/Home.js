import React from 'react';
import styled from 'styled-components';
import Social from '../components/Social';
import Carousel from '../components/Carousel';
import Partition from '../components/Partition';
import MainContainer from '../components/MainContainer';
import GoodsSlider from '../components/GoodsSlider';
import Footer from '../components/Footer';


function Home(props) {
  return (
    <main>
      <Subheader>
        <div className="container">
          <div className="text">Free commercial offers from companies and private individuals.</div>
          <Social />
        </div>
      </Subheader>
      <Carousel />
      <MainContainer>
        <Partition title="Clothes" link="clothes"/>
        <GoodsSlider category="clothes"/>
        <Partition title="Services" link="services"/>
        <GoodsSlider category="services"/>
        <Partition title="Animals" link="animals"/>
        <GoodsSlider category="animals"/>
      </MainContainer>
      <Footer />
    </main>
  );
}

const Subheader = styled.div`
  background-color: var(--mainGreen);
  padding: 0.5rem 0;
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
    font-size: 1rem; 
    font-family: "Roboto-Regular", sans-sarif;
  }

  @media (max-width: 660px){
    .container{
      flex-direction: column;
    }

    .text{
      text-align: center;
    }
  }
`

export default Home;