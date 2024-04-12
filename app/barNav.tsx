
import "./barNav-style.css";
import Link from 'next/link'

const barNav = () => {
    return (
        <div className="navigation">

          <div className="block-nav-active" id="menu">

            <Link href="#photoProfil">Profil</Link>
            <Link href="#experience">Experiences</Link>
            <Link href="#projet">Projets</Link>
            <Link href="#langages">Langages</Link>
            <Link target="_blank" href="#contact">CV</Link>
            <Link href="#contact">Contact</Link>
          </div>
        </div>
    );
  };
  
  export default barNav;