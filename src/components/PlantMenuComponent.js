import React, { useState } from 'react'; 
 
const items = ['item1', 'item2', 'item3', 'item4']; 
 
function CircularMenu() { 
  const [selectedIndex, setSelectedIndex] = useState(0); 
   
  const handleClick = (index) => { 
    setSelectedIndex(index); 
  } 
 
  const rotate = (index) => { 
    const degree = (360 / items.length) * index; 
    return { transform: `rotate(${degree}deg)` }; 
  } 
 
  return ( 
    <div className="menu-container"> 
      {items.map((item, index) => ( 
        <div 
          key={index} 
          className="menu-item" 
          style={rotate(index)} 
          onClick={() => handleClick(index)} 
        > 
          {item} 
        </div> 
      ))} 
    </div> 
  ); 
} 
 
export default CircularMenu; 