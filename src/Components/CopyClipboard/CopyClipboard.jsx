import { useEffect, useState } from "react";

export default function CopyClipboard({ color }) {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (!isCopied) return;

    const timer = setTimeout(() => {
      setIsCopied(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [isCopied]);

  async function handleCopy() {
    await navigator.clipboard.writeText(color);
    setIsCopied(true);
  }

  return (
    <>
      <button onClick={handleCopy}>
        {isCopied ? "SUCSESSFULLY COPIED" : "COPY"}
      </button>
    </>
  );
}
