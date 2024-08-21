const CardData = [
  {
    title: "E-Shop Chatbot",
    description:
      "Do your client message you for appointment booking? Our chat bot can handle that conversation for you.",
  },
  {
    title: "Appointment Booking Chatbot",
    description:
      "Do your client message you for appointment booking? Our chat bot can handle that conversation for you.",
  },
];
const ProductCard = () => {
  return (
    <div className="grid items-center grid-cols-1 lg:grid-cols-2 w-full">
      {CardData.map((data) => (
        <div key={data.icon} className=" lg:h-[320px] w-full md:px-8 px-4 py-4">
          <div className="md:px-8 px-4 py-4 gap-4 border border-[#E1E4E5] rounded-md lg:h-72 w-full">
            <div className="gap-2 text-[#1E715D]">
              <h2 className="lg:text-2xl text-xl">{data.title}</h2>
              <div className="bg-[#1E715D] h-1 w-full md:mt-7 mt-4"></div>
            </div>
            <p className="md:py-5 py-4 md:text-lg text-base">{data.description}</p>
            <a href="#">Learn more</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
