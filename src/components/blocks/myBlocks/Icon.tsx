import React from "react";

export default function Icon({
  name = "bug",
  className = "",
  size = "inherit",
  color = "inherit",
}) {
  return (
    <i
      className={`bi bi-${name} ${className}`}
      style={{ fontSize: size, color: color }}
    ></i>
  );
}
