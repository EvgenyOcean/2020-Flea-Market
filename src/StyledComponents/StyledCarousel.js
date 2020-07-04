import styled from 'styled-components';


const StyledCarouselDiv = styled.div`
  width: 100%;
  max-width: 1200px; 
  padding: 0 1rem; 
  margin: 0 auto;
  margin-top: 2rem;

  .slider{
    overflow: hidden;
    position: relative;

    .text{
      position: absolute; 
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%); 
      background-color: rgba(0,0,0,0.3); 
      padding: 1rem 5rem;
      z-index: 999;
      text-transform: uppercase;
      font-size: 2rem;
      text-align: center;

      @media (max-width: 600px){
        width: 100%;
        top: 0; 
        transform: translateY(0) translateX(-50%);
        font-size: 1.5rem;
        padding: 0.3rem 1rem;
      }
    }
  }

  .slides{
    position: relative; 
    height: 250px; 
  }

  .slide{
    position: absolute;
    width: 100%;
    height: 100%; 
    object-fit: cover;
    object-position: top;
    left: 0;
    top: 0;
  }

  .btn{
    background-color: rgba(0,0,0,0.4); 
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    border: none;
    z-index: 999;
    cursor: pointer;
    svg{
      vertical-align: bottom;
      font-size: 2rem; 
      color: white;
    }
  }

  .btn-right{
    right: 2rem; 
  }

  .btn-left{
    left: 2rem; 
  }

  .animateRight{
    animation-name: rightAnimation;
    animation-duration: 0.3s;
    animation-timing-function: ease-in;
  }
  
  @keyframes rightAnimation{
    from {
      left: 100%; 
      opacity: .4;
    }
    to{
      left: 0;
      opacity: 1;
    }
  }
  
  .animateLeft{
    animation-name: leftAnimation;
    animation-duration: 0.3s;
    animation-timing-function: ease-in;
  }
  
  @keyframes leftAnimation{
    from {
      left: -100%;
      opacity: .4;
    }
    to{
      left: 0;
      opacity: 1;
    }
  }
`

export default StyledCarouselDiv;