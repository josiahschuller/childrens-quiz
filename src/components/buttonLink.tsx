import { useRouter } from "next/router";
import { ParsedUrlQueryInput } from "querystring";
import React from "react";

export default function ButtonLink(props: {
  text: string;
  pathname: string;
  query: ParsedUrlQueryInput;
}) {
  const { text, pathname, query } = props;
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
        onClick={() => {
          router.push({
            pathname: pathname,
            query: query,
          });
        }}
      >
        {text}
      </button>
    </div>
  );
}
