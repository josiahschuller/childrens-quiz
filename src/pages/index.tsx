import React from "react";
import RegisterPlayers from "../components/registerPlayers";

export default function Home() {
  const [players, setPlayers] = React.useState<string[]>(['bob', 'jo']);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <RegisterPlayers players={players} setPlayers={setPlayers}></RegisterPlayers>
    </div>
  );
}
