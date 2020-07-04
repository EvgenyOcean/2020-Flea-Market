import React from 'react';
import styled from 'styled-components';
import Social from './Social';
import IFrame from './IFrame';

function Footer(props) {

  const backToTop = () => {
    window.scrollTo(0,0);
  }
  return (
    <FooterDiv>
      <div className="scroll-top" onClick={backToTop}>Back to Top</div>
      <div className="container">
        <div className="footer-content">
          <ul className="contacts">
            <li><span>Feel free to contact us:</span></li>
            <li><a href="tel:+153463462423" className="contact">Hotline: +14352151253</a></li>
            <li><a href="mailto:fleamarket@gmail.com" className="contact">Mail: fleamarket@gmall.com</a></li>
            <li><a href="#nothing" className="contact">Payment Information</a></li>
            <li><Social/></li>
          </ul>
          <IFrame src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d786.0533398882925!2d-87.8296928398329!3d41.941390650910904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c3cd0f4cbed%3A0xafe0a6ad09c0c000!2sChicago%2C%20IL%2C%20USA!5e0!3m2!1sen!2sru!4v1593524078890!5m2!1sen!2sru" width={600} height={200} title="Chicago, IL"/>
        </div>
      </div>
      <div className="copyright">All rights reserved &copy; 2020</div>
    </FooterDiv>
  );
}

const FooterDiv = styled.footer`
  background-color: #272727;
  flex-shrink: 0;
  height: 330px;
  margin-top: auto;
  font-family: Roboto-Regular, sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  .container{
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
    width: 100%;
  }

  .scroll-top{
    text-align: center;
    line-height: 1.3rem;
    background-color: #333;
    cursor: pointer;
    padding: 0.3rem 0;
  }

  .scroll-top:hover{
    background-color: #444;
  }

  .footer-content{
    display: flex; 
    justify-content: space-between;
    align-items: center;
  }

  .contacts{
    list-style-type: none;
    padding: 0;
    padding-right: 1rem; 
    margin: 0;
    flex-shrink: 0;
  }

  li{
    margin-bottom: 0.5rem;
  }

  li:first-child{
    margin-bottom: 1rem;

    span{
      font-size: 1.15rem; 
    }
  }

  .contact{
    display: block;
    text-decoration: none; 
    color: var(--mainGrey);
    margin-bottom: 0.6rem;
  }

  .contact::first-child{
    font-size: 1.3rem;
    margin-bottom: 0.3rem;
  }

  .copyright{
    text-align: center;
    padding: 0.5rem 0;
  }

  @media (max-width: 560px){
    .footer-content{
      flex-direction: column;
    }

    .contacts{
      padding: 1rem 0;
    }

    .copyright{
      background-color: #333;
    }

    li:last-child div{
      margin: 0 auto;
    }
  }
`

export default Footer;