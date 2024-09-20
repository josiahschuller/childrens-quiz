import React from "react";

export default function GameTitle() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1 className="mb-2 mt-5 text-5xl font-bold leading-tight text-primary">
        {"Children's Quiz"}
      </h1>
    </div>
  );
}
