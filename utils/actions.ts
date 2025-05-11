/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import db from "@/utils/db";
import { currentUser } from "@clerk/nextjs/server";
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
  if (!product) {
    redirect("/products");
  }
  return product;
};

// get user to check if the user logged in or not
const getAuthUser = async () => {
  const user = await currentUser();
  if (!user) {
    throw new Error("you must logein!");
  }
  return user;
};
// Create Product Function
export const createProduct = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  const user = await getAuthUser();

  try {
    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const featured = Boolean(formData.get("featured") as string);
    const price = Number(formData.get("price") as string);
    const image = formData.get("image") as File;

    await db.products.create({
      data: {
        name,
        description,
        price,
        featured,
        image : "/images/product-1.jpg",
        clerkId : user.id
      }
    })
    return {message : "product created successfully!"}
  } catch (error) {
    return renderError
    console.log(error);
  }
};
