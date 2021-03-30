import React from "react";
import Link from "next/link";
import Nav from "./Nav";

export default function Header() {
  return (
    <Header>
      <div className="bar">
        <Link href="/">Sick Fits</Link>
      </div>
      <div className="sub-bar"></div>
      <Nav />
    </Header>
  );
}
