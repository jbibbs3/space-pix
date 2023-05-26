import React, { useEffect, useState } from "react";



const Main = () => {
  const [img, setImg] = useState([]);

  

  const fetchImage = async () => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/photos`);
        const jsonData = await response.json();
        setImg(jsonData);
    } catch (error) {
        console.error("Error fetching team data:", error);
    }
};

  useEffect(() => {
    fetchImage();
  }, []);

  return ( 
    <>
    <h1>Space Pix</h1>
      <img src={img.url} alt="image" />
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Maiores eveniet eum dolores ipsa odio obcaecati, molestiae asperiores culpa libero voluptatum. 
        Sapiente facere repudiandae aliquam animi natus sint pariatur alias. Repudiandae!</p>
        <button>Like</button>
    </>
  );
}



export default Main;




