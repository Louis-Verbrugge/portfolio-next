
import "./presentation-style.css";
import Image from "next/image";


const presentation = () => {
    return (
        <div className="blockHead new-block-page">
        <div className="block-nom-Language">
          <h1>Louis Verbrugge</h1>
          <h2>J&apos;ai 18ans, je suis actuellement en première année de master en informatique à Enigma à Lille.</h2>
          <h2>Titulaire du permis B, je possède un véhicule.</h2>
        </div>
        <Image
            src="/image/img_photo_profil.jpg"
            alt="image de profil"
            className="photoProfil"
            id="photoProfil"
            width={150}
            height={150}
            />
      </div>

    );
  };
  
  export default presentation;