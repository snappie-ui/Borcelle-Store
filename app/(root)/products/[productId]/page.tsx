import { getProductDetails, getRelatedProducts } from "@/lib/actions/actions";
import ProductCard from "@/components/ProductCard";
import Gallery from "@/components/Gallery";
import ProductInfo from "@/components/ProductInfo";
import React from "react";

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ productId: string }>
}) {
  const { productId } = await params; // Next.js 15 async params
  const product = await getProductDetails(productId);
  const relatedProducts = await getRelatedProducts(productId);

  return (
    <>
    <div className="flex justify-center items-start gap-16 py-10 px-5 max-md:flex-col max-md:items-center">
      <Gallery productMedia={product.media} />
      <ProductInfo productInfo={product} />
    </div>

    <div className="flex flex-col items-center px-10 py-5 max-md:px-3">
      <p className="text-heading3-bold">Related Products</p>
      <div className="flex flex-wrap gap-16 mx-auto mt-8">
        {relatedProducts?.map((product: ProductType) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
    </>
  )
}

export const dynamic = "force-dynamic";
