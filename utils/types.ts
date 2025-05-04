// Start Types For Products
export interface ProductsProps {
  id: string;
  name: string;
  createdAt: Date;
  featured: boolean;
  price: number;
  description: string;
  clerkId: string;
  updatedAt: Date;
  image: string;
}

export interface ProductsGridProps {
  products: ProductsProps[];
}
// End Types For Products

// Start Empty List Types
export type EmptyListProps = {
  title: string;
  className?: string;
};
