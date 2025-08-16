import { getCollections } from "@/lib/actions/actions";
import Image from "next/image";
import Link from "next/link";

const Collections = async () => {
  const collections = await getCollections();

  return (
    <div className="flex flex-col items-center gap-10 py-5 px-5">
      {/* Styled Heading */}
      <div className="relative mb-4">
              <Image
                src="/COLLECTION.png"
                alt="Products"
                width={250}   // adjust width as needed
                height={100}  // adjust height as needed
                className="object-contain"
              />
            </div>

      {!collections || collections.length === 0 ? (
        <p className="text-body-bold text-blue-100">No collections found</p>
      ) : (
        <div className="flex flex-wrap items-center justify-center gap-8">
          {collections.map((collection: CollectionType) => (
            <Link href={`/collections/${collection._id}`} key={collection._id}>
              <div className="overflow-hidden rounded-lg cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:brightness-110">
                <Image
                  src={collection.image}
                  alt={collection.title}
                  width={350}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Collections;
