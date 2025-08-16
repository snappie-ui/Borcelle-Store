import ProductCard from "@/components/ProductCard";
import { getCollectionDetails } from "@/lib/actions/actions";
import Image from "next/image";
import React from "react";

const CollectionDetails = async ({
  params,
}: {
  params: { collectionId: string };
}) => {
  const collectionDetails = await getCollectionDetails(params.collectionId);

  // Handle case where collection is not found
  if (!collectionDetails) {
    return (
      <p className="text-body-bold text-center mt-10">
        Sorry, this collection could not be found.
      </p>
    );
  }

  return (
    <div className="px-10 py-5 flex flex-col items-center gap-8">
      <Image
        src={collectionDetails.image}
        width={1500}
        height={1000}
        alt="collection"
        className="w-full h-[400px] object-cover rounded-xl"
      />
      <p className="text-heading3-bold text-grey-2">{collectionDetails.title}</p>
      <p className="text-body-normal text-grey-2 text-center max-w-[900px]">
        {collectionDetails.description}
      </p>
      <div className="flex flex-wrap gap-16 justify-center">
        {/* Handle case where there are no products in the collection */}
        {collectionDetails.products.length === 0 ? (
          <p className="text-body-bold">No products found in this collection.</p>
        ) : (
          collectionDetails.products.map((product: ProductType) => (
            <ProductCard key={product._id} product={product} />
          ))
        )}
      </div>
    </div>
  );
};

export default CollectionDetails;

export const dynamic = "force-dynamic";