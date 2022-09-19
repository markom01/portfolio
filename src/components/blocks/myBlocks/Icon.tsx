import React from "react";

export default function Icon({ name, className = "" }) {
  return <i className={`bi bi-${name} ${className}`}></i>;
}
