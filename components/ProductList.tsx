import { getProducts } from "@/lib/actions/actions";
import ProductCard from "./ProductCard";
import Image from "next/image";


const ProductList = async () => {
  const products = await getProducts();

  return (
    <div className="flex flex-col items-center gap-10 py-8 px-5">
      {/* Image Heading */}
      <div className="relative mb-4">
        <Image
          src="/PRODUCT.png"
          alt="Products"
          width={200}   // adjust width as needed
          height={100}  // adjust height as needed
          className="object-contain"
        />
      </div>


      {!products || products.length === 0 ? (
        <p className="text-body-bold text-blue-100">No products found</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-16">
          {products.map((product: ProductType) => (
            <div
              key={product._id}
              className="transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:brightness-110"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
