import React, { useState } from "react";


function ImageSlider() {
  const images = [
    "https://i0.wp.com/quran-for-all.com/blog/wp-content/uploads/2018/04/How-to-Attain-Peace-of-Mind-Tranquility-and-Contentment.jpg?fit=590%2C390&ssl=1",
    "https://s3.envato.com/files/450073952/DSC08764.jpg",
    "https://www.mozambique.co.za/images/machangulo-beach-lodge-relaxing-at-beach-bar-590x390.jpg",
    "https://www.africawellness.co.za/images/banyan-tree-seychelles-yoga-poses-01-590x390.jpg",
    // "https://images.theconversation.com/files/182225/original/file-20170816-32661-1u6lzxd.jpeg?ixlib=rb-4.1.0&q=45&auto=format&w=926&fit=clip",
    // "https://i.ytimg.com/vi/Mkh2qe6-t_4/maxresdefault.jpg",
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  //navigation
  const handleClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="image-slider" onClick={handleClick}>
      <div className="container">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="slider-image"
        />
      </div>
    </div>
  );
}

export default ImageSlider;