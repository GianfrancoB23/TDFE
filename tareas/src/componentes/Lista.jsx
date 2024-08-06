import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const Lista = () => {

    const maximas = useSelector(state => state.pronostico.maximas);
    const [fahreinheit, setFahreinheit] = useState([]);

    useEffect(() => {

        let tempsF = [];
        for (let i = 0; i < maximas.length; i++) {
            let tF = maximas[i] * 1.8 + 32;
            tempsF.push(tF);
        }
        setFahreinheit(tempsF);

    }, [maximas])
    

  return (
    <div>
        <h2>Lista</h2>
        {fahreinheit.map((temp,i) => <p key={i}>{temp}</p>)}
    </div>
  )
}

export default Lista

/* 
{maximas.map((t,i) => <p key={i}>{t * 1.8 + 32}</p>)}
 */