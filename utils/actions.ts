"use server";
import db from "@/utils/db";
import { redirect } from "next/navigation";

// Fetch All Featured Products
export const fetchFeaturedProducts = async () => {
  const products = await db.products.findMany({
    where: {
      featured: true,
    },
  });
  return products;
};

// Fetch All Products
export const fetchAllProducts = async ({ search = "" }: { search: string }) => {
  const products = await db.products.findMany({
    where: {
      OR: [
        {
          name: { contains: search, mode: "insensitive" },
        },
      ],
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return products;
};

// Get Product By ID
export const fetchProductByID = async ({ id }: { id: string }) => {
  const product = await db.products.findUnique({
    where: {
      id: id,
    },
  });
  if(!product) {
    redirect('/products')
  }
  return product;
};
