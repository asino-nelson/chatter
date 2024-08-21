import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <div id="products" className="w-full py-10">
      <div className="py-8 md:px-16 px-12">
        <h2 className="text-3xl font-semibold md:mb-0 mb-3">OUR PRODUCTS</h2>
        <p>Take a closer look at the products we offer.</p>
      </div>
      <div className="md:px-8 px-4 w-full">
        <ProductCard />
      </div>
    </div>
  );
};

export default Products;
