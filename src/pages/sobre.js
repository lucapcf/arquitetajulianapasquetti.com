import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/sobre.module.css'

export default function Sobre() {
  const img = "media/juliana.jpg";
  const texto = `Me chamo Juliana Pasquetti Comelli, formada há 10 anos em 
  arquitetura. Sou mestranda em arquitetura de interiores. Atuo como autônoma 
  desde 2014 e desde então ajudo meus clientes a tirar do papel um dos maiores 
  sonhos.`

  return (
    <>
      <Navbar/>
      <h1>Sobre</h1>
      <div className={styles.container}>
        <div className={styles.container_img}>
          <Image
            src={img}
            layout="fill"
            objectFit="cover"
            alt="foto projeto de interiores"
          />
        </div>
        <div className={styles.box_sobre}>
          <h3 className={styles.p_sobre}>
            {texto}
          </h3>
        </div>
      </div>
      <Footer/>
    </>
  );
}