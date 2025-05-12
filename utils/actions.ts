/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import db from "@/utils/db";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { productSchema } from "./schema";

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
    return redirect("/");
  }
  return user;
};

const renderError = (error: unknown): { message: string } => {
  console.log(error);

  return {
    message: error instanceof Error ? error.message : "Unknown Error",
  };
};

// Create Product Function
export const createProduct = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  const user = await getAuthUser();

  try {
    const rowData = Object.fromEntries(formData);
    const validateData = productSchema.safeParse(rowData);

    if (!validateData.success) {
      const error = validateData.error.errors.map((e) => e.message);
      throw new Error(error.join(","));
    }

    await db.products.create({
      data: {
        ...validateData.data,
        image: "/images/product-1.jpg",
        clerkId: user.id,
      },
    });
    return { message: "product created successfully!" };
  } catch (error) {
    return renderError(error);
  }
};
