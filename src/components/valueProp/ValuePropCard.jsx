const CardData = [
  {
    icon: "../images/lightning_ring.png",
    title: "Instant Replies",
    description:
      "Increase customer satisfaction rate with instant replies all while you close conversations faster.",
  },
  {
    icon: "../images/time_atack.png",
    title: "24/7 Availability",
    description:
      "Ensure you are always there for your customers and you never miss an opportunity any day any time.",
  },
  {
    icon: "../images/timer_fill.png",
    title: "Take back your time ",
    description:
      "We handle the repetitive conversations while closing conversations faster so that you can focus on growing your business.",
  },
];

const ValuePropCard = () => {
  return (
    <div className="grid items-center grid-cols-1 lg:grid-cols-3 md:px-8 px-10 lg:h-[305px] w-full gap-5">
      {CardData.map((data) => (
        <div
          key={data.icon}
          className="bg-white flex flex-col justify-center  md:h-[273px] rounded-md p-7 gap-3"
        >
          <img src={data.icon} className="md:w-10 w-8 md:h-10 h-8" alt="icon" />
          <h3 className="md:text-2xl text-xl font-semibold">{data.title}</h3>
          <p className="md:text-lg text-base pr-4">{data.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ValuePropCard;
