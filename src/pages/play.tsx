import React from 'react';
import Game from '../components/game';
import Title from '../components/title';
import { useRouter } from 'next/router';

export default function Play() {
    // Get players from query parameters
    const router = useRouter();
    const encodedPlayers: string | string[] = router.query.players || [];
    let players: string[] = [];
    if (Array.isArray(encodedPlayers)) {
        // If encodedPlayers is an array, map over it and decode each element
        players = encodedPlayers.map((player) => decodeURIComponent(player));
    } else {
        // If encodedPlayers is a string, decode it and parse it back into an array
        players = [decodeURIComponent(encodedPlayers)];
    }

    return (
        <div>
            <Title></Title>
            <Game></Game>
        </div>
    );
};
