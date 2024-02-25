import React from "react";
import Card from "./card";
import topicsData from "../data/topics.json";
import lettersData from "../data/letters.json";

function shuffleArray<T>(arr: T[]): T[] {
  // Shuffle an array
  return arr.sort(() => Math.random() - 0.5);
}

export default function Game() {
  const topics = topicsData.topics;
  const letters = lettersData.letters;

  const maxIndex = Math.max(topics.length, letters.length);

  const [indices, setIndices] = React.useState<number[]>([]); // Initialize indices state

  // Index for selecting the randomised index
  const [indexIndex, setIndexIndex] = React.useState(0);

  // Randomised index for selecting the topic and letter
  const [index, setIndex] = React.useState<number>(0); // Initialize index state

  React.useEffect(() => {
    // Code to run on component mount
    const shuffledIndices = shuffleArray(Array.from(Array(maxIndex).keys())); // Shuffle the indices
    setIndices(shuffledIndices); // Update the indices state
    setIndex(shuffledIndices[0]); // Set the initial index
  }, [maxIndex]); // Add maxIndex as a dependency to re-run the effect when it changes

  function next() {
    // Go to the next topic
    setIndexIndex((indexIndex + 1) % maxIndex);
    setIndex(indices[indexIndex]);
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
        <Card text={topics[index % topics.length]} color={topicCardColor}></Card>
        <Card text={letters[index % letters.length]} color={letterCardColor}></Card>
      </div>
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={() => next()}
      >
        Next topic
      </button>
    </div>
  );
}
