import {
  faDragon,
  faFeather,
  faGhost,
  faSkullCrossbones,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  AcUnitRounded,
  AutoAwesomeRounded,
  CatchingPokemon,
  ContrastRounded,
  ElectricBoltRounded,
  FitnessCenterRounded,
  GrassRounded,
  LandscapeRounded,
  LineWeightRounded,
  LocalFireDepartmentRounded,
  PestControlRounded,
  PsychologyAltRounded,
  SportsMmaRounded,
  WaterDropRounded,
} from "@mui/icons-material";
import { ReactNode } from "react";

interface CardProps {
  type: string;
  color:
    | {
        name: string;
        color1: string;
        color2?: undefined;
      }
    | {
        name: string;
        color1: string;
        color2: string;
      }
    | "";
  icon: string | ReactNode;
}

export const colors = [
  {
    name: "normal",
    color1: "#A3ABAE",
    icon: <CatchingPokemon fontSize="inherit" />,
  },
  {
    name: "fighting",
    color1: "#D56723",
    icon: <SportsMmaRounded fontSize="inherit" />,
  },
  {
    name: "flying",
    color1: "#3DC7EF",
    color2: "#A4ACAF",
    icon: <FontAwesomeIcon icon={faFeather} />,
  },
  {
    name: "poison",
    color1: "#B97FC9",
    icon: <FontAwesomeIcon icon={faSkullCrossbones} />,
  },
  {
    name: "ground",
    color1: "#F7DE3F",
    color2: "#AB9842",
    icon: <LineWeightRounded fontSize="inherit" />,
  },
  {
    name: "rock",
    color1: "#A38C21",
    icon: <LandscapeRounded fontSize="inherit" />,
  },
  {
    name: "bug",
    color1: "#729F3F",
    icon: <PestControlRounded fontSize="inherit" />,
  },
  {
    name: "ghost",
    color1: "#7B62A3",
    icon: <FontAwesomeIcon icon={faGhost} />,
  },
  {
    name: "steel",
    color1: "#9EB7B8",
    icon: <FitnessCenterRounded fontSize="inherit" />,
  },
  {
    name: "fire",
    color1: "#FD7D24",
    icon: <LocalFireDepartmentRounded fontSize="inherit" />,
  },
  {
    name: "water",
    color1: "#4592C4",
    icon: <WaterDropRounded fontSize="inherit" />,
  },
  {
    name: "grass",
    color1: "#9BCC50",
    icon: <GrassRounded fontSize="inherit" />,
  },
  {
    name: "electric",
    color1: "#EED535",
    icon: <ElectricBoltRounded fontSize="inherit" />,
  },
  {
    name: "psychic",
    color1: "#F366B9",
    icon: <PsychologyAltRounded fontSize="inherit" />,
  },
  {
    name: "ice",
    color1: "#51C4E7",
    icon: <AcUnitRounded fontSize="inherit" />,
  },
  {
    name: "dragon",
    color1: "#53A4CF",
    color2: "#F16E57",
    icon: <FontAwesomeIcon icon={faDragon} />,
  },
  {
    name: "dark",
    color1: "#707070",
    icon: <ContrastRounded fontSize="inherit" />,
  },
  {
    name: "fairy",
    color1: "#FDB9E9",
    icon: <AutoAwesomeRounded fontSize="inherit" />,
  },
];

export function Card({ type, color, icon }: CardProps) {
  return (
    <div className="card w-56 h-auto transition-all duration-300 relative rounded-md md:rounded-lg shadow-lg hover:scale-103">
      <div className="img-container grid rounded-md md:rounded-lg h-72 overflow-hidden">
        <div
          style={{
            backgroundColor: `${color}`,
          }}
          className={`img transition-all flex  items-center justify-center cursor-pointer text-6xl duration-300 bg-gradient-to-r border-2 border-black rounded-lg w-full hover:scale-130`}
        >
          {icon}
        </div>
        <div className="description absolute bottom-2 left-2 text-start p-2 w-11/12 transition-all duration-500 ease-in-out text-black truncate whitespace-nowrap backdrop-filter backdrop-blur border-2 border-black rounded-md md:rounded-lg bg-opacity-50 hover:transform hover:rotate-x-3 hover:rotate-y-3 hover:scale-100">
          <span className="title font-pressStart">{type.toUpperCase()}</span>
        </div>
      </div>
    </div>
  );
}
