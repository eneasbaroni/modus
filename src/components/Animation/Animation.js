import Lottie from 'lottie-web';
import animationData from '../../animations/totoro.json';
import React, { useEffect, useRef } from 'react';

const Animation = () => {

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
    });
  }, []);


  return (
    <div ref={container} style={{ width: 300, height: 300 }}></div>
  )
}

export default Animation