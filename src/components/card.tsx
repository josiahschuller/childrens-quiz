import React from "react";

export default function Card(props: { text: string, color: string}) {
  const text: string = props.text;
  const color: string = props.color;

  const cardWidth: string = "150px";

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
        height: cardWidth,
        backgroundColor: color,
      }}
    >
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
        {text}
      </h5>
    </a>
  );
}
