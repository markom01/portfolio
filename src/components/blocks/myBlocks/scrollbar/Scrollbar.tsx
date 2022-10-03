import React from "react";

export default function Scrollbar({ progress }: { progress: number }) {
  return (
    <progress
      className="position-absolute top-0 left-0 vw-100 bg-transparent border-0"
      value={progress}
    />
  );
}
