import React from "react";
import RegisterPlayers from "../components/registerPlayers";
import Title from "../components/title";
import { useRouter } from 'next/router';

export default function Home() {
  const [players, setPlayers] = React.useState<string[]>([]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <Title />
      <RegisterPlayers players={players} setPlayers={setPlayers}></RegisterPlayers>
      <PlayGameButton players={players} />
    </div>
  );
}

function PlayGameButton(props: { players: string[] }) {
  const { players } = props;
  const router = useRouter();

  const cardWidth: string = "400px";

  return (
    <div
      style={{
        margin: "1rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: cardWidth,
      }}
    >
      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        style={{ width: "180px", height: "45px", marginTop: 5 }}
        onClick={() => {router.push({
          pathname: "/play",
          query: {players: encodeURIComponent(JSON.stringify(players))}
        })}}
      >
        Play game
      </button>
    </div>
  );
}
