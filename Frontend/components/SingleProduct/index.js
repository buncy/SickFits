import { gql, useQuery } from "@apollo/client";

import DisplayError from "../DisplayError";
const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
    Product(where: { id: $id }) {
      name
      price
      description
      id
      photo {
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

export default function SingleProduct({ id }) {
  const { data, loading, error } = useQuery(SINGLE_ITEM_QUERY, {
    variables: {
      id,
    },
  });

  if (loading) return <p>...loading</p>;
  if (error) return <DisplayError error={error} />;
  const { Product } = data;
  return (
    <div>
      <div className="details">
        <img
          src={Product.photo.image.publicUrlTransformed}
          alt={Product.name}
        />
        <h2>{Product.name}</h2>
        <p>{Product.description}</p>
      </div>
    </div>
  );
}
