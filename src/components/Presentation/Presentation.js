import { useRef } from 'react';
import './Presentation.css'
import usePreventBodyScroll from "./usePreventBodyScroll";


const list = [
  {id: 1, name: 'item1'},
  {id: 2, name: 'item2'},
  {id: 3, name: 'item3'},
  {id: 4, name: 'item4'},
]

const Presentation = () => {
  const { disableScroll, enableScroll } = usePreventBodyScroll();
  const sliderRef = useRef(null);

  const handleWheel = (ev) => {
    const slider = sliderRef.current;
    const scrollStep = slider.clientWidth;
    const scrollDirection = ev.deltaY > 0 ? 1 : -1;
    slider.scrollLeft += scrollStep * scrollDirection;

    // Comprobar si se ha alcanzado el final del elemento desplazable
    if (slider.scrollLeft + slider.clientWidth === slider.scrollWidth) {
      enableScroll();
    }
  };

  return (
    <div id='presentation' onMouseEnter={disableScroll} onMouseLeave={enableScroll}>
      <div id='slider' ref={sliderRef} onWheel={handleWheel}>
        {list.map((item) => (
          <div key={item.id} className='item'>
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Presentation
