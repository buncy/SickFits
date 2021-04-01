import React from "react";
import Link from "next/link";

export default function index() {
  return (
    <nav>
      <Link href="/products">Products</Link>
      <Link href="/sell">Sell</Link>
      <Link href="/account">Account</Link>
      <Link href="/orders">Orders</Link>
    </nav>
  );
}
