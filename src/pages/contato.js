import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Formulario from '../components/formulario';

export default function Contato() {
  const titulo = "Vamos conversar";
  const celular = "51 981685205";
  return (
    <>
      <Navbar/>
      <h1>Contato</h1>
      <Formulario titulo = {titulo} celular = {celular}/>
      <Footer/>
    </>
  );
}