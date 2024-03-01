import { Player } from "../types/player";
import ButtonLink from "./buttonLink";

export default function GameEnd(props: { playersState: Player[] }) {
  const { playersState } = props;
  const cardWidth: string = "400px";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "50vh",
      }}
    >
      <a
        className="block max-w-sm p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700"
        style={{
          margin: "1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: cardWidth,
          backgroundColor: "white",
        }}
      >
        <div>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">
            Game over!
          </h5>
          <ul className="mt-4">
            <table className="table-auto">
              <tbody>
                <tr className="border">
                  <th className="px-4 py-2 border">Player</th>
                  <th className="px-4 py-2 border">Points</th></tr>
                {playersState
                  .sort((a, b) => b.points - a.points)
                  .map((playerState, index) => (
                    <PlayerPoints
                      key={index} // Add a unique "key" prop so that React doesn't complain
                      playerState={playerState}
                    />
                  ))}
              </tbody>
            </table>
          </ul>
        </div>
      </a>
      <ButtonLink text="Play again" pathname="/" query={{}} />
    </div>
  );
}

function PlayerPoints(props: { playerState: Player }) {
  const { playerState } = props;
  return (
    <tr className="border">
      <td className="px-4 py-2 border">{playerState.name}</td>
      <td className="px-4 py-2 border">{playerState.points}</td>
    </tr>
  );
}
