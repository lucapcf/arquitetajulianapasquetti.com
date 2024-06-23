import Link from 'next/link'
import Image from 'next/image'
import styles from './navbar.module.css'
import logo_j from '../../../public/media/logo_j.jpg'

export default function Navbar() {
  const img = "/media/logo_j.jpg";

  return (
    <>
      <nav className={styles.navbar}>
        <ul className={styles.navLinks}>
          <li>
            <Link href={"/"}>
              <Image
                src={img}
                width={60}
                height={75}
                alt="Logo"
                className={styles.logo}
              />
            </Link>
          </li>
          <li><Link href="/sobre"><h3>Sobre</h3></Link></li>
          <li><Link href="/servicos"><h3>Serviços</h3></Link></li>
          <li><Link href="/projetos"><h3>Projetos</h3></Link></li>
          <li><Link href="/contato"><h3>Contato</h3></Link></li>
        </ul>
      </nav>
    </>
    
  );
}