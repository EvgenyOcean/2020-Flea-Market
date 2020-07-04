import logo from './assets/svgs/logo.svg';
import cart from './assets/svgs/cart.svg';
import surfing from './assets/svgs/surfing.svg';
import basketballShirt_1200 from './assets/images/1200/basketballShirt.jpg';
import blackShirt_1200 from './assets/images/1200/blackShirt.jpg';
import clock_1200 from './assets/images/1200/clock.jpg';
import dog_1200 from './assets/images/1200/dog.jpg';
import parrot_1200 from './assets/images/1200/parrot.jpg';
import services_1200 from './assets/images/1200/services.jpg';
import snake_1200 from './assets/images/1200/snake.jpg';
import soccerShirt_1200 from './assets/images/1200/soccerShirt.jpg';
import sweater_1200 from './assets/images/1200/sweater.jpg';
import toys_1200 from './assets/images/1200/toys.jpg';
import watch1_1200 from './assets/images/1200/watch1.jpg';
import watch2_1200 from './assets/images/1200/watch2.jpg';
import watch3_1200 from './assets/images/1200/watch3.jpg';
import watch5_1200 from './assets/images/1200/watch5.jpg';
import whiteShirt_1200 from './assets/images/1200/whiteShirt.jpg';
import yellowShirt_1200 from './assets/images/1200/yellowShirt.jpg';
import basketballShirt_388 from './assets/images/388/basketballShirt.jpg';
import blackShirt_388 from './assets/images/388/blackShirt.jpg';
import clock_388 from './assets/images/388/clock.jpg';
import dog_388 from './assets/images/388/dog.jpg';
import parrot_388 from './assets/images/388/parrot.jpg';
import services_388 from './assets/images/388/services.jpg';
import snake_388 from './assets/images/388/snake.jpg';
import soccerShirt_388 from './assets/images/388/soccerShirt.jpg';
import sweater_388 from './assets/images/388/sweater.jpg';
import toys_388 from './assets/images/388/toys.jpg';
import watch1_388 from './assets/images/388/watch1.jpg';
import watch2_388 from './assets/images/388/watch2.jpg';
import watch3_388 from './assets/images/388/watch3.jpg';
import watch5_388 from './assets/images/388/watch5.jpg';
import whiteShirt_388 from './assets/images/388/whiteShirt.jpg';
import yellowShirt_388 from './assets/images/388/yellowShirt.jpg';
import basketballShirt_100 from './assets/images/100/basketballShirt.jpg';
import blackShirt_100 from './assets/images/100/blackShirt.jpg';
import clock_100 from './assets/images/100/clock.jpg';
import dog_100 from './assets/images/100/dog.jpg';
import parrot_100 from './assets/images/100/parrot.jpg';
import services_100 from './assets/images/100/services.jpg';
import snake_100 from './assets/images/100/snake.jpg';
import soccerShirt_100 from './assets/images/100/soccerShirt.jpg';
import sweater_100 from './assets/images/100/sweater.jpg';
import toys_100 from './assets/images/100/toys.jpg';
import watch1_100 from './assets/images/100/watch1.jpg';
import watch2_100 from './assets/images/100/watch2.jpg';
import watch3_100 from './assets/images/100/watch3.jpg';
import watch5_100 from './assets/images/100/watch5.jpg';
import whiteShirt_100 from './assets/images/100/whiteShirt.jpg';
import yellowShirt_100 from './assets/images/100/yellowShirt.jpg';

const loaded_imgs = {
  basketballShirt: [basketballShirt_1200, basketballShirt_388, basketballShirt_100], 
  blackShirt: [blackShirt_1200, blackShirt_388, blackShirt_100], 
  clock: [clock_1200, clock_388, clock_100], 
  dog: [dog_1200, dog_388, dog_100], 
  parrot: [parrot_1200, parrot_388, parrot_100], 
  services: [services_1200, services_388, services_100], 
  snake: [snake_1200, snake_388, snake_100], 
  soccerShirt: [soccerShirt_1200, soccerShirt_388, soccerShirt_100], 
  sweater: [sweater_1200, sweater_388, sweater_100], 
  toys: [toys_1200, toys_388, toys_100], 
  watch1: [watch1_1200, watch1_388, watch1_100], 
  watch2: [watch2_1200, watch2_388, watch2_100], 
  watch3: [watch3_1200, watch3_388, watch3_100], 
  watch5: [watch5_1200, watch5_388, watch5_100], 
  whiteShirt: [whiteShirt_1200, whiteShirt_388, whiteShirt_100], 
  yellowShirt: [yellowShirt_1200, yellowShirt_388, yellowShirt_100], 
}


