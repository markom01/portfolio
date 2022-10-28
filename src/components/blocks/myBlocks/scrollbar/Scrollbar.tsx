import React from "react";

export default function Scrollbar({ progress }: { progress: number }) {
  return (
    <progress className="w-100 bg-transparent border-0" value={progress} />
  );
}
