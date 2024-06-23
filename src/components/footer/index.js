import Link from 'next/link';
import Image from 'next/image';
import styles from './footer.module.css';
import { FaBars, FaTimes, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const endereco = "Rua General Iba. Mesquita Ilha Moreira, 80";
  const complemento = "Ap. 701B";
  const cep = "91340-190";
  const copy = "© Arquiteta Juliana Pasquetti Comelli 2022. Todos os direitos reservados.";
  const nome ="Arquiteta Juliana Pasquetti Comelli";

  const img = "/media/logo_j_inverted.jpg";

  return (
    <>
      <footer className={styles.container_footer_1}>
        <div className={`${styles.container_footer_2} ${styles.top_footer}`}>
          <div className={styles.box_footer_logo}>
            <Image
              src={img}
              width={60}
              height={75}
              alt="Logo"
              className={styles.logo}
            />
          </div>
          <div className={styles.box_footer}>
            <p className={styles.footer_label}>
              {nome}
            </p>
            <div>
              <a href="https://www.linkedin.com/in/juliana-pasquetti-comelli-270b5b36"
              target='_blank' title="Esse link leva ao meu perfil no Linkedin">
                <button className={styles.button_redes_sociais} value="linkedin">
                  <FaLinkedin size={"fill"} />
                </button>
              </a>
              <a href="https://www.instagram.com/julipasquetti/"
              target='_blank' title="Esse link leva ao meu perfil no instagram">
                <button className={styles.button_redes_sociais} value="instagram">
                  <FaInstagram size={"fill"} />
                </button>
              </a>
            </div>
          </div>
          <div className={styles.endereco}>
            <p>Endereço:</p>
            <p>{endereco}</p>
            <p>{complemento}</p>
            <p>{cep}</p>
          </div>
        </div>
        <div className={`${styles.container_footer_2} ${styles.bottom_footer}`}>
          <p className={styles.footer_text}>
            {copy}
          </p>
        </div>
      </footer>
    </>
  );
}