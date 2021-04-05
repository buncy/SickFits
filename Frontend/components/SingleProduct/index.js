import { gql, useQuery } from "@apollo/client";
import DisplayError from "../DisplayError";
const SINGLE_ITEM_QUERY = gql`
    query SINGLE_ITEM_QUERY (id:$id!){
    Product(where:
    {
    id:$id
        }){
            name
            price
            description
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
  return (
    <div>
      <h4>{data.Product.name}</h4>
    </div>
  );
}
