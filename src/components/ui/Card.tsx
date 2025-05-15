import { Link } from "react-router-dom";

interface CardProps {
  name: string;
  url: string;
}

export const Card = ({ name, url }: CardProps) => {
  return (
    <Link to={`/pokemon/${name}`}>
      <div className="shadow-md place-self-center text-white rounded-md p-4 bg-blue-300 w-[80%]">
        <h1 className="capitalize">{name}</h1>
        <div>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${url
              .split("/")
              .splice(6, 1)}.png`}
            alt={name}
          />
        </div>
      </div>
    </Link>
  );
};
