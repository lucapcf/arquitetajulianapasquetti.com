import Link from 'next/link';
import Image from 'next/image';
import styles from './servicoL.module.css';

export default function ServicoL({ titulo, texto, imagem }) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.img_container}>
          <Image
            src={imagem}
            layout="fill"
            objectFit="cover"
            alt="foto projeto de interiores"
          />
        </div>
        <div className={styles.container_servico}>
          <h2>{titulo}</h2>
          <p>{texto}</p>
          <div>
            <a href="https://wa.me/5551981685205?text=Olá Juliana, gostaria de fazer um orçamento para um projeto de interior." target="_blank">
              <button className={styles.button_orcamento} value="Fazer orçamento">Fazer orçamento</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
