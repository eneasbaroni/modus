import { useEffect, useRef, useState } from 'react';
import CardA from './CardA';
import CardB from './CardB';
import CardC from './CardC';
import './Presentation.css'
import usePreventBodyScroll from "./usePreventBodyScroll";
import CardD from './CardD';
import CardE from './CardE';


const Presentation = () => {
  const [cardActive, setCardActive] = useState(1)
  const { disableScroll, enableScroll } = usePreventBodyScroll();
  const sliderRef = useRef(null);
  const [scrollCount, setScrollCount] = useState(0);


  const handleWheel = (ev) => {
    const slider = sliderRef.current;
    const scrollStep = slider.clientWidth;
    const scrollDirection = ev.deltaY > 0 ? 1 : -1;
    
    setScrollCount(scrollCount + 1);
  
    // Cambiar el número en la comparación para requerir más scroll para avanzar a la siguiente tarjeta
    if (scrollCount > 2) {
      slider.scrollLeft += scrollStep * scrollDirection;
      setScrollCount(0);
  }

    // Comprobar si se ha alcanzado el final del elemento desplazable
    if (slider.scrollLeft + slider.clientWidth === slider.scrollWidth) {
      enableScroll();
    }
  };

  useEffect(() => {
    const slider = sliderRef.current;
    const handleScroll = () => {
      const cardWidth = slider.clientWidth;
      const cardNumber = Math.round(slider.scrollLeft / cardWidth) + 1;
      setCardActive(cardNumber);
    };
    slider.addEventListener('scroll', handleScroll);
    return () => slider.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNext = () => {
    const slider = sliderRef.current;
    const scrollStep = slider.clientWidth;
    slider.scrollLeft += scrollStep;
  };

  const handlePrevius = () => {
    const slider = sliderRef.current;
    const scrollStep = slider.clientWidth;
    slider.scrollLeft -= scrollStep;
  };


  return (
    <div id='presentation' onMouseEnter={disableScroll} onMouseLeave={enableScroll}>
      <div id='slider' ref={sliderRef} onWheel={handleWheel}>
        <img src='./images/main/presentation-arrow.svg' alt='arrow' className='previusArrow' onClick={handlePrevius} style={cardActive === 1 ? {display: 'none'} : {display: 'block'}}/>

        <CardE/>
        <CardA/>
        <CardD/>
        <CardB/>
        <CardC/> 

        <div className='cardMap'>
          <div className={`cardMapCircle ${cardActive === 1 ? 'circleMapActive' : ''}`}></div> 
          <div className={`cardMapCircle ${cardActive === 2 ? 'circleMapActive' : ''}`}></div> 
          <div className={`cardMapCircle ${cardActive === 3 ? 'circleMapActive' : ''}`}></div>                    
          <div className={`cardMapCircle ${cardActive === 4 ? 'circleMapActive' : ''}`}></div>                    
          <div className={`cardMapCircle ${cardActive === 5 ? 'circleMapActive' : ''}`}></div>                    
        </div>    
        
        <img src='./images/main/presentation-arrow.svg' alt='arrow' className='nextArrow' onClick={handleNext} style={cardActive === 5 ? {display: 'none'} : {display: 'block'}}/>

      </div>
    </div>
  );
};

export default Presentation
