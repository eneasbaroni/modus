import Actions from './components/Actions'
import Cards from './components/Cards/Cards'
import Form from './components/Form'
import Presentation from './components/Presentation/Presentation'
import './Home.css'
import Style from './components/Style' 


const Home = () => {
  


  return (
    <main id='home'>

      <Presentation/>
      <Actions/>
      <Style/>
      <Cards/>
      <Form/>

    </main>
  )
}

export default Home
