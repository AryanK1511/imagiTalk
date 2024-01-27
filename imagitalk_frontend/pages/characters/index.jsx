import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar/Navbar";

const CharacterPage = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetch("https://46ce-192-12-181-55.ngrok-free.app/api/characters")
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.characters || []); // Ensure data.characters is defined
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching characters:", error);
        setLoading(false);
      });
  }, []);

  const navigateToCharacter = (id) => {
    router.push(`/characters/${id}`);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-5">
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
          Character Page
        </h1>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {characters.map((character) => (
              <div
                key={character.id}
                className="max-w-sm rounded overflow-hidden shadow-lg bg-white hover:bg-gray-50 cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl"
                onClick={() => navigateToCharacter(character.id)}
                role="link"
                aria-label={`Go to character ${character.character_name}`}
              >
                <img
                  className="w-full h-64 object-cover"
                  src={character.character_picture}
                  alt={character.character_name}
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2 text-gray-900">
                    {character.character_name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default CharacterPage;
