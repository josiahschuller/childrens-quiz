import React from "react";
import Card from "./card";
import topicsData from "../data/topics.json";
import lettersData from "../data/letters.json";
import { Player } from "../types/player";
import PlayerPoints from "./playerPoints";
import GameEnd from "./gameEnd";

function shuffleArray<T>(arr: T[]): T[] {
  // Shuffle an array
  return arr.sort(() => Math.random() - 0.5);
}

export default function Game(props: {
  playersState: Player[];
  setPlayersState: (players: Player[]) => void;
  setGameOver: (gameOver: boolean) => void;
}) {
  // Component for the game
  const { playersState, setPlayersState, setGameOver } = props;

  const [highlightedPlayer, setHighlightedPlayer] = React.useState<string>("");

  const topics = topicsData.topics;
  const letters = lettersData.letters;

  const [indices, setIndices] = React.useState<number[]>([]); // Initialize indices state

  // Index for selecting the randomised index
  const [indexIndex, setIndexIndex] = React.useState(0);

  // Randomised index for selecting the topic and letter
  const [index, setIndex] = React.useState<number>(0); // Initialize index state

  React.useEffect(() => {
    // Code to run on component mount
    const shuffledIndices = shuffleArray(
      Array.from(Array(topics.length).keys()),
    ); // Shuffle the indices
    setIndices(shuffledIndices); // Update the indices state
    setIndex(shuffledIndices[0]); // Set the initial index
  }, [topics.length]); // Add topics.length as a dependency to re-run the effect when it changes

  function next() {
    // Award the highlighted player the point
    if (highlightedPlayer !== "") {
      const newPlayersState = playersState.map((player) => {
        if (player.name === highlightedPlayer) {
          return {
            ...player,
            points: player.points + 1,
          };
        }
        return player;
      });
      setPlayersState(newPlayersState);
      setHighlightedPlayer("");
    } else {
      // No player is highlighted
      // TODO tell the user
    }

    // Check if we have exhausted all topics
    if (indexIndex < topics.length) {
      // Go to the next topic
      setIndexIndex(indexIndex + 1);
      setIndex(indices[indexIndex]);
    } else {
      // End of the game
      setGameOver(true);
    }
  }

  const topicCardColor = "rgb(50, 150, 200)";
  const letterCardColor = "rgb(75, 196, 77)";
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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "1rem",
        }}
      >
        <Card
          text={topics[index % topics.length]}
          color={topicCardColor}
        ></Card>
        <Card
          text={letters[index % letters.length]}
          color={letterCardColor}
        ></Card>
      </div>
      {playersState.length > 0 ? (
        <PlayerPoints
          playersState={playersState}
          highlightedPlayer={highlightedPlayer}
          setHighlightedPlayer={setHighlightedPlayer}
        />
      ) : null}
      <button
        type="button"
        className="text-white bg-yellow-500 hover:bg-yellow-800 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 focus:outline-none dark:focus:ring-yellow-800"
        onClick={next}
        style={{ marginTop: 15 }}
      >
        Next topic
      </button>
    </div>
  );
}
