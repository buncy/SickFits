import Link from "next/link";
import React from "react";
import ItemStyles from "../styles/ItemStyles";
import Title from "../styles/Title";
import PriceTag from "../styles/PriceTag";
import formatMoney from "../../lib/formatMoney";
import DeleteProduct from "../deleteProduct";

export default function Product({ product }) {
  console.log("product", product.description);
  return (
    <ItemStyles>
      <img
        src={product?.photo?.image?.publicUrlTransformed}
        alt={product.name}
      />
      <Title>
        <Link href={`/product/[id]`} as={`/product/${product.id}`}>
          {product.name}
        </Link>
      </Title>
      <PriceTag>{formatMoney(product.price)}</PriceTag>
      <p>{product.description}</p>
      {/* {TODO:add buttons to edit  and delete item} */}
      <div className="buttonList">
        <Link
          href={{
            pathname: "update",
            query: {
              id: product.id,
            },
          }}
        >
          Edit
        </Link>
        <DeleteProduct id={product.id}>Delete</DeleteProduct>
      </div>
    </ItemStyles>
  );
}
