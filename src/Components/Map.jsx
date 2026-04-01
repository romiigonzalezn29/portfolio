import s from './Map.module.css'
import house from '../assets/house.png'
import front from '../assets/front.png'
import interative from '../assets/interactive.png'
import lab from '../assets/lab.png'

export default function Map(){
    return(
        <div className={s.map}>
            <button className={s.btnHouse}>Casa</button>

            
            <img src={house} alt='Casa' className={s.house}/>
          


               
            <button className={s.btnFront}>front</button>

            <img src={front} alt='Front' className={s.front}/>

           

          
            <button className={s.btnLab} >Laboratorio</button>

            <img src={lab} alt='lab' className={s.lab} />
           

            
            <button className={s.btnInt}>Entretenimiento</button>

            <img src={interative} alt='Interactive' className={s.interative} />
            </div>

        
    )
}