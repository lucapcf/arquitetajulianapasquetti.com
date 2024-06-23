import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import GridProjetos from '@/components/gridProjetos'
import { handleJSONfiles } from '@/utils/jsonHandler'

export default function Projetos({ projetos }) {
  
  return (
    <>
      <Navbar/>
      <h1>Projetos</h1>
      <GridProjetos projetos = {projetos}/>
      <Footer/>
    </>
  );
}

export async function getStaticProps() {

  const projetos = handleJSONfiles('content/projetos');

  return {
    props: { projetos },
  };
}