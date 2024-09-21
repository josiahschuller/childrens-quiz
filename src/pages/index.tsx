import React from "react";
import { useRouter } from "next/router";

import RegisterPlayers from "@/components/registerPlayers";
import Title from "@/components/title";
import ButtonLink from "@/components/buttonLink";
import RangeSlider from "@/components/rangeSlider";
import topicsData from "../data/topics.json";

const DEFAULT_NUM_ROUNDS = 18;
const MIN_NUM_ROUNDS = 5;

export default function Home() {
  // Get players from query parameters
  const router = useRouter();
  const { players, setPlayers } = usePlayersNames(router.query.players || []);
  const [numRounds, setNumRounds] = React.useState<number>(DEFAULT_NUM_ROUNDS);

  const MAX_NUM_ROUNDS = topicsData.topics.length;

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
      <RangeSlider
        min={MIN_NUM_ROUNDS}
        max={MAX_NUM_ROUNDS}
        value={numRounds}
        label={`Number of rounds: ${numRounds}`}
        setValue={setNumRounds}
      />
      <ButtonLink
        text="Play game"
        pathname="/play"
        query={{
          players: encodeURIComponent(JSON.stringify(players)),
          numRounds: numRounds,
        }}
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
