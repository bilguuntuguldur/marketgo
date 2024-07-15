import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import { Product, Category } from "@/types";
import { isAxiosError } from "@/lib/utils";

const api = new WooCommerceRestApi({
  url: "https://www.bekishop.com/",
  consumerKey: process.env.WOOCOMMERCE_KEY!,
  consumerSecret: process.env.WOOCOMMERCE_SECRET!,
  version: "wc/v3",
  axiosConfig: {
    headers: {
      // Ensure no restricted headers are set here
    },
  },
});
export async function fetchWooCommerceProducts(): Promise<Product[]> {
  try {
    const response = await api.get("products", { per_page: 35 });
    return response.data as Product[];
  } catch (error) {
    console.error("Error fetching products:", error);
    throw new Error(JSON.stringify(error));
  }
}
export async function fetchProductsByCategory(categoryId: number, perPage: number): Promise<Product[]> {
  let products: Product[] = [];
  let page = 1;

  try {
    while (products.length < perPage) {
      const response = await api.get("products", {
        category: categoryId.toString(),
        per_page: perPage,
        page,
        orderby: "date",
        order: "desc",
      });
      const fetchedProducts: Product[] = response.data;
      products = [...products, ...fetchedProducts];
      if (fetchedProducts.length < perPage) break;
      page++;
    }

    return products.slice(0, perPage);
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function fetchWooCommerceCategories(): Promise<Category[]> {
  try {
    const response = await api.get("products/categories");
    return response.data as Category[];
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function fetchWooCommerceCategoriesProduct(categoryId: number): Promise<Product[]> {
  try {
    const response = await api.get("products", { category: categoryId.toString(), per_page: 35 });
    return response.data as Product[];
  } catch (error) {
    console.error(error);
    return [];
  }
}
