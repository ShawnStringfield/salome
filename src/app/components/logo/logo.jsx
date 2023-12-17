import React from "react";
import { Comfortaa } from "next/font/google";

const comfortaa = Comfortaa({ subsets: ["latin"] });

export const Logo = () => {
  return (
    <div className={`${comfortaa.className} logo`}>
      <div className={`${leadTitleStyle}`}>
        <div>Shawn</div>
        <div>Stringfield</div>
      </div>
      <div className="title text-xl mt-3 text-slate-400">Software Engineer</div>
    </div>
  );
};

const leadTitleStyle = `text-4xl/9 font-bold`;
