import React from 'react';
import {Link} from 'react-router-dom';
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa';
import {DataContext} from '../Context';
import StyledCarouselDiv from '../StyledComponents/StyledCarousel';

class Carousel extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      loading: true, 
      items: [],
      count: 0,
      animateRight: false,
      zInd: 1,
      isAnimaitonOn: false,
      preventFirstAnimation: true,
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleAnimation = this.handleAnimation.bind(this);
  }

  static contextType = DataContext; 

  componentDidMount(){
    let {items, loading} = this.context;
    items = items.filter(item => item.best);
    this.setState({items, loading, preventFirstAnimation: true, count: items.length - 1}, () => {
      document.addEventListener('animationend', this.handleAnimation);
    })
  }

  componentDidUpdate(){
    if (this.state.loading){
      let {items, loading} = this.context;
      items = items.filter(item => item.best);
      this.setState({items, loading, count: items.length - 1})
    }
  }

  componentWillUnmount(){
    document.removeEventListener('animationend', this.handleAnimation);
  }

  handleAnimation(){
    this.setState({isAnimaitonOn: false});
  }

  createImgs(){
    let best_offers = this.state.items;
    let count = this.state.count;
    let animateTo = this.state.animateRight ? 'animateRight' : 'animateLeft';
    let finalClasses = ['slide', animateTo].join(' ');

    if (this.state.preventFirstAnimation){
      console.log('first time')
      return best_offers.map((item, index) => <Link to={'item/' + item.path} key={item.path}><img src={item.imgs[0]} className='slide' alt="" style={index === count ? {zIndex:this.state.zInd} : {zIndex:this.state.zInd - 1}}></img></Link>) 
    }
    
    return best_offers.map((item, index) => <Link to={'item/' + item.path} key={item.path}><img src={item.imgs[0]} className={index === count ? finalClasses : 'slide'} alt="" style={index === count ? {zIndex:this.state.zInd} : {zIndex:this.state.zInd - 1}}></img></Link>)
  }

  handleClick(e){
    if (this.state.isAnimaitonOn) return;
    let count = this.state.count;
    let zInd = this.state.zInd + 1;
    let imgs = this.state.items; 
    let btn = e.target.closest('button');
    if (btn.classList.contains('btn-right')){
      count = count - 1 < 0 ? imgs.length - 1 : count - 1;
      this.setState({animateRight: true, count, zInd, isAnimaitonOn: true, preventFirstAnimation: false})
    } else {
      count = count + 1 > imgs.length - 1 ? 0 : count + 1;
      this.setState({animateRight: false, count, zInd, isAnimaitonOn: true, preventFirstAnimation:false})
    }
  }

  render(){
    return (
      this.state.loading ? <h1>Data is loading</h1> :
      <StyledCarouselDiv>
        <div className="slider">
          <button className='btn btn-right' onClick={this.handleClick} id="right"><FaAngleRight/></button>
          <div className="slides">
            {this.createImgs()}
          </div>
          <button className='btn btn-left' onClick={this.handleClick} id="left"><FaAngleLeft/></button>
        </div>
      </StyledCarouselDiv>
    )
  }
}

export default Carousel;