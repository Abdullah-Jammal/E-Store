import EmptyList from "@/components/global/EmptyList";
import BreadCrumbs from "@/components/single-product/BreadCrumbs";
import { fetchProductByID } from "@/utils/actions";
import React from "react";

export default async function ProductsDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await fetchProductByID({ id: id });
  if (!product) {
    return (
      <div>
        <EmptyList title="This Product Does Not Exist!" />
      </div>
    );
  }
  return (
    <div>
      <BreadCrumbs name="Product details" />
      {product.name}
    </div>
  );
}
