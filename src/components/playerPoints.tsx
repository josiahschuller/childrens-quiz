import React from "react";
import { Player } from "../types/player";

export default function PlayerPoints(props: {
  playersState: Player[];
  highlightedPlayer: string;
  setHighlightedPlayer: (player: string) => void;
}) {
  const { playersState, highlightedPlayer, setHighlightedPlayer } = props;

  return (
    <div>
      <h4 style={{ display: "flex", justifyContent: "center" }}>
        Who won the point?
      </h4>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          margin: 10,
        }}
      >
        {playersState.map((player) => (
          <button
            key={player.name}
            className={`button ${player.name === highlightedPlayer ? "bg-blue-900" : "bg-blue-500"} text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none`}
            onClick={() => setHighlightedPlayer(player.name)}
          >
            {player.name}
          </button>
        ))}
      </div>
    </div>
  );
}
