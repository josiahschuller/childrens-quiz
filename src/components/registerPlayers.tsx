import React from "react";

function DeleteButton(props: { onClick: () => void }) {
  // Delete button component
  const { onClick } = props;
  return (
    <button type="button" className="text-white bg-red-500 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
      onClick={onClick}
    >
      <svg fill="#FFFFFF" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
        width="20px" height="20px" viewBox="0 0 482.428 482.429"
      >
        <g>
          <g>
            <path d="M381.163,57.799h-75.094C302.323,25.316,274.686,0,241.214,0c-33.471,0-61.104,25.315-64.85,57.799h-75.098
            c-30.39,0-55.111,24.728-55.111,55.117v2.828c0,23.223,14.46,43.1,34.83,51.199v260.369c0,30.39,24.724,55.117,55.112,55.117
            h210.236c30.389,0,55.111-24.729,55.111-55.117V166.944c20.369-8.1,34.83-27.977,34.83-51.199v-2.828
            C436.274,82.527,411.551,57.799,381.163,57.799z M241.214,26.139c19.037,0,34.927,13.645,38.443,31.66h-76.879
            C206.293,39.783,222.184,26.139,241.214,26.139z M375.305,427.312c0,15.978-13,28.979-28.973,28.979H136.096
            c-15.973,0-28.973-13.002-28.973-28.979V170.861h268.182V427.312z M410.135,115.744c0,15.978-13,28.979-28.973,28.979H101.266
            c-15.973,0-28.973-13.001-28.973-28.979v-2.828c0-15.978,13-28.979,28.973-28.979h279.897c15.973,0,28.973,13.001,28.973,28.979
            V115.744z"/>
            <path d="M171.144,422.863c7.218,0,13.069-5.853,13.069-13.068V262.641c0-7.216-5.852-13.07-13.069-13.07
            c-7.217,0-13.069,5.854-13.069,13.07v147.154C158.074,417.012,163.926,422.863,171.144,422.863z"/>
            <path d="M241.214,422.863c7.218,0,13.07-5.853,13.07-13.068V262.641c0-7.216-5.854-13.07-13.07-13.07
            c-7.217,0-13.069,5.854-13.069,13.07v147.154C228.145,417.012,233.996,422.863,241.214,422.863z"/>
            <path d="M311.284,422.863c7.217,0,13.068-5.853,13.068-13.068V262.641c0-7.216-5.852-13.07-13.068-13.07
            c-7.219,0-13.07,5.854-13.07,13.07v147.154C298.213,417.012,304.067,422.863,311.284,422.863z"/>
          </g>
        </g>
      </svg>
      <span className="sr-only">Remove player</span>
    </button>
  )
}

function Player(props: {
  players: string[];
  index: number;
  setPlayers: (players: string[]) => void;
}) {
  // This component is for a player row
  const { players, index, setPlayers } = props;

  const handleDelete = () => {
    // Delete player with the given index
    setPlayers(players.filter((_, i) => i !== index));
  }

  return (
    <tr>
      <td
        width="250px"
      >{players[index]}</td>
      <td>
        <DeleteButton onClick={handleDelete} />
      </td>
    </tr>
  );
}

export default function RegisterPlayers(props: {
  players: string[];
  setPlayers: (players: string[]) => void;
}) {
  // Component for registering players
  const { players, setPlayers } = props;

  const [newPlayer, setNewPlayer] = React.useState<string>("");

  const cardWidth: string = "400px";

  function addPlayer() {
    // Get value from input and remove whitespace
    let playerToBeAdded = newPlayer.trim();

    const maxPlayerLength = 20;

    if (!players.includes(playerToBeAdded) && playerToBeAdded !== "" && playerToBeAdded.length <= maxPlayerLength) {
      // Add player
      setPlayers([...players, playerToBeAdded]);
      setNewPlayer("");
    } else {
      // TODO send error message to user
    }
  }

  return (
    <a
      href="#"
      className="block max-w-sm p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700"
      style={{
        margin: "1rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: cardWidth,
        backgroundColor: "white",
      }}
    >
      <div>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">
          Enter the names of the players:
        </h5>
        <div>
          <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Player name</label>
          <form onSubmit={addPlayer} style={{ display: "flex", alignItems: "center" }}>
            <input
              type="text"
              id="default-input"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={newPlayer}
              onChange={(event) => setNewPlayer(event.target.value)}
              style={{ marginRight: "10px" }}
            />

            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              style={{ width: "180px", height: "45px", marginTop: 5 }}
            >
              Add player
            </button>
          </form>
        </div>
        <ul className="mt-4">
          <table className="table-fixed">
            <tbody>
              {players.map((_, index) => (
                <Player
                  key={index} // Add a unique "key" prop so that React doesn't complain
                  index={index}
                  players={players}
                  setPlayers={setPlayers}
                ></Player>
              ))}
            </tbody>
          </table>
        </ul>
      </div>
    </a>
  );
}
