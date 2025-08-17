import ProductCard from "@/components/ProductCard";
import { getCollectionDetails } from "@/lib/actions/actions";
import Image from "next/image";
import React from "react";

import { Metadata } from "next";

type Props = {
  params: { collectionId: string };
};

export default async function CollectionDetails({ params }: Props) {
  const collectionDetails = await getCollectionDetails(params.collectionId);

  if (!collectionDetails) {
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


// Force server rendering for always-fresh data
export const dynamic = "force-dynamic";
