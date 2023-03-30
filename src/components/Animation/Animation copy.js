import Lottie from 'lottie-web';
/* import A1 from '../../animations/A1.json'; */
import React, { useEffect, useRef } from 'react';
import './Animation.css';


const Animation = ({animation}) => { 
  
  const animationData = require(`../../animations/${animation}.json`);
  

  const container = useRef(null);

  useEffect(() => {
    /* vaciar container */
    container.current.innerHTML = '';


    Lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationData,
      initialSegment: [10, 80],
    });    
  }, []);


  return (
    <div className='animationContainer' ref={container}></div>
  )
}

export default Animation