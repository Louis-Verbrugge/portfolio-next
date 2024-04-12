'use client'
import Image from "next/image";
import React, { useEffect } from 'react';

import BarNav from "./barNav";
import Presentation from "./presentation";
import Experience from "./experience";
import Projet from "./projet";
import LangagesOutils from "./langagesOutils";
import Contact from "./contact";


export default function Home() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {

      if (event.clientX > window.innerWidth / 2) {
        buttonMenuActive = true;
        clickMenu()
      }
    };
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  let buttonMenuActive = false;

  const clickMenu = () => {
    const menu = document.getElementById("menu");
    if (!buttonMenuActive && menu) {
      menu.className = "block-nav-active-telephone";
      menu.style.display = "flex"
      buttonMenuActive = true;

    } else if (menu) {
      menu.style.display = "none";
      buttonMenuActive = false;
    }
  };


  return (
    <main className="">
      <div className="page">
        <div className="buttonMenu" id="IdButtonMenu">
          <Image
            src="/image/hamburger-icon.svg"
            alt="img photo profile"
            onClick={clickMenu}
            width={100}
            height={24}
            priority
          />
        </div>
        <BarNav />
        <div className="blockPortfolio">
          <Presentation />
          <Experience />
          <Projet />
          <LangagesOutils />
          <Contact />
        </div>
      </div>
    </main>
  );
}
