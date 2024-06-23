import Link from 'next/link';
import Image from 'next/image';
import styles from './cardProjeto.module.css';

export default function CardProjeto({ projeto }) {
  return (
    <>
      <Link href={`/projeto/${projeto.fileName}`} className={styles.link}>
        <div className={styles.card}>
          <div className={styles.imgWrapper}>
            <Image
              src={projeto.imagem}
              layout="fill"
              objectFit="cover"
              alt={projeto.titulo}
              className={styles.image}
            />
            <div className={styles.overlay}>
              <h3 className={styles.title}>{projeto.titulo}</h3>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
