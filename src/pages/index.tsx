import React from "react";
import { useRouter } from "next/router";

import RegisterPlayers from "@/components/registerPlayers";
import Title from "@/components/title";
import ButtonLink from "@/components/buttonLink";

export default function Home() {
  // Get players from query parameters
  const router = useRouter();
  const { players, setPlayers } = usePlayersNames(router.query.players || []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Title />
      <RegisterPlayers
        players={players}
        setPlayers={setPlayers}
      ></RegisterPlayers>
      <ButtonLink
        text="Play game"
        pathname="/play"
        query={{ players: encodeURIComponent(JSON.stringify(players)) }}
      />
    </div>
  );
}

function usePlayersNames(encodedPlayers: string | string[]): {
  players: string[];
  setPlayers: React.Dispatch<React.SetStateAction<string[]>>;
} {
  // Custom hook to create playersState from encoded players
  let playersNames: string[] = [];
  if (Array.isArray(encodedPlayers)) {
    // If encodedPlayers is an array, map over it and decode each element
    playersNames = encodedPlayers.map((player) => decodeURIComponent(player));
  } else {
    // If encodedPlayers is a string, decode it and parse it back into an array
    playersNames = JSON.parse(
      decodeURIComponent(encodedPlayers) // Decode the string
        .replace(/'/g, '"'), // Replace single quotes with double quotes
    );
  }

  const [players, setPlayers] = React.useState<string[]>(playersNames);
  return {
    players,
    setPlayers,
  };
}
