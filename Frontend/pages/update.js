import React from "react";
import { useRouter } from "next/router";
import UpdateProduct from "../components/UpdateProduct";
export default function UpdatePage({ query }) {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <UpdateProduct id={id} />
    </div>
  );
}
