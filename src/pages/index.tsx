import React from "react";
import RegisterPlayers from "../components/registerPlayers";
import Title from "../components/title";

export default function Home() {
  const [players, setPlayers] = React.useState<string[]>([]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <Title/>
      <RegisterPlayers players={players} setPlayers={setPlayers}></RegisterPlayers>
    </div>
  );
}
