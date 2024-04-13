
import "./barNav-style.css";
import Link from 'next/link'

const barNav = () => {
  return (
    <div className="navigation">

      <div className="block-nav-active" id="menu">

        <Link href="#photoProfil">Profil</Link>
        <Link href="#experience">Expériences</Link>
        <Link href="#projet">Projets</Link>
        <Link href="#langages">Langages</Link>
        <Link target="_blank" href="./CV Louis Verbrugge Etudiant informatique.pdf">CV</Link>
        <Link href="#contact">Contact</Link>
      </div>
    </div>
  );
};

export default barNav;