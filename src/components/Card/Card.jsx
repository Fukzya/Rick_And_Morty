import styles from "./Card.module.css"

export default function Card(props) {
   return (
      <div className={styles.card}>
         <button className={styles.boton} onClick={props.onClose}>X</button>
         <img src={props.image} alt='' />
         <h2 className={styles.elementos}>{props.name}</h2>
         <h2 className={styles.elementos}>{props.status}</h2>
         <h2 className={styles.elementos}>{props.species}</h2>
         <h2 className={styles.elementos}>{props.gender}</h2>
         <h3 className={styles.elementos}>{props.origin}</h3>
      </div>
   );
}
