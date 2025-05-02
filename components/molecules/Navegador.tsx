import React from "react";
import Image from "next/image";
import { Roboto } from "next/font/google";  


const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const Navegador = () => {
  return (
    <div className={`navegador ${roboto.variable}`}>
      <h2>Explore Market</h2>
      <div className="navegador__icons">
        <Image className="im" src="/campana.png" alt="campana" width={50} height={50} />
        <Image className="im" src="/lupa.png" alt="lupa" width={50} height={50} />
      </div>
    </div>
  );
};

export default Navegador;
