import Animation from '../../components/Animation/Animation'
import animationData from '../../animations/pig.gif'
import './Home.css'

const Home = () => {
  return (
    <div class="content">
      <div class="card">
        <div class="card-content">
            <h3>Headline</h3>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
        </div>
     </div>  
            <Animation/>
           {/* gif image */}
            <img src={animationData} alt="totoro" />
    </div>
  )
}

export default Home