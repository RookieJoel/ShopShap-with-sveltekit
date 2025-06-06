import axios from "axios";
import { error } from "@sveltejs/kit";

export async function load() {
  try {
    const response = await axios.get("https://dummyjson.com/products");
    const products = response.data.products.map((p: any) => ({
      id: p.id,
      title: p.title,
      description: p.description,
      price: p.price,
      images: p.images[0]
    }));
    return {
      workouts: { products }
    };
  } catch (err) {
    console.error("Failed to fetch workouts:", err);
    throw error(500, "Failed to load workouts");
  }
}