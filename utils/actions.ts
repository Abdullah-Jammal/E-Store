/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import db from "@/utils/db";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { imageSchema, productSchema, validateSchema } from "./schema";
import { uploadImage } from "./supabase";

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
    const file = formData.get("image") as File;
    
    // Validate product data
    const validateData = validateSchema(productSchema, rowData);
    // Validate image data
    const validateImage = validateSchema(imageSchema, { image: file });

    // Upload image and get URL
    const fullImagePath = await uploadImage(validateImage.image);

    await db.products.create({
      data: {
        ...validateData,
        image: fullImagePath,
        clerkId: user.id,
      },
    });

    return { message: "Product created successfully!" };
  } catch (error) {
    return renderError(error);
  }
};
