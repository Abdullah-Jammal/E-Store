import { links } from "@/utils/links";
import { ProductsGridProps } from "@/utils/types";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { formatCurrency } from "@/utils/format";
import FavoriteToggleButton from "./FavoriteToggleButton";
import EmptyList from "../global/EmptyList";

const ProductsGrid = ({ products }: ProductsGridProps) => {

  if(products.length === 0) {
    return <EmptyList title="There are no products!" className="mt-6 font-bold tracking-wider"/>
  }

  return (
    <section className="pt-10 grid md:grid-cols-2 gap-4 lg:grid-cols-3 sm:grid-cols-1 pb-2">
      {products?.map((product) => {
        const productId = product.id ;
        return (
          <div className="group relative" key={product.id}>
            <Link href={`${links.PRODUCTS.href}/${product.id}`}>
              <Card className="transform group-hover:shadow-xl bg-transparent transition-shadow duration-200">
                <CardContent className="">
                  <div className="relative h-64 md:h-48 rounded overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority
                      className="object-cover"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <h2 className="text-lg capitalize">{product.name}</h2>
                    <p className="text-muted-foreground mt-2">
                      {formatCurrency(product.price)}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <div className="absolute top-7 right-7">
              <FavoriteToggleButton productId={productId} />
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default ProductsGrid;
