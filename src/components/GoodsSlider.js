import React from 'react';
import styled from 'styled-components';
import {DataContext} from '../Context';
import Goods from './Goods';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.min.css';

class GoodsSlider extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      category: props.category,
      seller: props.seller,
      loading: true, 
      items: [],
      params: {
        loop: false,
        slidesPerView: 'auto',
        slidesPerGroup: 4,
        spaceBetween: 10,
      }
    }
    this.categoryFiltering = this.categoryFiltering.bind(this);
    this.sellerFiltering = this.sellerFiltering.bind(this);
  }

  static contextType = DataContext;

  componentDidMount(){
    let {loading, items} = this.context;
    if (loading) return; 
    this.setState({loading, items});
  }
  
  componentDidUpdate(){
    let {loading, items} = this.context;
    if (!this.state.loading) return; 
    this.setState({loading, items});
  }

  categoryFiltering(){
    let allImgs = this.state.items; 
    let category = this.state.category
    let filteredImgs = allImgs.filter(img => img.category === category); 
    filteredImgs = filteredImgs.map(img => <Goods name={img.name} image={img.imgs[1]} clName="swiper-slide" path={img.path} key={img.path}/>)
    return filteredImgs;
  }

  sellerFiltering(){
    let allImgs = this.state.items; 
    let seller = this.state.seller
    let filteredImgs = allImgs.filter(img => img.seller === seller); 
    filteredImgs = filteredImgs.map(img => <Goods name={img.name} image={img.imgs[1]} clName="swiper-slide" path={img.path} key={img.path}/>)
    return filteredImgs;
  }


  render(){
    return(
      this.state.loading ? <h1>The page is loading</h1> : 
      <GoodsSliderDiv>
        <Swiper {...this.state.params}>
          {this.state.category ? this.categoryFiltering() : this.sellerFiltering()}
        </Swiper>
      </GoodsSliderDiv>
    )
  }
}

const GoodsSliderDiv = styled.div`
  width: 100%;
  margin-bottom: 2rem;

  .swiper-slide{
    width: 290px;
    object-fit: cover;
    height: 100%;
  }
`

export default GoodsSlider;