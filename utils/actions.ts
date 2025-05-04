"use server"
import db from "@/utils/db"

// Fetch All Featured Products
export const fetchFeaturedProducts = async () => {
    const products = await db.products.findMany({
        where: {
            featured: true
        }
    })
    return products
}

// Fetch All Products
export const fetchAllProducts = async () => {
    const products = await db.products.findMany({
        orderBy: {
            createdAt : "desc"
        }
    });
    return products
}

