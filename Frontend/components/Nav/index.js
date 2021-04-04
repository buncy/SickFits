import React from "react";
import Link from "next/link";
import NavStyles from "../styles/NavStyles";

export default function index() {
  return (
    <NavStyles>
      <Link href="/products">Products</Link>
      <Link href="/sell">Sell</Link>
      <Link href="/account">Account</Link>
      <Link href="/orders">Orders</Link>
    </NavStyles>
  );
}
