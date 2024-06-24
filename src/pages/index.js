import Navbar from '../components/navbar'
import Footer from '../components/footer'
import styles from '../styles/home.module.css'

import React from 'react'

export default function Home() {
  const video = "media/projetos/dinda/video_churrasqueira_sc.mp4";

  return (
    <>
      <Navbar/>
      <div className={styles.titulo}>
        <h1>Tire o seu sonho do papel.</h1>
      </div>
      <center>
        <div className={styles.video}>
          <video autoPlay loop id="video_pagina_inicial">
            <source src={video} type="video/mp4"/>
          </video>
        </div>
      </center>
      <Footer/>
    </>
  );
}