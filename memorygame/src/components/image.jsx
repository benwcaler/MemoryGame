import React from "react";
import images from "./images.json"

export const Image = props => (
  <div>
    {images.map(img => 
      <img height="50px" src={img} key={img} alt={img}/>)
    
  }
</div>

);

export default Image;