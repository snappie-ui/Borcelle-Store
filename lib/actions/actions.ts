export const getCollections = async () => {
  const collections = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/collections`)
  return await collections.json()
}

export const getCollectionDetails = async (collectionId: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/collections/${collectionId}`,
      { cache: "no-store" } // ensures fresh data on every request
    );

    if (!res.ok) {
      console.error(`Failed to fetch collection ${collectionId}: ${res.status}`);
      return null; // handle missing or failed fetch gracefully
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching collection details:", error);
    return null;
  }
};


export const getProducts = async () => {
  const products = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`)
  return await products.json()
}

export const getProductDetails = async (productId: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/products/${productId}`,
      { cache: "no-store" } // ensures fresh data on every request
    );

    if (!res.ok) {
      console.error(`Failed to fetch product ${productId}: ${res.status}`);
      return null; // handle missing or failed fetch gracefully
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching product details:", error);
    return null;
  }
};

export const getSearchedProducts = async (query: string) => {
  const searchedProducts = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/search/${query}`)
  return await searchedProducts.json()
}

export const getOrders = async (customerId: string) => {
  const orders = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders/customers/${customerId}`)
  return await orders.json()
}

export const getRelatedProducts = async (productId: string) => {
  const relatedProducts = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${productId}/related`)
  return await relatedProducts.json()
}