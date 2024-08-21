import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <div id="products" className="h-[549px] w-full py-10">
      <div className="py-8 px-16">
        <h2 className="text-4xl">OUR PRODUCTS</h2>
        <p className="text-2xl">Take a closer look at the products we offer.</p>
      </div>
      <div className="px-8 gap-5 w-full">
        <ProductCard />
      </div>
    </div>
  );
};

export default Products;
