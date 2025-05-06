import EmptyList from "@/components/global/EmptyList";
import FavoriteToggleButton from "@/components/products/FavoriteToggleButton";
import AddToCart from "@/components/single-product/AddToCart";
import BreadCrumbs from "@/components/single-product/BreadCrumbs";
import ProductRating from "@/components/single-product/ProductRating";
import { fetchProductByID } from "@/utils/actions";
import { formatCurrency } from "@/utils/format";
import Image from "next/image";
import React from "react";

export default async function ProductsDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await fetchProductByID({ id: id });
  const dollarAmount = formatCurrency(product.price);
  if (!product) {
    return (
      <div>
        <EmptyList title="This Product Does Not Exist!" />
      </div>
    );
  }
  return (
    <section>
      <BreadCrumbs name={product.name} />
      <div className="grid lg:grid-cols-2 mt-6 gap-y-6 lg:gap-x-16">
        <div className="relative h-full">
          <Image
            src={product.image}
            alt={product.name}
            fill
            priority
            className="w-full rounded-md object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div>
          <div className="flex gap-8 items-center">
            <h2 className="capitalize text-2xl font-bold">{product.name}</h2>
            <FavoriteToggleButton productId={product.id} />
          </div>
          <ProductRating productID={product.id} />
          <h4 className="text-sm p-1.5 mt-3 rounded-md bg-muted w-fit">{dollarAmount}</h4>
          <p className="mt-6 leading-8 text-muted-foreground">
            {product.description}
          </p>
          <AddToCart productID={product.id}/>
        </div>
      </div>
    </section>
  );
}
