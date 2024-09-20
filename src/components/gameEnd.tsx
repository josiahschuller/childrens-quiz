import { Player } from "../types/player";
import ButtonLink from "./buttonLink";
import Confetti from "react-confetti";

export default function GameEnd(props: { playersState: Player[] }) {
  const { playersState } = props;
  const cardWidth: string = "400px";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <a
        className="block max-w-sm p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "1rem",
          width: cardWidth,
          backgroundColor: "white",
        }}
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">
          Game over!
        </h5>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <div style={{ width: "100%" }}>
            <ul className="mt-4">
              <table
                className="table-auto"
                style={{
                  width: "100%",
                }}
              >
                <tbody>
                  <tr className="border">
                    <th className="px-4 py-2 border">Player</th>
                    <th className="px-4 py-2 border">Points</th>
                  </tr>
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
        </div>
      </a>
      <ButtonLink text="Play again" pathname="/" query={{}} />
      <Confetti />
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
