import styles from './ListSelector.module.css'
import { useState } from 'react';

function ListSelector(props){
    const [selectCity, setSelectCity] = useState();
    const handleSelector = ()=>{
        props.setCity(selectCity);
    }
    return(
        <div className={styles.container}>
            <select onChange={(e)=>{setSelectCity(e.target.value)}}>
                <option value="Mendoza">Mendoza</option>
                <option value="San Juan">San Juan</option>
                <option value="San Luis">San Luis</option>
                <option value="Cordoba">Cordoba</option>
            </select>
            <button onClick={handleSelector}>Enviar</button>
        </div>
    )
}

export default ListSelector