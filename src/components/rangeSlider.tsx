import React from "react";

export default function RangeSlider(props: {
  min: number;
  max: number;
  value: number;
  label: string;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}) {
  /*
  Component for a range slider
  Documentation: https://flowbite.com/docs/forms/range/
  */
  const { min, max, value, label, setValue } = props;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: 300,
      }}
    >
      <label
        htmlFor="large-range"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <input
        id="large-range"
        type="range"
        min={min}
        max={max}
        value={value}
        className="w-full h-2 bg-gray-400 rounded-lg appearance-none cursor-pointer range-lg dark:bg-gray-700 styled-slider"
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
    </div>
  );
}
