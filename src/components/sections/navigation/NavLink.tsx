import React from "react";
import { Link } from "gatsby";
import type { LinkType } from "./Navigation";

export default function NavLink({
  children,
  link,
}: {
  children: React.ReactNode;
  link: LinkType;
}) {
  const className = "text-center text-decoration-none py-1 px-2 w-100";
  return link.toPage ? (
    <Link className={className} to={`/${link.name}`}>
      {children}
    </Link>
  ) : (
    <a className={className} href={`/#${link.name}`} key={link.name}>
      {children}
    </a>
  );
}
