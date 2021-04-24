import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import React from "react";
import styled from "styled-components";
import Product from "../Product";

export const ALL_PRODUCTS_QUERY = gql`
  query ALL_PRODUCTS_QUERY {
    allProducts {
      id
      name
      price
      description
      photo {
        id
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;
const ProductList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
  @media (max-width: 550px) {
    grid-template-columns: 1fr;
  }
`;
export default function Products() {
  const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY);
  console.log(data, error, loading);
  if (loading) return <p>....loading</p>;
  if (error) return <p>{error.message}</p>;
  return (
    <ProductList>
      {data.allProducts.map((data) => (
        <Product key={data.id} product={data} />
      ))}
    </ProductList>
  );
}
