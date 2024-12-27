import React from "react";
import trollface from '../assets/trollface.png'

export default function Header() {
  return (
    <header className="header bg-blue-950 text-white py-4 flex justify-center items-center">
      <img
        src={trollface} // Add this image to the public/images folder
        alt="meme-face"
        className="h-10 w-10 mr-3"
      />
      <h3 className="text-lg font-bold">Meme Generator</h3>
    </header>
  );
}
