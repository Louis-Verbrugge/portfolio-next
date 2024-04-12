
import "./experience-style.css";
import Link from 'next/link'

const experience = () => {
    return (

        <div className="block-experience new-block-page" id="experience">
        <h2 className="titlePage">Experience</h2>

        <div className="all-carte-experience">
          <div className="experience">
            <h3>Club Saint-Sébastien à Cysoing</h3>
            <div className="carte">
              <p>Champion du Nord de tir à l’arc poulie depuis 2 ans.
                Je forme et accompagne des archers débutants 2 fois par
                semaine.
              </p>

            </div>
          </div>
          <div className="experience">
            <h3>Groupe ‘Code en Equipe’</h3>
            <div className="carte">
              <p>Passionné d’informatique, j’ai rejoint ce groupe en ligne
                afin d’aider les membres sur des problématiques de
                codage. Ce groupe me permet également de p</p>
            </div>
          </div>

          <div className="experience">
            <h3>Expérience en informatique</h3>
            <div className="carte">
              <p>Création d’un GitHub : <Link
                href="https://github.com/Louis-Verbrugge">https://github.com/Louis-Verbrugge</Link>
                contenant mes projets
                personnels en
                informatique.
              </p>
            </div>
          </div>
          <div className="experience">
            <h3>2020-2021</h3>
            <div className="carte">
              <p>Formation Développeur Web et Web Mobile</p>
              <p>Wild Code School</p>
            </div>
          </div>
          <div className="experience">
            <h3>2020-2021</h3>
            <div className="carte">
              <p>Formation Développeur Web et Web Mobile</p>
              <p>Wild Code School</p>
            </div>
          </div>
        </div>
      </div>

    );
  };
  
  export default experience;