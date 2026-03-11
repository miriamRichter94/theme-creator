import { useEffect, useState } from "react";
import "./ContrastCheck.css";

export default function ContrastCheck({ background, foreground }) {
  const [contrastScore, setContrastScore] = useState("");

  useEffect(() => {
    async function postFetch() {
      const response = await fetch(
        "https://www.aremycolorsaccessible.com/api/are-they",
        {
          method: "POST",
          body: JSON.stringify({ colors: [foreground, background] }),
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      const data = await response.json();
      setContrastScore(data.overall);
    }

    postFetch();
  }, [background, foreground]);

  return (
    <p
      className={`contrast-check contrast-check__${contrastScore.toLowerCase()}`}
    >
      Overall Contrast Score: {contrastScore}
    </p>
  );
}
