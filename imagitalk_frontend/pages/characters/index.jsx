import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar/Navbar";
import styles from "../../components/CharacterChat/CharacterChat.module.css";

const CharacterPage = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetch("http://localhost:8000/api/characters")
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
        <h1 className={styles.charOptTitle}>Choose character:</h1>

        {loading ? (
          <p>{""}</p> // Loading..
        ) : (
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ${styles.charContainer}`}
          >
            {characters.map((character) => (
              <div
                key={character.id}
                className={styles.charWrapper}
                onClick={() => navigateToCharacter(character.id)}
                role="link"
                aria-label={`Go to character ${character.character_name}`}
              >
                <img
                  className={styles.charImg}
                  src={character.character_picture}
                  alt={character.character_name}
                />
                <div className="px-2 py-2">
                  <div
                    className={`font-bold text-xl mb-2 text-gray-900 ${styles.charName}`}
                  >
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
