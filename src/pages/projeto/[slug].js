import Image from 'next/image'
import styles from './slug.module.css'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import { handleJSONfile } from '../../utils/jsonHandler'
import { handleJSONfiles } from '../../utils/jsonHandler'
import { RxPencil1 } from 'react-icons/rx'
import ReactMarkdown from 'react-markdown'
import React from 'react'


const handleMove = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export default function Projeto({ projeto }) {

    // var dataForm = projeto.data;
    // dataForm = data.substring(8, 10) + '/' + data.substring(5, 7) + '/' + data.substring(0, 4);

  return (
    <>
      <Navbar/>
      <div className={styles.topPart}>
        <Image
          src={projeto.imagem}
          fill
          className={styles.topImg}
          style={{objectFit: 'cover', background: 'black'}}
          alt="Imagem Capa"
        />
        <div className="newStyle"></div>
        <div className={styles.postBlock}>
          <div className={styles.text}>
            <h3 className={styles.genero}>{projeto.genero}</h3>
            <h2 className={styles.title}>{projeto.titulo}</h2>
            <h3 className={styles.subTitle}>{projeto.previa}</h3>
          </div>
          <div className={styles.details}>
            {/* <a href={linkedin} target="_blank" className={styles.autor}>
              {projeto.autor}
            </a> */}
            <p className={styles.data}>
              {projeto.data}
            </p>
          </div>
        </div>
      </div>
      <div className={styles.markDown}>
        <ReactMarkdown className={styles.markdown}>
          {projeto.conteudo}
        </ReactMarkdown>
      </div>
      <div className={styles.bottomContainer}>
        {/* <div className={styles.authorAndPencil}>
          <RxPencil1 />
          <p className={styles.authorName}>
            <a href={linkedin} target="_blank" className={styles.autor}>
              {projeto.autor}
            </a>
          </p>
        </div> */}
        <div className={styles.buttonContainer}>
          <button onClick={handleMove}>
          voltar
          </button>
        </div>
      </div>
      <Footer/>
    </>
  )
}


export async function getStaticProps({ params: { slug } }) {

  const projeto = handleJSONfile(`content/projetos/${slug}.json`);

  return {
    props: { projeto },
  };
}


export async function getStaticPaths() {
  const projetos = handleJSONfiles('content/projetos');

  const paths = projetos.map(projeto => {
    return { params: { slug: projeto.fileName } }
  });

  return {
    paths,
    fallback: false
  }
}