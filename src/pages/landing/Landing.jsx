import Hero from "../../components/hero/Hero";
import Products from "../../components/products/Products";
import News from "../../components/news/News";
import JoinUs from "../../components/joinUs/JoinUs";
import Traction from "../../components/traction/Traction";
import ValueProp from "../../components/valueProp/ValueProp";

const Landing = () => {

  return (
    <>
      <div className="text-xl">
        <Hero />
        <ValueProp/>
        <Products />
        <Traction />
        <News />
        <JoinUs />       
      </div>
    </>
  );
};

export default Landing;