import ValuePropCard from "./ValuePropCard";

const ValueProp = () => {
  return (
    <div id="about" className=" bg-[#F6F3F7] w-full  md:p-10 p-5">
      <div className="py-8 md:px-16 px-8 gap-4">
        <h2 className="font-semibold text-3xl md:mb-0 mb-3">WHY US</h2>
        <p>Why does your business need ChatterBot?</p>
      </div>
      <ValuePropCard />
    </div>
  );
};

export default ValueProp;
