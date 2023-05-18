import styles from './Uv.module.css';

function Uv(props){
    return(
        <div className={styles.container}>
            <div className={styles.title}>Indice UV</div>
            <div className={styles.uv}>{`${props.uv}`}</div>
        </div>
    )
}

export default Uv;