import { useEffect, useState } from 'react'
import Actions from './Actions'
import Cards from './Cards'
import Form from './Form'
import './Home.css'
import Style from './Style'



const Home = () => {
  /* const [scrollY, setScrollY] = useState(0) */
  const [position, setPosition] = useState('0%')

  const windowHeight = window.innerHeight;


  useEffect(() => {
    function handleScroll() {
      /* setScrollY(window.scrollY); */
      if (window.scrollY > windowHeight) {
        setPosition('100%')        
      } else {
      setPosition(window.scrollY/windowHeight*100 + '%')
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }; // eslint-disable-next-line
  }, []);


  return (
    <main id='home'>
      <div className='titles-bg'>
        {/* <div className='medidor'></div> */}
        <section className='homeBannerContainer'>
          <div className='mainImgContainer'>     
            <img className='mainImage' src='./images/main/main_image.png' alt='main' />        
            <img className='mainImage2' src='./images/main/main_image 2.png' alt='main' style={{objectPosition: position }}/>
          </div> 
          <div className='mainTitleContainer'>        
            <h1><span>Gestionamos</span> la<br/>conversación de<br/>tu marca con equipos<br/>especializados de<br/>respuesta</h1>
            <h2 className='mainTextMask'><span>Gestionamos</span> la<br/>conversación de<br/>tu marca con equipos<br/>especializados de<br/>respuesta</h2>
          </div>     
        </section>
        <div className='mainBtnContainer'>
          <a className='mainBtn' href='#actions'>¿QUÉ NECESITÁS?</a>
          <img className='mainBtnArrow' src='./images/main/main_arrow.svg' alt='arrow' />
        </div>

      <Actions/>
      </div>
      <Style/>
      <Cards/>
      <Form/>

    </main>
  )
}

export default Home