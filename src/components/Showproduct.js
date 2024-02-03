import React, { createContext, useState } from "react";
import Howdies from '../Assests/howdies.jpg';
import watch from '../Assests/watch.jpg';
import Shoes from '../Assests/Shoes.jpg';
import Airpods from '../Assests/Airpods.jpg';
import brandshoes from '../Assests/brandshoes.jpg';
import howdiespant from '../Assests/mask.jpg';
import ring2 from '../Assests/ring2.jpg';
import ring from '../Assests/ring.jpg';
import ring3 from '../Assests/ring3.jpg';
import neckless3 from '../Assests/neckless 3.jpg';
import iphone from '../Assests/iphone.jpg';
import iphone13 from '../Assests/iphone13.jpg';
import iphone14 from '../Assests/iphone14.jpg';
import iphone15 from '../Assests/iphone14.jpg';

export const ProductsContext = createContext();

const ShowProductProvider = (props) => {
  const [products, setProducts] = useState([
    { id: 1, name: 'watch' , price: '50.00', status: 'hot', image: watch ,description:'Smartwatches come with digital displays, ranging from LCD to OLED, providing vibrant and high-resolution visuals.'},
    { id: 2, name: 'Shoes', price: '70.00', status: 'Left', image: Shoes ,description:"Shoes are worn to protect and comfort the feet, providing support and style" },
    { id: 3, name: 'howdiespant', price: '80.00', status: 'new', image: howdiespant ,description:"A hoodie is a sweatshirt or a jacket with a hood. " },
    { id: 4, name: 'Brandshoes', price: '80.00', status: 'new', image: brandshoes ,description:"A footwear brand that focuses on chic and affordability, most of its shoes are made from synthetic material. " },
    { id: 5, name: 'ring2', price: '80.00', status: 'hot', image: ring2 ,description:"A ring is a round band, usually made of metal, worn as ornamental jewelry" },
    { id: 6, name: 'ring', price: '80.00', status: 'new', image: ring,description:"A ring is a round band, usually made of metal, worn as ornamental jewelry" },
    { id: 7, name: 'neckless3', price: '50.00', status: 'new', image: neckless3 ,description:"A necklace can be a simple gold or silver chain, a length of beads or gems, or a pendant hanging from a cord."},
    { id: 8, name: 'ring3', price: '80.00', status: 'new', image: ring3 ,description:"A ring is a round band, usually made of metal, worn as ornamental jewelry"},
    { id: 9, name: 'Howdies', price: '50.00', status: 'hot', image: Howdies ,description:"A hoodie is a sweatshirt or a jacket with a hood."},
    { id: 10, name: 'Airpods', price: '50.00', status: 'hot', image: Airpods ,description:"AirPods Max are wireless Bluetooth over-ear headphones designed by Apple,"},
    { id: 11, name: 'iphone', price: '500.00', status: 'hot', image: iphone ,description:"iphone  are  greatest mobile version  designed by Apple,"},
    { id: 12, name: 'iphone14', price: '50.00', status: 'hot', image: iphone13 ,description:"iphone  are  greatest mobile version  designed by Apple,designed by Apple,"},
    { id: 13, name: 'iphone13', price: '50.00', status: 'hot', image: iphone14 ,description:"iphone  are  greatest mobile version  designed by Apple, designed by Apple,"},
    { id: 14, name: 'iphone14', price: '50.00', status: 'hot', image: iphone15 ,description:"iphone  are  greatest mobile version  designed by Apple, designed by Apple,"},
  ]);

  const updateProducts = (newProducts) => {
    setProducts(newProducts);
  };

  const contextValue = {
    products,
    updateProducts,
  };

  return (
    <ProductsContext.Provider value={contextValue}>
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ShowProductProvider;
