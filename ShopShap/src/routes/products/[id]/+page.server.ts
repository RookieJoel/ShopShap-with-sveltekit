export function load({ params }) {
    try {
        const { id } = params;
        console.log(params);
        console.log("Product ID:", id);

        const productDetails = {
            id,
            name: `Product ${id}`,
            description: `Description for product ${id}`,
            price: (Math.random() * 100).toFixed(2),
            image: `https://via.placeholder.com/150?text=Product+${id}`
        };

        return {
            product: productDetails
        };
    } catch (error) {
        console.error("Error loading product:", error);
        return {
            product: null,
            error: "Failed to load product details."
        };
    }
}
