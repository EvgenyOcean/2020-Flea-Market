import React from 'react';
import styled from 'styled-components';
import {FaVk, FaFacebookF, FaInstagram, FaTelegramPlane} from 'react-icons/fa';


function Social(props) {
  return (
    <SocialDiv>
      <a className="social vk" href="https://vk.com"><FaVk/></a>
      <a className="social fb" href="https://facebook.com"><FaFacebookF/></a>
      <a className="social inst" href="https://instagram.com"><FaInstagram/></a>
      <a className="social tel" href="https://telegram.org"><FaTelegramPlane/></a>
    </SocialDiv>
  );
}

const SocialDiv = styled.div`
  display: flex; 
  max-width: 150px; 
  width: 100%;
  align-items: center;
  justify-content: space-between;

  .social{
    text-decoration: none;
    color: white;
    background-color: #45668E;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    position: relative;
  }

  // .vk svg{
  //   width: 20px;
  //   height: 20px;
  //   vertical-align: bottom;
  // }

  .fb{
    background-color: #3B5998;

    svg{
      width: 15px;
      height: 15px;
    }
  }

  .inst{
    background: linear-gradient(0deg, #FFD879 4.79%, #FCCB76 11.31%, #F5AA6C 23.28%, #E9755E 39.24%, #E45F58 45.13%, #D22A9C 71.43%, #6968DF 108.26%);

    svg{
      width: 15px;
      height: 15px;
    }
  }

  .tel{
    background-color: #4AAEE8;

    svg{
      width: 15px;
      height: 15px;
    }
  }

  img{
    width: 30px;
    height: 30px;
  }

  svg{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    vertical-align: bottom;
  }

  @media (max-width: 450px){
    .social + .social{
      margin-left: 0.5rem;
    }
  }
`

export default Social;