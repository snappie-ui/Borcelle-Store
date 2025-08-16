import ProductCard from "@/components/ProductCard";
import { getCollectionDetails } from "@/lib/actions/actions";
import Image from "next/image";
import React from "react";

// Define your param type separately for clarity
interface CollectionPageProps {
  params: {
    collectionId: string;
  };
}

const CollectionDetails = async ({ params }: CollectionPageProps) => {
  const collectionDetails = await getCollectionDetails(params.collectionId);

  if (!collectionDetails) {
    // You can choose to handle not found explicitly
    return <div className="px-10 py-5 text-red-500">Collection not found.</div>;
  }

  return (
    <div className="px-10 py-5 flex flex-col items-center gap-8">
      <Image
        src={collectionDetails.image}
        width={1500}
        height={1000}
        alt="collection"
        className="w-full h-[400px] object-cover rounded-xl"
        priority
      />
      <p className="text-heading3-bold text-grey-2">{collectionDetails.title}</p>
      <p className="text-body-normal text-grey-2 text-center max-w-[900px]">
        {collectionDetails.description}
      </p>
      <div className="flex flex-wrap gap-16 justify-center">
        {collectionDetails.products.map((product: ProductType) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CollectionDetails;

// Force server rendering for always-fresh data
export const dynamic = "force-dynamic";
