import axios from "axios";
import { error } from "@sveltejs/kit";

export async function load({ params }) {
    try {
        const { id } = params;
        const response = await axios.get(`https://dummyjson.com/products/${id}`);

        const p = response.data;
        const productDetails = {
            id: p.id,
            title: p.title,
            description: p.description,
            price: p.price,
            images: p.images[0]
        };

        return {
            product: productDetails
        };
    } catch (err) {
        console.error("Error loading product:", err);
        throw error(500, "Failed to load product details.");
    }
}
