import { Link, useParams } from "react-router-dom";
import { usePokemonDetail } from "../lib/use-pokemon";

export const Detail = () => {
  const { id } = useParams();
  const { data, isLoading } = usePokemonDetail(id as string);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Link to="/">Back to lists</Link>
      <div className="flex flex-col mt-10">
        <h1 className="uppercase font-bold text-2xl">{data?.name}</h1>
        <div className="flex gap-10">
          <div>
            <img
              src={data?.sprites.other?.dream_world.front_default}
              alt={data?.name}
            />
          </div>
          <div className="grid grid-cols-2">
            <div>
              <h2 className="font-bold">Abilities</h2>
              <ul className="list-disc">
                {data?.abilities.map((ability) => (
                  <li className="capitalize" key={ability?.ability?.name}>
                    {ability?.ability?.name}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-bold">Stats</h2>
              <ul className="list-disc">
                {data?.stats.map((stat) => (
                  <li className="capitalize" key={stat?.stat?.name}>
                    {stat?.stat?.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
