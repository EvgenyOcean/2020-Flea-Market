import styled from 'styled-components';


const StyledHeader = styled.header`
  padding: 1rem 0;
  background-color: var(--mainBlack);

  a{
    text-decoration: none;
    color: white;
    border: 1px solid transparent;
  }

  a:hover{
    border: 1px solid white;
  }

  .container{
    max-width: 1200px; 
    padding: 0 1rem; 
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
  }

  .logo{
    display: flex;
    align-items: center;
  }

  .logo-img{
    vertical-align: bottom;
    width: 70px;
    height: 69px;
    margin-right: 1rem;
  }

  .logo-text{
    display: none;
    font-family: 'JosefinSans-Bold', sans-serif;
    font-size: 2.25rem; 
    text-transform: capitalize;
  }

  .search{
    flex-basis: 820px;
    flex-grow: 1;
    display: flex;
    order: 3;
    margin-top: 1rem;
  }

  .search-button{
    background-color: #F0F0F0;
    color: #4D4D4D;
    font-family: "Roboto-Regular", sans-serif; 
    font-size: 1.5rem; 
    border: none; 
    height: 59px;
    vertical-align: bottom;
    cursor: pointer;
    padding: 0.5em 1em; 

    svg{
      color: red;
    }
  }

  .search-input{
    width: 100%;
    background-color: transparent; 
    border: #F0F0F0 solid 1px;
    height: 59px;
    border-radius: 10px 0px 0px 10px;
    font-size: 1.5rem; 
    color: red;
    padding: 0 1rem;
  }

  .cart{
    display: flex;
    align-items: center;
  }

  .cart-img{
    vertical-align: bottom;
    width: 58px;
    height: 59px;
    margin-right: 1rem;
  }

  .cart-text{
    font-family: 'JosefinSans-Bold', sans-serif;
    font-size: 1.5rem; 
  }

  @media (min-width: 470px){
    .logo-text{
      display: block;
    }
  }

  @media (min-width: 992px){
    .search{
      order: initial;
      flex: 1;
      margin: 0 3rem;
    }
  }

`

export default StyledHeader;