import React from "react";
import Game from "../components/game";
import Title from "../components/title";
import { useRouter } from "next/router";
import { Player } from "../types/player";
import GameEnd from "@/components/gameEnd";

export default function Play() {
  // Get players from query parameters
  const router = useRouter();
  const [gameOver, setGameOver] = React.useState<boolean>(false);
  const { playersState, setPlayersState } = usePlayersState(
    router.query.players || [],
  );

  return (
    <div>
      <Title />
      {!gameOver ? (
        <Game
          playersState={playersState}
          setPlayersState={setPlayersState}
          setGameOver={setGameOver}
        />
      ) : (
        <GameEnd playersState={playersState} />
      )}
    </div>
  );
}

function usePlayersState(encodedPlayers: string | string[]): {
  playersState: Player[];
  setPlayersState: React.Dispatch<React.SetStateAction<Player[]>>;
} {
  // Custom hook to create playersState from encoded players
  let players: string[] = [];
  if (Array.isArray(encodedPlayers)) {
    // If encodedPlayers is an array, map over it and decode each element
    players = encodedPlayers.map((player) => decodeURIComponent(player));
  } else {
    // If encodedPlayers is a string, decode it and parse it back into an array
    players = JSON.parse(
      decodeURIComponent(encodedPlayers) // Decode the string
        .replace(/'/g, '"'), // Replace single quotes with double quotes
    );
  }
  const [playersState, setPlayersState] = React.useState<Player[]>(
    players.map((player) => ({
      name: player,
      points: 0,
    })),
  );
  return {
    playersState,
    setPlayersState,
  };
}
