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
    <div className="grid items-center grid-cols-1 lg:grid-cols-3 px-8 h-[305px] w-full gap-5">
      {CardData.map((data) => (
        <div
          key={data.icon}
          className="bg-white flex flex-col justify-center  h-[273px] rounded-md p-7 gap-3"
        >
          <img src={data.icon} className="w-12 h-12" alt="icon" />
          <h3 className="text-2xl font-semibold">{data.title}</h3>
          <p className="pr-4">{data.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ValuePropCard;
