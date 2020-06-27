import React from 'react';
import {Link} from 'react-router-dom';
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa';
import {DataContext} from '../Context';
import StyledCarouselDiv from '../StyledComponents/StyledCarousel';

class Carousel extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      loading: true, // if the data is loading display <h1>Loading or sth</h1>
      items: [], // for future items comming from the server
      count: 0, // the index of the img to display
      animateRight: false, // to make animation for right swipe otherwise left
      zInd: 1, // to increase zinx on each button click
      isAnimaitonOn: false, // if animation is going, prevent other clicks
      preventFirstAnimation: true, // if component just mounted, don't apply animated styled and etc
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleAnimation = this.handleAnimation.bind(this);
  }

  static contextType = DataContext; // getting the context

  componentDidMount(){
    let {items, loading} = this.context; // items are images
    items = items.filter(item => item.best); // taking only premium offers
    // if data is loaded already then: set items; loading: false (prevent didUpdate); prevent adding classes for animation and changing zindex; setting count to index to access the last img right away
    this.setState({items, loading, preventFirstAnimation: true}, () => {
      document.addEventListener('animationend', this.handleAnimation); // when animaton is over, only then allow onclick
    })
  }

  componentDidUpdate(){
    if (this.state.loading){ // when data comes context will be changed and it will come here, where items and loading need to be updated
      let {items, loading} = this.context;
      items = items.filter(item => item.best);
      this.setState({items, loading}) // (1)
    }
  }

  componentWillUnmount(){ // if the component gets removed, then delete the animationend event
    document.removeEventListener('animationend', this.handleAnimation);
  }

  handleAnimation(){ // allowing onclick handler again
    this.setState({isAnimaitonOn: false});
  }

  createImgs(){
    let best_offers = this.state.items;
    let count = this.state.count;
    // figure what classes to added, coz in case of the animateRight initially an img goes to the left: 100%, but when it's animateLeft an images goes to the left: -100%;
    let animateTo = this.state.animateRight ? 'animateRight' : 'animateLeft';
    let finalClasses = ['slide', animateTo].join(' '); // little trick for dynamic classes

    if (this.state.preventFirstAnimation){ // there's no animateRight or Left classes, so animation won't be played BUT Because in the html image which comes first will end up the last because of the position: absolute and others just stack on it, we need to increase zindex of the first image right away, that's why style has been added: 
      return best_offers.map((item, index) => (
        // 
        <Link to={'item/' + item.path} key={item.path}>
          <img src={item.imgs[0]} className='slide' alt="" 
            style={index === count ? {zIndex:this.state.zInd} : {zIndex:this.state.zInd - 1}}>
          </img>
        </Link>)
        
      ) 
    }
    
    // all other cases, with the animation classNames and zIndex 
    return best_offers.map((item, index) => (
      <Link to={'item/' + item.path} key={item.path}>
        <img src={item.imgs[0]} 
             className={index === count ? finalClasses : 'slide'} alt="" 
             style={index === count ? {zIndex:this.state.zInd} : {zIndex:this.state.zInd - 1}}>
        </img>
      </Link>)
    )
  }

  handleClick(e){ //when left or right button is clicked
    if (this.state.isAnimaitonOn) return; // if there's an ongoing animation
    let count = this.state.count;
    let zInd = this.state.zInd + 1;
    let imgs = this.state.items; 
    let btn = e.target.closest('button');
    if (btn.classList.contains('btn-right')){ // handle right btn
      count = count + 1 > imgs.length - 1 ? 0 : count + 1; // if count gets greater than img.length - 1, the first image needs to be displayed, otherwise just the next one
      this.setState({animateRight: true, count, zInd, isAnimaitonOn: true, preventFirstAnimation: false})
    } else {
      count = count - 1 < 0 ? imgs.length - 1 : count - 1; // if count gets less than 0, the last image needs to be displayed, otherwise just the previous one
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