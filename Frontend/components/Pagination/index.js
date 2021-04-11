import React from "react";
import Head from "next/head";
import PaginationStyles from "../styles/PaginationStyles";
import { gql, useQuery } from "@apollo/client";
import { perPage } from "../../config";
import Link from "next/link";

export default function Pagination({ page }) {
  const PAGINATION_QUERY = gql`
    query {
      _allProductsMeta {
        count
      }
    }
  `;
  const { data, loading, error } = useQuery(PAGINATION_QUERY);

  if (loading) return <p>...Loading</p>;
  if (error) return <p>{error.message}</p>;

  const { count } = data._allProductsMeta;

  const pageCount = Math.ceil(count / perPage);
  return (
    <PaginationStyles>
      <Head>
        <title>Sick fits - page {page} of __</title>
      </Head>
      <Link href={`/products/${page - 1}`}>
        <a aria-disabled={page <= 1}>🠔 Prev</a>
      </Link>
      <p>
        Page {page} of {pageCount}
      </p>
      <p> {count} Items Total</p>
      <Link href={`/products/${page + 1}`}>
        <a aria-disabled={page >= pageCount}>Next 🠖</a>
      </Link>
    </PaginationStyles>
  );
}
