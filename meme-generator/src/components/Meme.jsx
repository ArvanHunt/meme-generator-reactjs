import React from "react";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMeme, setAllMeme] = React.useState([]);

  function generate() {
    const randomIndex = Math.floor(Math.random() * allMeme.length);
    const imageUrl = allMeme[randomIndex]?.url;
    setMeme((prevImage) => ({
      ...prevImage,
      randomImage: imageUrl,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  React.useEffect(() => {
    async function getMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setAllMeme(data.data.memes);
    }
    getMemes();
  }, []);

  return (
    <main className="bg-gray-100 py-10 px-5 text-center">
      <div className="main">
        <div className="flex justify-center space-x-4 mb-5">
          <input
            type="text"
            name="topText"
            placeholder="Top Text"
            onChange={handleChange}
            value={meme.topText}
            className="border p-2 rounded-lg"
          />
          <input
            type="text"
            name="bottomText"
            placeholder="Bottom Text"
            onChange={handleChange}
            value={meme.bottomText}
            className="border p-2 rounded-lg"
          />
        </div>
        <button
          className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600"
          onClick={generate}
        >
          Generate Meme 🖼
        </button>
      </div>
      <div className="meme mt-10 relative">
        <img
          src={meme.randomImage}
          alt="Generated Meme"
          className="w-full max-w-md mx-auto rounded-lg"
        />
        <h2 className="absolute top-5 left-1/2 transform -translate-x-1/2 text-white font-bold text-2xl">
          {meme.topText}
        </h2>
        <h2 className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-white font-bold text-2xl">
          {meme.bottomText}
        </h2>
      </div>
    </main>
  );
}
