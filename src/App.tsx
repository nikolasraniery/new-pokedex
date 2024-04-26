import { NamedAPIResource } from "pokenode-ts";
import { useEffect, useState } from "react";
import { Card, colors } from "./components/Card/Card";
import { Navbar } from "./components/Navbar/Navbar";
import { getPokemonTypes } from "./services/pokemonService";

function App() {
  const [pokeType, setPokeType] = useState<NamedAPIResource[]>();

  useEffect(() => {
    const getPokeData = async () => {
      try {
        const data = await getPokemonTypes();
        setPokeType(data.results);
      } catch (error) {
        console.error("Erro ao buscar dados");
      }
    };
    getPokeData();
  }, []);

  return (
    <div className="w-full h-full pb-16 flex flex-col items-center bg-cream">
      <div className="w-full">
        <Navbar />
      </div>
      <div className="mt-6 grid grid-cols-4 gap-4">
        {pokeType?.map((type) => {
          const setColor =
            colors.find(
              (color) => color.name === type.name ?? `${color.color1}`
            ) || "";
          const setIcon = colors.find(
            (icon) => icon.name === type.name ?? icon.icon
          );
          return (
            <Card
              key={type.name}
              type={type.name}
              color={setColor.color1}
              icon={setIcon?.icon}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
