import { fetchAllProducts } from "@/utils/actions";
import React from "react";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { LuLayoutGrid, LuList } from "react-icons/lu";
import Link from "next/link";
import { links } from "@/utils/links";
import ProductsGrid from "./ProductsGrid";
import ProductsList from "./ProductsList";

const ProductContainer = async ({
  layout,
  search,
}: {
  layout: string;
  search: string;
}) => {
  const products = await fetchAllProducts({search});
  const numberOfProducts = products.length;
  const searchTerm = search ? `&search=${search}` : "";

  return (
    <>
      <section>
        <div className="flex justify-between items-center">
          <h4>
            {numberOfProducts} product{numberOfProducts > 1 && "s"}
          </h4>
          <div className="flex gap-4">
            <Button
              asChild
              size={"icon"}
              variant={layout === "grid" ? "default" : "outline"}
            >
              <Link href={`${links.PRODUCTS.href}?layout=grid${searchTerm}`}>
                <LuLayoutGrid />
              </Link>
            </Button>
            <Button
              asChild
              size={"icon"}
              variant={layout === "list" ? "default" : "outline"}
            >
              <Link href={`${links.PRODUCTS.href}?layout=list${searchTerm}`}>
                <LuList />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <Separator className="mt-4" />

      {numberOfProducts === 0 ? (
        <h5>Soory , No Products Matched Your Search</h5>
      ) : layout === "grid" ? (
        <ProductsGrid products={products} />
      ) : (
        <ProductsList products={products} />
      )}
    </>
  );
};

export default ProductContainer;
