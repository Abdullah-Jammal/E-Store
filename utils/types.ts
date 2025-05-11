/* eslint-disable @typescript-eslint/no-explicit-any */

// Start General Types
export type EmptyListProps = {
  title: string;
  className?: string;
};
// End General Types

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

// Start Form Props
export interface FormInputProps {
  name: string;
  type: string;
  label?: string;
  defaultValue?: string;
  placeholder?: string;
}
export interface PriceFormatProps {
  name?: string;
  defaultValue?: number;
}
export interface TextAreaProps {
  defaultValue?: string;
  name?: string;
  labelText?: string;
}

export type actionType = (
  prevState: any,
  formData: FormData
) => Promise<{ message: string }>;
// End Form Props
