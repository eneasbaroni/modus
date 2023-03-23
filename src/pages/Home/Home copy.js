import './Home.css'

const Home = () => {
  return (
    <main id='home'>
      <div className='medidor'></div>
      <div className='mainImgContainer'>
        <img className='mainImage' src='./images/main_image.png' alt='main' />        
      </div>
      <h1><span>Gestionamos</span> la<br/>conversación de<br/>tu marca con equipos<br/>especializados de<br/>respuesta</h1>

    </main>
  )
}

export default Home