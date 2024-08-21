const ItemData = [
  {
    image: "./images/news1.png",
    description: "3 Reasons why your business needs to be on social media.",
    date: "December 14, 2023",
  },
  {
    image: "./images/news2.png",
    description:
      "How ChaterBot helps you get results faster from your social media conversations.",
    date: "December 14, 2023",
  },
];

const NewsItem = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3">
      {ItemData.map((data) => (
        <div key={data.image} className=" h-[360px] w-full pb-8">
          <img src={data.image} className="rounded-md h-[200px] w-full" alt="image" />
          <div className="pl-4 w-full" >
            <p className="pr-20">{data.description}</p>
            <p className="text-sm mt-5 text-[#232323]">{data.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsItem;
