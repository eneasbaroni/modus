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

  const onWheel = (ev) => {
    const slider = document.getElementById('slider');
    slider.scrollLeft += ev.deltaY;
  }


  return (
    <div id='presentation' onMouseEnter={disableScroll} onMouseLeave={enableScroll}>
      <div id='slider' onWheel={onWheel}>
        {list.map((item) => (
          <div key={item.id} className='item'>
            {item.name}
          </div>
        ))}
      </div>

    </div>
  )
}

export default Presentation
