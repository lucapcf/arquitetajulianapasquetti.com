import CardProjeto from '../cardProjeto'
import styles from './gridProjetos.module.css'

export default function GridProjetos({ projetos }) {
  return (
    <div className={styles.grid}>
      {projetos && projetos.map((projeto, i) => (
        <div key={i} className={styles.gridItem}>
          <CardProjeto projeto={projeto} />
        </div>
      ))}
    </div>
  );
}
