

import "./projet-style.css";
import Image from "next/image";

const projet = () => {
    return (
<div className="blockColumnProjet new-block-page" id="projet">
            <p className="titlePage">PROJETS</p>

            <div className="blockProjet">

              <div className="projet">
                <Image
                  src="/image/projets/img_icone_pong.png"
                  alt="img_icone_pong.png"
                  className="dark:invert"
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
                  className="dark:invert"
                  width={150}
                  height={150}
                  priority
                />
                <p>space invaders</p>
              </div>
              <div className="projet">
                <Image
                  src="/image/projets/img_icone_flappyBird.jpg"
                  alt="img_icone_flappyBird.jpg"
                  className="dark:invert"
                  width={150}
                  height={150}
                  priority
                />
                <p>flappy bird</p>
              </div>
              <div className="projet">
                <Image
                  src="/image/projets/img_icone_2048.svg"
                  alt="img_icone_2048_2.svg"
                  className="dark:invert"
                  width={150}
                  height={150}
                  priority
                />
                <p>2048</p>
              </div>
              <div className="projet">
                <Image
                  src="/image/projets/img_icone_puissance4.svg"
                  alt="img_icone_puissance4.svg"
                  className="dark:invert"
                  width={150}
                  height={150}
                  priority
                />
                <p>Puissance 4</p>
              </div>
            </div>
          </div>
    );
  };
  
  export default projet;