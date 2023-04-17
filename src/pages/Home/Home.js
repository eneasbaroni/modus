import Actions from './components/Actions'
import Cards from './components/Cards/Cards'
import Form from './components/Form'
import Presentation from './components/Presentation/Presentation'
import './Home.css'
import Style from './components/Style' 
import Header from './components/Header/Header'
import useScreenSize from '../../hooks/useScreenSize'
import HeaderMobile from './components/Header/HeaderMobile'


const Home = () => {
  const windowSize = useScreenSize()

  return (
    <main id='home'>
      {windowSize.width > 1000 ? <Header/> : <HeaderMobile/>}      
      <Presentation/>
      <Actions/>
      <Style/>
      <Cards/>
      <Form/>
    </main>
  )
}

export default Home
