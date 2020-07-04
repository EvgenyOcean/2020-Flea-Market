import styled from 'styled-components';


const StyledHeader = styled.header`
  padding: 0.4rem 0;
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
    width: 48px;
    height: 48px;
    margin-right: 1rem;
  }

  .logo-text{
    display: none;
    font-family: 'JosefinSans-Bold', sans-serif;
    font-size: 1.5rem; 
    text-transform: capitalize;
    padding: 0;
    margin: 0;
  }

  .search{
    flex-basis: 820px;
    flex-grow: 1;
    display: flex;
    order: 3;
    margin-top: 0.1rem;
  }

  .search-button{
    background-color: #F0F0F0;
    color: #4D4D4D;
    font-family: "Roboto-Regular", sans-serif; 
    border: none; 
    height: 40px;
    vertical-align: bottom;
    cursor: pointer;
    padding: 0.5em 1.5em; 

    svg{
      color: red;
      font-size: 1rem;
      vertical-align: bottom;
    }
  }

  .search-input{
    width: 100%;
    background-color: transparent; 
    border: #F0F0F0 solid 1px;
    height: 40px;
    border-radius: 10px 0px 0px 10px;
    font-size: 1rem; 
    color: red;
    padding: 0 1rem;
  }

  .cart{
    display: flex;
    align-items: center;
  }

  .cart-img{
    vertical-align: bottom;
    width: 40px;
    height: 40px;
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