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
      <h4
        className="text-2xl"
        style={{ display: "flex", justifyContent: "center" }}
      >
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
            className={`button ${player.name === highlightedPlayer ? "bg-orange-800" : "bg-orange-500 hover:bg-orange-800"} text-white focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none`}
            onClick={() => setHighlightedPlayer(player.name)}
          >
            {player.name}
          </button>
        ))}
      </div>
    </div>
  );
}
