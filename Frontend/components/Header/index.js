import React from "react";
import Link from "next/link";
import Nav from "../Nav";

export default function index() {
  return (
    <header>
      <div className="bar">
        <Link href="/">Sick fits</Link>
        <Nav />
      </div>
      <div className="sub-bar">
        <p>search</p>
      </div>
    </header>
  );
}
