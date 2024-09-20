import React from "react";

export default function Card(props: { text: string; color: string }) {
  const text: string = props.text;
  const color: string = props.color;

  const cardWidth: string = "180px";

  const isLightColor = (color: string) => {
    // Convert the rgb string to an array of numbers
    const rgb = color
      .replace(/[^\d,]/g, "")
      .split(",")
      .map(Number);

    // Calculate the brightness of the color
    const brightness = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;

    // Return true if the brightness is greater than 125 (considered light color)
    return brightness > 125;
  };

  const textColor = isLightColor(color) ? "black" : "white";

  return (
    <a
      className="block max-w-sm p-6 border border-gray-200 rounded-lg shadow"
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
      <h5
        className={`text-3xl font-indie-flower font-bold tracking-tight text-${textColor}`}
      >
        {text}
      </h5>
    </a>
  );
}
