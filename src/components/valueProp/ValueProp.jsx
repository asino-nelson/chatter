import ValuePropCard from "./ValuePropCard";

const ValueProp = () => {
  return (
    <div id="about" className="bg-[#F6F3F7] w-full h-[534px] p-10">
      <div className="py-8 px-16 gap-4">
        <h2 className="font-semibold text-3xl">WHY US</h2>
        <p>Why does your business need ChatterBot?</p>
      </div>
      <ValuePropCard />
    </div>
  );
};

export default ValueProp;
