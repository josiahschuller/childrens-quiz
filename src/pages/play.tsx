import React, { useEffect } from 'react';
import Game from '../components/game';
import Title from '../components/title';
import { useRouter } from 'next/router';
import { Player } from '../types/player';

export default function Play() {
  // Get players from query parameters
  const router = useRouter();
  const [playersState, setPlayersState] = React.useState<Player[]>([]);

  useEffect(() => {
    const encodedPlayers: string | string[] = router.query.players || [];
    let players: string[] = [];
    if (Array.isArray(encodedPlayers)) {
      // If encodedPlayers is an array, map over it and decode each element
      players = encodedPlayers.map((player) => decodeURIComponent(player));
    } else {
      // If encodedPlayers is a string, decode it and parse it back into an array
      players = JSON.parse(
        decodeURIComponent(encodedPlayers) // Decode the string
          .replace(/'/g, '"') // Replace single quotes with double quotes
      );
    }

    // Set players in state
    setPlayersState(players.map((player) => {
      return {
        name: player,
        points: 0,
      };
    }));
  }, [router.query.players]);

  return (
    <div>
      <Title />
      <Game
        playersState={playersState}
        setPlayersState={setPlayersState}
      />
    </div>
  );
};
