import { Link } from 'react-router-dom'
import './FooterLinks.css'

const FooterLinks = ({page}) => {
   
  return (
    <secction id='footerLinks'>

        <Link to="/"> <img className='lnkTH' src='./images/main/linkToHome.svg' alt='Link BTN' /></Link>
            {page === "gestionpublica" ?             
                <Link to="/sector-privado"><img className='lnkTSP' src='./images/main/linkToSP-01.svg' alt='Link BTN'/></Link> :
                <Link to="/gestion-publica"><img className='lnkTGP' src='./images/main/linkToGP-01.svg' alt='Link BTN'/></Link>
            }     
        </secction>
  )
}

export default FooterLinks