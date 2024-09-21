import React from "react";
import Card from "./card";
import topicsData from "../data/topics.json";
import lettersData from "../data/letters.json";
import { Player } from "../types/player";
import PlayerPoints from "./playerPoints";

function shuffleArray<T>(arr: T[]): T[] {
  // Shuffle an array
  return arr.sort(() => Math.random() - 0.5);
}

export default function Game(props: {
  playersState: Player[];
  setPlayersState: (players: Player[]) => void;
  setGameOver: (gameOver: boolean) => void;
  numRounds: number;
}) {
  // Component for the game
  const { playersState, setPlayersState, setGameOver, numRounds } = props;

  const [highlightedPlayer, setHighlightedPlayer] = React.useState<string>("");

  const topics = topicsData.topics;
  const letters = lettersData.letters;

  const [indices, setIndices] = React.useState<number[]>([]); // Initialize indices state

  // Round number the game is up to
  const [roundNum, setRoundNum] = React.useState(0);

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
    let newRoundNum = roundNum + 1;
    if (newRoundNum < numRounds) {
      // Go to the next topic
      setRoundNum(newRoundNum);
      setIndex(indices[newRoundNum]);
    } else {
      // End of the game
      setGameOver(true);
    }
  }

  // const topicCardColor = "rgb(50, 150, 200)";
  const topicCardColor = "rgb(64,132,244)";
  const letterCardColor = "rgba(255, 247, 0, 0.82)";
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
      <p className="mb-3 text-lg text-gray-800 md:text-xl dark:text-gray-300">
        {`Round ${roundNum + 1} of ${numRounds}`}
      </p>
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
        className="bg-green-500 hover:bg-green-800 focus:ring-4 focus:ring-green-300 rounded-lg px-10 py-5 me-2 focus:outline-none"
        onClick={next}
        style={{ marginTop: 15 }}
      >
        <p className="text-xl text-white font-medium text-sm">
          {highlightedPlayer === "" ? "Skip" : "Next topic"}
        </p>
      </button>
    </div>
  );
}
