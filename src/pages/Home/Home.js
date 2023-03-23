import { useEffect, useState } from 'react'
import Actions from './Actions'
import Cards from './Cards'
import Form from './Form'
import './Home.css'
import Style from './Style'



const Home = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    function handleScroll() {
      setScrollY(window.scrollY);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <main id='home'>
      <div className='titles-bg'>
        {/* <div className='medidor'></div> */}
        <section className='homeBannerContainer'>
          <div className='mainImgContainer'>     
            <img className='mainImage' src='./images/main/main_image.png' alt='main' />        
            <img className='mainImage2' src='./images/main/main_image 2.png' alt='main' {...scrollY > 200 ? {style: {objectPosition: 'right'}} : {style: {objectPosition: 'left'}}} />
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