import { useState, useEffect } from 'react';
import s from "./Welcome.module.css"

export default function Welcome ({ isOpen, onClose }){
    return(
        <div className={s.overlay} onClick={Onclose}>
             <div className={s.panel} onClick={(e) => e.stopPropagation()}>
        
        {/* Decoraciones */}
        <div className={s.topDecoration}>✦ ✦ ✦</div>
        <div className={s.bottomDecoration}>✦ ✦ ✦</div>
                <button className={s.closeBtn} onClick={onClose}>✕</button>
                <div>
                    <img src="" alt="" />

                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia recusandae error molestias exercitationem 
                        esse! Ab culpa architecto repudiandae iusto doloribus quidem itaque autem temporibus sunt cumque? Autem amet 
                        itaque ipsum.
                    </p>
                </div>
            </div>

            
        </div>
    )
}