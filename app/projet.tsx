

import "./projet-style.css";
import Image from "next/image";
import Link from 'next/link'


const projet = () => {
  return (
    <div className="blockColumnProjet new-block-page" id="projet">
      <p className="titlePage">PROJETS</p>

      <div className="blockProjet">

        <div className="projet">
          <Image
            src="/image/projets/img_icone_pong.png"
            alt="img_icone_pong.png"
            width={150}
            height={150}
            priority
          />
          <p>pong</p>
        </div>
        <div className="projet">
          <Image
            src="/image/projets/img_icone_spaceInvaders.jpg"
            alt="img_icone_spaceInvaders.jpg"
            width={150}
            height={150}
            priority
          />
          <p>space invaders</p>
        </div>
        <div className="projet">
          <Link target="_blank" href="https://flappybird-lv.netlify.app/">
            <Image
              src="/image/projets/img_icone_flappyBird.jpg"
              alt="img_icone_flappyBird.jpg"
              width={150}
              height={150}
              priority
            />
          </Link>
          <p>flappy bird</p>
        </div>
        <div className="projet">
          <Link href="https://2048-lv.netlify.app">
            <Image
              src="/image/projets/img_icone_2048.svg"
              alt="img_icone_2048_2.svg"
              width={150}
              height={150}
              priority
            />
          </Link>
          <p>2048</p>
        </div>
        <div className="projet">
          <Link href="https://puissance4-lv.netlify.app/">
            <Image
              src="/image/projets/img_icone_puissance4.svg"
              alt="img_icone_puissance4.svg"
              width={150}
              height={150}
              priority
            />
          </Link>
          <p>Puissance 4</p>
        </div>
      </div>
    </div>
  );
};

export default projet;