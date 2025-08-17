import ProductCard from "@/components/ProductCard";
import { getProductDetails } from "@/lib/actions/actions";
import { auth, clerkClient } from "@clerk/nextjs/server";

export const dynamic = "force-dynamic";

const WishlistPage = async () => {
  const { userId } = await auth();

  if (!userId) {
    return (
      <div className="px-10 py-5">
        <p className="text-heading3-bold my-10">Your Wishlist</p>
        <p>You must be signed in to view your wishlist.</p>
      </div>
    );
  }

  // Fetch user and wishlist
  const client = await clerkClient(); // call the function
  const user = await client.users.getUser(userId);
  const wishlist = (user.publicMetadata.wishlist as string[]) || [];

  // Fetch products
  const wishlistProducts = await Promise.all(
    wishlist.map(async (productId: string) => await getProductDetails(productId))
  );

  return (
    <div className="px-10 py-5">
      <p className="text-heading3-bold my-10">Your Wishlist</p>

      {wishlistProducts.length === 0 && <p>No items in your wishlist</p>}

      <div className="flex flex-wrap justify-center gap-16">
        {wishlistProducts.map(
          (product) =>
            product && <ProductCard key={product._id} product={product} updateSignedInUser={undefined} />
        )}
      </div>
    </div>
  );
};

export default WishlistPage;
