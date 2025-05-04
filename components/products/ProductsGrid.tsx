import { ProductsGridProps } from "@/utils/types";

const ProductsGrid = ({ products }: ProductsGridProps) => {
  return (
    <div>
      {products?.map((product) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
};

export default ProductsGrid;
