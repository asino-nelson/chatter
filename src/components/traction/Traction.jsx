const Traction = () => {
  return (
    <div className="bg-[#EDE7EF] w-full h-[554px] p-10">
      <div className="py-10 px-16">
        <div className="flex flex-row justify-between">
          <div className="text-[#3C053C]">
            <h2 className="text-4xl font-semibold">Success Stories</h2>
            <p className="pr-20">
              We help businesses convert conversations to results. Join this
              list of businesses that we work with.
            </p>
            <a href="#">Read the latest stories</a>
          </div>
          <div className="pr-32">
            <div className=" grid grid-cols-3 pr-32">
              <img src="./images/Link_margin.png" alt="image" />
              <img src="./images/ford.png" alt="image" />
              <img src="./images/audi.png" alt="image" />
              <img src="./images/samsung.png" alt="image" />
              <img src="./images/ikea.png" alt="image" />
              <img src="./images/pinterest.png" alt="image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Traction;
