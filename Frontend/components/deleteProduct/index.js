import React from "react";
import { gql, useMutation } from "@apollo/client";

export default function DeleteProduct({ id, children }) {
  const DELETE_PRODUCT_MUTATION = gql`
    mutation DELETE_PRODUCT_MUTATION($id: ID!) {
      deleteProduct(id: $id) {
        id
        name
      }
    }
  `;
  const update = (cache, payload) => {
    cache.evict(cache.identify(payload.data.deleteProduct));
  };
  const [deleteProduct, { loading }] = useMutation(DELETE_PRODUCT_MUTATION, {
    variables: {
      id,
    },
    update: update,
  });

  return (
    <button
      type="button"
      disabled={loading}
      onClick={() => {
        if (confirm("Are you sure you want to delete this item?")) {
          deleteProduct().catch((err) => alert(err.message));
        }
      }}
    >
      {children}
    </button>
  );
}
