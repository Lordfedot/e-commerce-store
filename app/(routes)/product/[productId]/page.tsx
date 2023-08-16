import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import Info from "@/components/Info";
import ProductList from "@/components/ProductsList";
import Gallery from "@/components/gallery";
import Container from "@/components/ui/Container";

type Props = {
  params: {
    productId: string;
  };
};

const ProductPage = async ({ params }: Props) => {
  const product = await getProduct(params.productId);
  const suggestedProduct = await getProducts({
    categoryId: product?.category?.id,
  });
  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Gallery images={product.images} />
            <Info data={product} />
          </div>
          <hr className="my-10 " />
          <ProductList
            title="Related Products"
            items={suggestedProduct}
          ></ProductList>
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;
