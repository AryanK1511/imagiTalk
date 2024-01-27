import { useRouter } from "next/router";
import Navbar from "@/components/Navbar/Navbar";
import CharacterChat from "@/components/CharacterChat/CharacterChat";

const CharacterPage = () => {
  const router = useRouter();
  const { id } = router.query; // Extract the id from the URL

  return (
    <div>
      <Navbar />
      <h1>Character Page: {id}</h1>
      {/* Call the component and pass the id */}
      <CharacterChat characterId={id} />
    </div>
  );
};

export default CharacterPage;
