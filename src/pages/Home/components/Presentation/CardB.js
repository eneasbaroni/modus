import { useEffect } from 'react';
import './CardB.css'

const CardA = () => {

  useEffect(() => {
    const el = document.getElementById('placaB');
    const height = el.clientHeight;
    const width = el.clientWidth;

    const handleMouseMove = (e) => {
      const { layerX, layerY } = e;
    
      const yRotation = ((layerX - width / 2) / width) * 20;
    
      const xRotation = ((layerY - height / 2) / height) * 20;
    
      const transformString = `
        perspective(100vw)
        
        rotateX(${xRotation}deg)
        rotateY(${yRotation}deg)
      `;
    
      el.style.transform = transformString;
    };
    
    /* const handleMouseOut = () => {
      el.style.transform = 'perspective(1vw) rotateX(0) rotateY(0)';
    }; */
    
    el.addEventListener('mousemove', handleMouseMove);
    /* el.addEventListener('mouseout', handleMouseOut); */
    
    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      /* el.removeEventListener('mouseout', handleMouseOut); */
    };
  }, []);

  return (
    <div className='placaContainer'>
      <div className='placa placaB'>
        <h1>¿De qué sirve informar<br/><span>si no vas a conversar?</span></h1>
        <div id='placaB'></div>
      </div>
    </div>
  )
}

export default CardA