export const data = {
  sellers: [
    {
      username: "Jessica", 
      phone: "+1" + Math.floor(Math.random() * 10000000000),
      get email(){return this.username.toLowerCase() + Math.floor(Math.random() * 1000) + '@gmail.com'},
      verified: true,
      // get items(){return data.items.filter(item => item._seller === this.username)}
    },
    {
      username: "Dustin", 
      phone: "+1" + Math.floor(Math.random() * 10000000000),
      get email(){return this.username.toLowerCase() + Math.floor(Math.random() * 1000) + '@gmail.com'},
      verified: true,
      // get items(){return data.items.filter(item => item._seller === this.username)}
    },
    {
      username: "Petter", 
      phone: "+1" + Math.floor(Math.random() * 10000000000),
      get email(){return this.username.toLowerCase() + Math.floor(Math.random() * 1000) + '@gmail.com'},
      verified: true,
      // get items(){return data.items.filter(item => item._seller === this.username)}
    },
    {
      username: "TonyStevenson", 
      phone: "+1" + Math.floor(Math.random() * 10000000000),
      get email(){return this.username.toLowerCase() + Math.floor(Math.random() * 1000) + '@gmail.com'},
      verified: false,
      // get items(){return data.items.filter(item => item._seller === this.username)}
    },
    {
      username: "ClockMan", 
      phone: "+1" + Math.floor(Math.random() * 10000000000),
      get email(){return this.username.toLowerCase() + Math.floor(Math.random() * 1000) + '@gmail.com'},
      verified: true,
      // get items(){return data.items.filter(item => item._seller === this.username)}
    },
  ], 

  items: [
    {
      category: "clothes",
      path: "watch2", 
      name: "Johny Deep",
      description: "Only selling those to buy a lot more wine.",
      price: "1000",
      quality: "Okay", 
      size: "45", 
      _seller: "ClockMan", 
      get seller(){return data.sellers.find(seller => seller.username === this._seller)},
      get imgs(){return loaded_imgs[this.path]},
      quantity: 3,
      inCart: false,
      best: false
    },
    {
      category: "clothes",
      path: "watch1", 
      name: "Ivan Bieber",
      description: "This is the status watch. And the brand speaks for itself, barely worn.",
      price: "4000",
      quality: "Okay", 
      size: "40", 
      _seller: "ClockMan", 
      get seller(){return data.sellers.find(seller => seller.username === this._seller)},
      get imgs(){return loaded_imgs[this.path]},
      quantity: 2,
      inCart: false,
      best: false
    },
    {
      category: "clothes",
      path: "blackShirt", 
      name: "Solid Black Shirt",
      description: "Good quality. Brand new, selling it only because the color doesn't go with my green eyes.",
      price: "35",
      quality: "Good", 
      size: "XL", 
      _seller: "Jessica", 
      get seller(){return data.sellers.find(seller => seller.username === this._seller)},
      get imgs(){return loaded_imgs[this.path]},
      quantity: 2,
      inCart: false,
      best: true
    },
    {
      category: "clothes",
      path: "whiteShirt", 
      name: "Classic White Shirt",
      description: "Сollectible, it was worn by Tony Stevenson.",
      price: "1000",
      quality: "Good", 
      size: "L", 
      _seller: "TonyStevenson", 
      get seller(){return data.sellers.find(seller => seller.username === this._seller)},
      get imgs(){return loaded_imgs[this.path]},
      quantity: 1,
      inCart: false,
      best: false
    },
    {
      category: "clothes",
      path: "yellowShirt", 
      name: "Ungrateful Shirt",
      description: "Сollectible, it was worn by Tony Stevenson.",
      price: "1000",
      quality: "Splendid", 
      size: "L", 
      _seller: "TonyStevenson", 
      get seller(){return data.sellers.find(seller => seller.username === this._seller)},
      get imgs(){return loaded_imgs[this.path]},
      quantity: 1,
      inCart: false,
      best: false
    },
    {
      category: "clothes",
      path: "basketballShirt", 
      name: "Pro Cop Shrit",
      description: "Good quality. Brand new, selling it only because the color doesn't go with my green eyes.",
      price: "40",
      quality: "Good", 
      size: "XL", 
      _seller: "Jessica", 
      get seller(){return data.sellers.find(seller => seller.username === this._seller)},
      get imgs(){return loaded_imgs[this.path]},
      quantity: 2,
      inCart: false,
      best: true
    },
    {
      category: "clothes",
      path: "watch5", 
      name: "Julia Bob",
      description: "You will love those watch, limited edition. Hardly worn.",
      price: "3399",
      quality: "Excellent", 
      size: "42", 
      _seller: "ClockMan", 
      get seller(){return data.sellers.find(seller => seller.username === this._seller)},
      get imgs(){return loaded_imgs[this.path]},
      quantity: 1,
      inCart: false,
      best: false
    },
    {
      category: "clothes",
      path: "watch3", 
      name: "Julia Bob",
      description: "You will love those watch, limited edition. Hardly worn.",
      price: "300",
      quality: "Good", 
      size: "40", 
      _seller: "ClockMan", 
      get seller(){return data.sellers.find(seller => seller.username === this._seller)},
      get imgs(){return loaded_imgs[this.path]},
      quantity: 1,
      inCart: false,
      best: false
    },
    {
      category: "clothes",
      path: "soccerShirt", 
      name: "Nelson Shirt",
      description: "Limited edition. Only for true fans.",
      price: "250",
      quality: "Brand New", 
      size: 'M', 
      _seller: "TonyStevenson", 
      get seller(){return data.sellers.find(seller => seller.username === this._seller)},
      get imgs(){return loaded_imgs[this.path]},
      quantity: 5,
      inCart: false,
      best: false
    },
    {
      category: "clothes",
      path: "sweater", 
      name: "HackerMan2009",
      description: "If you're all about that 'The Pentagon' thing.",
      price: "400",
      quality: "Brand New", 
      size: 'M', 
      _seller: "Jessica", 
      get seller(){return data.sellers.find(seller => seller.username === this._seller)},
      get imgs(){return loaded_imgs[this.path]},
      quantity: 15,
      inCart: false,
      best: false
    },
    {
      category: "services",
      path: "gardenerServices", 
      name: "Gardeners Services",
      description: "Well, I started out as a hobbyist gardener now I have 32+ years experience, so if you some kind of a garden to take care with, I'm at your services.",
      price: "60",
      quality: "Good", 
      size: null, 
      _seller: "Dustin", 
      get seller(){return data.sellers.find(seller => seller.username === this._seller)},
      get imgs(){return loaded_imgs[this.category]},
      quantity: null,
      inCart: false,
      best: false
    },
    {
      category: "services",
      path: "plumbingServices", 
      name: "Plumbing Services",
      description: "Bet ya won't find anyone who can handle your holey sink than I can.",
      price: "60",
      quality: "Good", 
      size: null, 
      _seller: "Dustin", 
      get seller(){return data.sellers.find(seller => seller.username === this._seller)},
      get imgs(){return loaded_imgs[this.category]},
      quantity: null,
      inCart: false,
      best: false
    },
    {
      category: "animals",
      path: "parrot", 
      name: "Kesha",
      description: "Pretty young parrot. He's super lovely and requires constant attention.",
      price: "30",
      quality: null, 
      size: null, 
      _seller: "Petter", 
      get seller(){return data.sellers.find(seller => seller.username === this._seller)},
      get imgs(){return loaded_imgs[this.path]},
      quantity: 15,
      inCart: false,
      best: true,
    },
    {
      category: "animals",
      path: "snake", 
      name: "Pythonick",
      description: "Pretty young snake. It's super lovely and peaceful, plus totally harmless.",
      price: "150",
      quality: null, 
      size: null, 
      _seller: "Petter", 
      get seller(){return data.sellers.find(seller => seller.username === this._seller)},
      get imgs(){return loaded_imgs[this.path]},
      quantity: 3,
      inCart: false,
      best: true
    },
    {
      category: "animals",
      path: "dog", 
      name: "Rocky",
      description: "Pretty young dog. It's super lovely and peaceful, plus totally harmless. Will be the best friend for ya.",
      price: "350",
      quality: null, 
      size: null, 
      _seller: "Petter", 
      get seller(){return data.sellers.find(seller => seller.username === this._seller)},
      get imgs(){return loaded_imgs[this.path]},
      quantity: 1,
      inCart: false,
      best: false
    },
  ]
}

export {logo, cart, surfing};